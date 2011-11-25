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
		wink.fx.apply($('container'), {'transition-timing-function': 'ease-in-out'});
		
		if ( optionsDisplayed == 0 )
		{
			$('container').translate(window.innerWidth - 81, 0);
			optionsDisplayed = 1;
		} else
		{
			$('container').translate(0, 0);
			optionsDisplayed = 0;
		}
	};
	
	return options;
})();