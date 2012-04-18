ks.tests.buttons = (function()
{
	var buttons = 
	{
		toggleButton1: null,
		toggleButton2: null
	};
	
	buttons.init = function()
	{
		this.toggleButton1 = new wink.ui.xy.ToggleButton(
		{
			cssClass: 'w_toggle_custom', 
			position: 'left'
		});
		
		this.toggleButton2 = new wink.ui.xy.ToggleButton(
		{
			cssClass: 'w_toggle_custom_2', 
			position: 'right'
		});

		wink.byId('test_button_1').appendChild(this.toggleButton1.getDomNode());
		wink.byId('test_button_2').appendChild(this.toggleButton2.getDomNode());
	};
	
	buttons.init();

	return buttons;
	
})();