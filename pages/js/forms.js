ks.tests.form = (function()
{
	var form = {};
	
    /**
     * WORKAROUND FOR IOS
     */
    form.focus = function()
    {
    	if ( wink.ua.isIOS && wink.ua.osVersion < 5)
    	{
    		wink.byId('test_forms').style.visibility = 'hidden';
    	}
    };
    
    /**
     * WORKAROUND FOR IOS
     */
    form.blur = function()
    {
    	if ( wink.ua.isIOS && wink.ua.osVersion < 5)
    	{
    		wink.byId('test_forms').style.visibility = 'visible';
    	}
    };
    
    return form;
})();