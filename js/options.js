/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
ks.options = (function()
{
	var options = {};
	var optionsDisplayed = 0;
	
	options.init = function()
	{
		ks.about = new wink.ui.layout.Scroller(
		{
			target: "aboutContent", 
			direction: "y",
			scrollbars:
			{
				active: false
			}
		});
	};
		
	/**
	 * 
	 */
	options.toggle = function()
	{
		wink.fx.apply(wink.byId('container'), {'transition-timing-function': 'ease-in-out'});
		
		if ( optionsDisplayed == 0 )
		{
			wink.fx.translate(wink.byId('container'), window.innerWidth - 81, 0);
			optionsDisplayed = 1;
		} else
		{
			wink.fx.translate(wink.byId('container'), 0, 0);
			optionsDisplayed = 0;
		}
	};
	
	return options;
})();