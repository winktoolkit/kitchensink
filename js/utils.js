/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
ks.utils =
{
	/**
	 * 
	 */
	sizeElements: function()
	{
		scrollTo(0, 0, 0);
		
		var _h = window.innerHeight;
		var _w = window.innerWidth;
		
		$('wrapper').style.height = _h + 'px';
		$('wrapper').style.width = _w + 'px';
		
		if ( wink.isSet($('splash')) )
		{
			$('splash').style.height = _h + 'px';
		}
		
		$('tests_scroller').style.height = _h - 64 + 'px';
		$('tests_scroller').style.width = _w + 'px';
		
		$('about_scroller').style.height = _h - 54 + 'px';
		$('about_scroller').style.width = _w - 81 + 'px';
		
		$('container').style.height = _h + 'px';
		
		$('options').style.width = (_w - 81) + 'px';
		$('tests').style.width = _w + 'px';
		$('test').style.width = _w + 'px';
		
		$('testContent').style.minHeight = _h + 'px';
	}
};