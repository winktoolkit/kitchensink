/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
ks.navigation = (function()
{
	var navigation = {};
		navigationOpened = false;
	
	/**
	 * 
	 */
	navigation.toggle = function(input)
	{
		var radios = $$('input[type=radio]');
		var l = radios.length;
		
		for ( var i=0; i<l; i++ )
		{
			if ( radios[i].id == input.id )
			{
				wink.byId(input.id).className = 'checked';
				ks.list.build(wink.byId(input.id).value);
				ks.scroller.scrollTo(0, 0, 0);
				navigation.animate(200);
			} else
			{
				wink.byId(radios[i].id).className = '';
			}					
		}
	};
	
	/**
	 * 
	 */
	navigation.animate = function(y)
	{
		if ( navigationOpened == false )
		{
			var duration = ((800/200) * (200-y)) + 'ms';
			wink.fx.applyTransformTransition(wink.byId('navigation'), duration, '0ms', 'ease-in-out');
			wink.fx.translate(wink.byId('navigation'), 0, 200);
			navigationOpened = true;
		} else
		{
			var duration = ((800/200) * y) + 'ms';
			wink.fx.applyTransformTransition(wink.byId('navigation'), duration, '0ms', 'ease-in-out');
			wink.fx.translate(wink.byId('navigation'), 0, 0);
			navigationOpened = false;
		}
	};
	
	/**
	 * 
	 */
	navigation._touchStart = function()
	{
		wink.fx.applyTransformTransition(wink.byId('navigation'), '0ms', '0ms', 'ease-in-out');
	};
	
	/**
	 * 
	 */
	navigation._touchMove = function(e)
	{
		if( e.y - 44 < 200 && e.y - 44 >= 0)
		{
			wink.fx.translate(wink.byId('navigation'), 0, e.y - 44);
		}
	};
	
	/**
	 * 
	 */
	navigation._touchEnd = function()
	{
		navigation.animate(wink.fx.getTransformPosition(wink.byId('navigation')).y);
	};
	
	return navigation;
})();