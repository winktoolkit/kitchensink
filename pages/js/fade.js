ks.tests.fade = (function()
{
	var fade = {};
	
	fade.fadeOut = function()
	{
		wink.fx.fadeOut($('test_fade_page_1'), {duration: 900});
	};
	
	return fade;
	
})();