/**
 * Main namespace
 * 
 * @author:
 * 	--> Jérôme GIRAUD
 * 
 */
var ks =
{
	about: null,
	scroller: null,
	spinner: null,
	xhr: null,
	tests: {}
};

/**
 * 
 */
ks.main = (function()
{
	var main = {};
	
	var backHistoryTimer;
	var forwardHistoryTimer;
	var backHistoryQueue = [];
	var forwardHistoryQueue = [];
	
	/**
	 * 
	 */
	main.init = function()
	{
		ks.utils.sizeElements();
		ks.splash.init();
		
	};
	
	/**
	 * 
	 */
	main.showContainer = function()
	{
		wink.ux.window._init();
		wink.subscribe('/window/events/orientationchange', {context: ks.main, method: 'handleOrientationChange'});
		
		wink.subscribe('/history/events/back', {context: ks.main, method: 'slideBackFromHistory'});
		wink.subscribe('/history/events/forward', {context: ks.main, method: 'slideToFromHistory'});
		
		wink.fx.applyTransformTransition(wink.byId('container'), '400ms');
		
		wink.byId('options').style.visibility = 'visible';
		
		ks.spinner = new wink.ui.xy.CSpinner(
		{
			size: 25,
			radius: 5,
			thickness: 6,
			count: 15,
			space: 10,
			fromcolor: '#ccc',
			tocolor: '#fff',
			stopcolor: 0.4,
			linecolor: 'transparent',
			linewidth: 1,
			refreshRate: 60
		});
		
		ks.spinner.toggle();
		
		wink.byId('loader').appendChild(ks.spinner.getDomNode());
		
		ks.xhr = new wink.Xhr();

		ks.navigation.animate(200);
	};
	
	/**
	 * 
	 */
	main.slideBackFromHistory = function(params)
	{
		if ( params.id == 'panels' || params.id == 'main')
		{
			ks.list.show();
		}
	};
	
	/**
	 * 
	 */
	main.slideToFromHistory = function(params)
	{
		if ( params.id == 'panels')
		{
			ks.test.display();
		}
	};
	
	/**
	 * 
	 */
	main.handleOrientationChange = function()
	{
		scrollTo(0, 0, 0);
		
		if ( wink.ux.window.orientation == 'horizontal' )
		{
			wink.byId('orientation').style.display = 'block';
			wink.byId('wrapper').style.display = 'none';
		} else
		{
			wink.byId('orientation').style.display = 'none';
			wink.byId('wrapper').style.display = 'block';
		}
	};
	
	return main;
})();