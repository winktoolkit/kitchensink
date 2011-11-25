/*--------------------------------------------------------
 * Copyright (c) 2011, The Dojo Foundation
 * This software is distributed under the "Simplified BSD license",
 * the text of which is available at http://www.winktoolkit.org/licence.txt
 * or see the "license.txt" file for more details.
 *--------------------------------------------------------*/

/**
 * This is the 'easy caching' mechanism of wink. It gives you the possibility to load and store your CSS and JS resources into the device's local database. It can be used at the page startup or afterwards
 * 
 * @methods:
 * 	--> load: loads the resources
 * 	--> resetDatabase: deletes the database content
 * 
 * @compatibility:
 * 	--> Iphone OS2, Iphone OS3, Iphone OS4, Android 2.1, Android 2.2, Android 2.3, BlackBerry 6
 * 
 * @author:
 * 	--> Julien VAN DEN BOSSCHE, Jerome GIRAUD, Sylvain LALANDE
 */

if (typeof wink == 'undefined')
{
	wink = {};
}

/**
 * The 'easy caching' component
 */
wink.cache = (function() {

var _useLocalDatabase = true,
	_dbName = 'wink',
	_dbTable = 'resources',
	_dbSize = 5242880, // 5 * 1024 * 1024
	_dbDescription = 'Local cache',
	_expires = 1814400, // default value: 3 * 7 * 24 * 60 * 60
	
	_db = null,
	_headNode,
	_now,
	_cacheErrors,
	_errors,
	_loadErrors,
	_resourcesCleaned,
	_resourcesOldVersion,
	_cleaned;

var cache = {};

/**
 * Loads the resources
 * 
 * @parameters:
 *  --> resources: the resources to load
 *      the ressource structure is:
 *      {
 * 			url: the url of the resource,
 * 			type: 'js' / 'css',
 * 			group: [optional] allows to specify an order of loading: a resource in a group will be loaded before groups with higher indexes (default: 0),
 *  		expires: [optional] the expiration duration in seconds: if not specified, takes the global value (see options), if -1 specified, the existing resource will be deleted,
 *  		version: [optional] the version of the resource: very useful for versioning of code, an outdated resource is seen as an expired resource (default: 1.0)
 *      }
 *  --> onload: [optional] a function called once all the resources have been loaded. a result parameter is passed to this function:
 *  	{
 *  		loadTime: the loading duration in ms,
 *  		useOfLocalDatabase: specify whether the local database is used (false when an error occurs),
 *  		errors: an array of cache system errors,
 *  		loadErrors: an array of network loading errors
 *  		resourcesCleaned: an array of resources cleaned
 *  		resourcesOldVersion: an array of outdated resources deleted
 *  	}
 *  --> options: [optional] options:
 *  	{
 *  		dbName: the name of the database (default: wink),
 *  		dbTable: the name of the resource table (default: resources),
 *  		dbSize: the size of the database in bytes (default: 5242880 o = 5 Mo),
 *  		expires: the global value for expiration duration (default: 1814400 s = 3 weeks),
 *  		useLocalDatabase: specify to use the local database or not (default: true)
 *  	}
 */
cache.load = function(resources, onload, options)
{
	_initialize();
	
	var opts = options || {};
	if (opts.dbName) {
		_dbName = opts.dbName;
	}
	if (opts.dbTable) {
		_dbTable = opts.dbTable;
	}
	if (opts.dbSize) {
		_dbSize = opts.dbSize;
	}
	if (opts.expires) {
		_expires = opts.expires;
	}
	if (opts.useLocalDatabase === false) {
		_useLocalDatabase = false;
	}
	
	var groups = _getResourceGroups(resources);

	var loadCb = function() {
		if (_cacheErrors.length > 0) {
			_errors = _errors.concat(_cacheErrors);
			_useLocalDatabase = false;
			_cacheErrors = [];
			_chainResourceLoad(groups, 0, loadCb);
		} else {
			_cacheProcessEnd(onload);
		}
	};
	
	_chainResourceLoad(groups, 0, loadCb);
};

/**
 * Deletes the database content
 * 
 * @parameters:
 *  --> onreset: [optional] a function called once the database is reseted. a result parameter is passed to this function:
 *  	{
 *  		errors: an array of cache system errors
 *  	}
 */
cache.resetDatabase = function(onreset)
{
	_initialize();
	
	var _onEnd = function() {
		_resetProcessEnd(onreset);
	};
	
	var dropProcess = function() {
		_drop(_onEnd);
    };
	try {
		_connect(dropProcess);
	} catch(e) {
		_errors.push("[cache.resetDatabase] Error : " + e.toString());
		_onEnd();
	}
};

/**
 * 
 */
var _cacheProcessEnd = function(onload)
{
	if (onload)
	{
		onload({
			errors: _errors,
			loadErrors: _loadErrors,
			resourcesCleaned: _resourcesCleaned,
			resourcesOldVersion: _resourcesOldVersion,
			useOfLocalDatabase: _useLocalDatabase,
			loadTime: ((new Date().getTime()) - _now)
		});
	}
};

/**
 * 
 */
var _resetProcessEnd = function(onreset)
{
	if (onreset)
	{
		if (_cacheErrors.length > 0) {
			_errors = _errors.concat(_cacheErrors);
		}
		onreset({
			errors: _errors
		});
	}
};

/**
 * 
 */
var _initialize = function()
{
	_now = new Date().getTime();
	_headNode = document.getElementsByTagName('head')[0];
	_cacheErrors = [];
	_errors = [];
	_loadErrors = [];
	_resourcesCleaned = [],
	_resourcesOldVersion = [],
	_cleaned = false;
};

/**
 * Iterates on each group
 */
var _chainResourceLoad = function(groups, index, callback)
{
	var l = groups.length;
	while (!groups[index] && index < l) {
		index++;
	}
	if (index >= l || _cacheErrors.length > 0) {
		callback();
		return;
	}
	var resources = groups[index];
	var cb = function() {
		_chainResourceLoad(groups, (++index), callback);
	};
	_loadResources(resources, cb);
};

/**
 * Returns an array of groups of resources
 */
var _getResourceGroups = function(resources)
{
	var groups = [];
	
	var i, l = resources.length;
	for (i = 0; i < l; i++) {
		var r = resources[i];
		var g = r.group;
		
		if (!g) {
			g = 0;
		}
		
		var group;
		if (groups[g]) {
			group = groups[g];
		} else {
			group = groups[g] = [];
		}
		group.push(r);
	}
	return groups;
};

/**
 * it connects, cleans and loads the given resources
 */
var _loadResources = function(resources, callback)
{
	var supportDb = _supportDb();
	
	var loadProcessBasic = function() {
    	_load(resources, callback, false);
    };
	
	if (supportDb && _useLocalDatabase)
	{
		var loadProcessCache = function() {
			if (_cacheErrors.length > 0) {
				callback();
				return;
			}
			var _loadJob = function() {
				_load(resources, callback, true);
			};
			if (!_cleaned) {
				_cleaned = true;
				_cleanupCache(_loadJob);
			} else {
				_loadJob();
			}
	    };
		try {
			_connect(loadProcessCache);
		} catch(e) {
			_notifyCacheError("Connect error: " + e.toString());
			callback();
		}
	} 
	else 
	{
		loadProcessBasic();
	}
};

/**
 * loads the given resources
 */
var _load = function(resources, callback, fromCache)
{
	var i, l = resources.length;
	
	_queueManager.load(l, callback);
	
	for (i = 0; i < l; i++)
	{
		var r = resources[i];
		var type = r.type;
		var url = r.url;
		
		if (fromCache)
		{
			var expires = r.expires ? r.expires : _expires;
			var version = r.version ? r.version : 1.0;
			
			var urlp = _extractURL(url);
			var urlm = urlp.protocol + '//' + urlp.host + (urlp.port != 0 ? ':' + urlp.port: '') + urlp.path + urlp.query + urlp.hash;
			
			_getCacheResource(urlm, type, version, expires);
		} 
		else
		{
			_loadFile(url, null, type);
		}
	}
};

/**
 * Manages the loading queue and invokes the callback when process is finished
 */
var _queueManager = (function()
		{
	var _size = null,
		_loaded = null,
		_callback = null;
	
	var queueManager = {
		load: function(size, callback) {
			_callback = callback;
			_size = size;
			_loaded = 0;
		},
		markAsLoaded: function() {
			_loaded++;
			if (_loaded == _size) {
				_callback();
			}
		}
	};
	return queueManager;
})();

/**
 * Loads the given resource with the url OR the content
 */
var _loadFile = function(url, content, type)
{
	var cb = function() {
		_queueManager.markAsLoaded();
	};
	if (type == 'js') 
	{
		_loadJs(url, content, cb);
	}
	else if (type == 'css')
	{
		_loadCss(url, content, cb);
	}
};

/**
 * Adds a JS resource to the document
 */
var _loadJs = function(url, content, callback)
{
	var s = document.createElement('script');
	s.type = 'text/javascript';
	
	if (url != null) {
		s.onload = function() {
			s.onload = s.onerror = null;
			callback();
		};
		s.onerror = function() {
			s.onload = s.onerror = null;
			_notifyLoadFailure(url);
			callback();
		};
		s.src = url;
		_headNode.appendChild(s);
	} else {
		s.textContent = content;
		_headNode.appendChild(s);
		callback();
	}
};

/**
 * Adds a CSS resource to the document
 */
var _loadCss = function(url, content, callback)
{
	var l;
	if (url != null) {
		l = document.createElement('link');
	    l.rel = 'stylesheet';
	    l.type = 'text/css';
	    l.href = url;
	} else {
		l = document.createElement('style');
	    l.setAttribute('type', 'text/css');
	    var tn = document.createTextNode(content);
	    l.appendChild(tn);
	}
	_headNode.appendChild(l);
	callback();
};

/**
 * Requirements for the cache system
 */
var _supportDb = function()
{
	if (window.openDatabase && window.XMLHttpRequest) {
		return true;
	}
	return false;
};

/**
 * Opens a database connection
 */
var _openDb = function()
{
	return window.openDatabase(_dbName, '1.0', _dbDescription, _dbSize);
};

/**
 * Initialize the database connection
 */
var _connect = function(callback)
{
	if (_db == null) {
		_db = _openDb();
		_create(callback);
	} else {
		callback();
	}
};

/**
 * 
 */
var _create = function(callback)
{
	_executeSql('CREATE TABLE IF NOT EXISTS ' + _dbTable + '(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, url TEXT NOT NULL UNIQUE, data TEXT NOT NULL, type TEXT NOT NULL, version REAL NOT NULL, expires REAL NOT NULL);', [], callback);
};

/**
 * 
 */
var _drop = function(callback)
{
	var dropError = function(transaction, error) {
		_sqlError(transaction, error);
		callback();
	};
	_executeSql('DROP TABLE ' + _dbTable, [], callback, dropError);
};

/**
 * 
 */
var _storeResource = function(url, type, version, expires, data, callback, errCallback)
{
	_executeSql('INSERT INTO ' + _dbTable + ' (url, type, version, expires, data) VALUES (?,?,?,?,?);', [ url, type, version, (_now + (expires * 1000)), data ], callback, errCallback);
};

/**
 * 
 */
var _deleteResource = function(url, callback)
{
	_executeSql('DELETE FROM ' + _dbTable + ' WHERE url=?;', [ url ], callback);
};

/**
 * This method tries to get the resource from the database.
 * It gets the resource with an xhr if this is not available and inserts the retrieved resource in the database.
 * It deletes an expired or obsolete existing version of the resource.
 */
var _getCacheResource = function(url, type, version, expires)
{
	var getResource = function() {
		var req = new XMLHttpRequest();
    	var content;
	    
    	req.open('GET', url, false);
    	req.send(null);
	    
    	if (req.readyState == 4 && ((req.status >= 200 && req.status < 400) || req.status == 0))
    	{
    		content = req.responseText;
    		
    		if (type == 'css') {
    			var urlp = _extractURL(url);
    			if (urlp.file != '') {
    				urlp.path = urlp.path.replace(urlp.file, '');
    			}
    			content = _adaptCSS(content, urlp);
    		}
    		
    		var afterInsert = function() {
    			_loadFile(null, content, type);
    		};
    		var afterInsertError = function(transaction, error) {
    			_sqlError(transaction, error);
    			_loadFile(null, '', type);
    		};
    		_storeResource(url, type, version, expires, content, afterInsert, afterInsertError);
    	}
    	else
    	{
    		_notifyLoadFailure(url);
		    _queueManager.markAsLoaded();
    	}
	};
	
	_executeSql('SELECT version, expires, data FROM ' + _dbTable + ' WHERE url=?;', [ url ], function(transaction, data) {
		var content;
		var todelete = true;
		if (data && data.rows)
		{
			var l = data.rows.length;
			if (l == 0) {
				todelete = false;
			} else if (l == 1) {
				var item = data.rows.item(0);
				if (item) {
					if (item.version != version) {
						_resourcesOldVersion.push(url);
					} else if (expires == -1) {
						_resourcesCleaned.push(url);
					} else if (item.expires > _now) {
						content = item.data;
					}
				}	
			}
		}
		
		if (content)
		{
			_loadFile(null, content, type);
		}
		else
		{
			if (todelete) {
				_deleteResource(url, getResource);
			} else {
				getResource();
			}
		}
	});
};

/**
 * Cleans all expired resources
 */
var _cleanupCache = function(callback)
{
	_executeSql('SELECT url FROM ' + _dbTable + ' WHERE expires<?;', [ _now ], function(transaction, data) {
		var content;
		if (data && data.rows) {
			var index = -1, rows = data.rows, l = rows.length;
			
			var _iterable = function() {
				index++;
				if (index >= l) {
					callback();
					return;
				}
				var item = rows.item(index);
				if (item && item.url) {
					_resourcesCleaned.push(item.url);
					_deleteResource(item.url, _iterable);
				}
			};
			_iterable();
		}
	});
};

/**
 * Executes an SQL order
 */
var _executeSql = function(sqlStatement, parameters, callback, errorCallback)
{
	var cb = callback ? callback : _sqlSuccess;
	var errorCb = errorCallback ? errorCallback : _sqlError;
	_db.transaction(function(transaction) {
		transaction.executeSql(sqlStatement, parameters, cb, errorCb);
	});
};

/**
 * Network load failure
 */
var _notifyLoadFailure = function(url)
{
	_loadErrors.push(url);
};

/**
 * Cache system error
 */
var _notifyCacheError = function(error)
{
	_cacheErrors.push("Cache System Error: " + error);
};

/**
 * 
 */
var _sqlError = function(transaction, error)
{
	_notifyCacheError('[SqlError] code: ' + error.code + ', Message: ' + error.message);
	return true;
};

/**
 * 
 */
var _sqlSuccess = function(transaction, result)
{
	return true;
};

/**
 * Extracts URL infos
 */
var _extractURL = function(url)
{
	var a = document.createElement('a');
	a.href = url;
    
	return ({
		source: url,
        protocol: a.protocol,
        host: a.hostname,
        port: a.port,
        query: a.search,
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash,
        path: a.pathname.replace(/^([^\/])/, '/$1')
	});
};

/**
 * Adapts CSS urls
 */
var _adaptCSS = function(content, url_parts)
{
	var result = null, 
		sBegin = "url",
		sBeginL = sBegin.length,
		sEnd = ")",
		sEndL = sEnd.length,
		searched = "../",
		searchedL = searched.length,
		urlreg = /(url)( *)(\()( *)('|")?(.*)('|")?( *)(\))/i,
		urlreplace = url_parts.protocol + "//" + url_parts.host + url_parts.path,
		p1 = -1,
		p2 = -1,
		p3 = -1,
		offset = -1,
		url = null,
		tmp = null,
		part = null,
		buffer = [],
		cursor = 0;

	p1 = content.indexOf(sBegin);

    while (p1 != -1) {
    	p2 = content.indexOf(sEnd, p1 + sBeginL);
    	url = content.substring(p1, p2 + sEndL);
    	offset = p1 + sBeginL;

    	p3 = url.indexOf(searched);
    	if (p3 != -1) {
    		tmp = url.replace(urlreg, "$1$3" + urlreplace + "$6$9");
    		
    		part = content.substring(cursor, p1);
    		part += tmp;
    		
    		buffer.push(part);
    		cursor = (p1 + url.length);
    	}
    	p1 = content.indexOf(sBegin, offset);
    }
    
    buffer.push(content.substring(cursor));
    result = buffer.join('');

	return result;
};

return cache;

})();

// Bindings
wink.load = wink.cache.load;
