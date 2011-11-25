/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
ks.splash = (function()
{
	var splash = {};
	
	/**
	 * 
	 */
	splash.init = function() 
	{
		$('wrapper').style.visibility = 'visible';
		$('splash').style.visibility = 'visible';
		$('orientation').style.visibility = 'visible';
		
		ks.utils.sizeElements();
		ks.navigation.animate(200);
		
		wink.fx.applyTransition($('logo'), 'opacity', '2000ms', '0ms', 'ease-in');
		wink.fx.applyTransition($('splash'), 'opacity', '2000ms', '0ms', 'ease-in');
		
		wink.fx.onTransitionEnd($('logo'), this.hide, false);
		wink.fx.onTransitionEnd($('splash'), this.remove, false);
			
		$('container').translate(0, 0);

		wink.setTimeout(ks.list, 'init', 500);
	};
	
	/**
	 * 
	 */
	splash.hide = function(e)
	{
		e.stopPropagation();
		$('splash').style.opacity = '0';
	};
	
	/**
	 * 
	 */
	splash.remove = function()
	{
		$('wrapper').removeChild($('splash'));

		$('container').style.visibility = 'visible';
		
		wink.fx.applyTransition($('container'), 'opacity', '1500ms', '0ms', 'ease-in');
		wink.fx.onTransitionEnd($('container'), ks.main.showContainer, false);
		
		setTimeout(function()
		{
			$('container').style.opacity = '1';
			
			wink.ux.touch.addListener($('handlebar'), "start", { context: ks.navigation, method: "_touchStart", arguments: null }, { preventDefault: true });
			wink.ux.touch.addListener($('handlebar'), "move", { context: ks.navigation, method: "_touchMove", arguments: null }, { preventDefault: true });
			wink.ux.touch.addListener($('handlebar'), "end", { context: ks.navigation, method: "_touchEnd", arguments: null }, { preventDefault: true });
		}, 1);
	};
	
	return splash;
})();