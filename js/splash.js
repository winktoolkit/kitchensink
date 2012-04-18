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
		wink.byId('wrapper').style.visibility = 'visible';
		wink.byId('splash').style.visibility = 'visible';
		wink.byId('orientation').style.visibility = 'visible';
		
		ks.utils.sizeElements();
		ks.navigation.animate(200);
		
		wink.fx.applyTransition(wink.byId('logo'), 'opacity', '2000ms', '0ms', 'ease-in');
		wink.fx.applyTransition(wink.byId('splash'), 'opacity', '2000ms', '0ms', 'ease-in');
		
		wink.fx.onTransitionEnd(wink.byId('logo'), this.hide, false);
		wink.fx.onTransitionEnd(wink.byId('splash'), this.remove, false);
			
		wink.fx.translate(wink.byId('container'), 0, 0);

		wink.setTimeout(ks.list, 'init', 500);
	};
	
	/**
	 * 
	 */
	splash.hide = function(e)
	{
		e.stopPropagation();
		wink.byId('splash').style.opacity = '0';
	};
	
	/**
	 * 
	 */
	splash.remove = function()
	{
		wink.byId('wrapper').removeChild(wink.byId('splash'));

		wink.byId('container').style.visibility = 'visible';
		
		wink.fx.applyTransition(wink.byId('container'), 'opacity', '1500ms', '0ms', 'ease-in');
		wink.fx.onTransitionEnd(wink.byId('container'), ks.main.showContainer, false);
		
		setTimeout(function()
		{
			wink.byId('container').style.opacity = '1';
			
			wink.ux.touch.addListener(wink.byId('handlebar'), "start", { context: ks.navigation, method: "_touchStart", arguments: null }, { preventDefault: true });
			wink.ux.touch.addListener(wink.byId('handlebar'), "move", { context: ks.navigation, method: "_touchMove", arguments: null }, { preventDefault: true });
			wink.ux.touch.addListener(wink.byId('handlebar'), "end", { context: ks.navigation, method: "_touchEnd", arguments: null }, { preventDefault: true });
		}, 1);
	};
	
	return splash;
})();