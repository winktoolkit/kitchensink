/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
ks.test = (function()
{
	var test = {};
	
	/**
	 * 
	 */
	test.load = function(section, index)
	{
		ks.xhr.request.title = ks.config[section][index].title;
		
		wink.layer.show();
		
		var _h = window.getComputedStyle($('loader'))['height'];
		var _w = window.getComputedStyle($('loader'))['width'];

		ks.spinner.toggle();
		
		$('loader').style.top = ((window.innerHeight - _h.substring(0, _h.length-2)) / 2) + window.pageYOffset + 'px';
		$('loader').style.left = (window.innerWidth - _w.substring(0, _w.length-2))/2 + 'px';
	
		$('loader').style.visibility = "visible";
		
		ks.xhr.resources = ks.config[section][index].resources;
		ks.xhr.sendData(ks.config[section][index].url, null, 'GET', {method: 'onLoad', context: this}, {method: 'onError', context: this}, null);
	};
	
	/**
	 * 
	 */
	test.onLoad = function(result)
	{
		if ( wink.isSet(ks.xhr.resources) )
		{
			wink.load(ks.xhr.resources, function()
			{
				wink.ux.history.push('panels', 1);
				ks.test.display();
			}, 
			{
				useLocalDatabase: useLocalDatabase
			});
		}

		$('testContent').innerHTML = result.xhrObject.responseText;
		$('title').innerHTML = '<span class="letters"><span class="firstLetter">' + result.title.substring(0, 1) + '</span>' + result.title.substring(1, result.title.length) + '</span>';
	};
	
	/**
	 * 
	 */
	test.onError = function(result)
	{
		$('loader').style.visibility = "hidden";
		
		wink.layer.hide();
		
		ks.spinner.toggle();
	};
	
	/**
	 * 
	 */
	test.display = function()
	{
		$('loader').style.visibility = "hidden";
		
		wink.layer.hide();
		ks.spinner.toggle();
		
		$('wrapper').style['overflow-y'] = '';
		
		wink.fx.apply($('container'), {'transition-timing-function': 'linear'});
		wink.fx.onTransitionEnd($('container'), this.updateTestSize, false);
		
		$('container').translate(-window.innerWidth, 0);
	};
	
	/**
	 * 
	 */
	test.updateTestSize = function()
	{
		$('wrapper').style.height = (($('testContent').offsetHeight < window.innerHeight)?window.innerHeight:($('testContent').offsetHeight+44)) + 'px';
	};
	
	return test;
})();