ks.tests.slide = (function()
{
	var slide = 
	{
		panel: null
	};
	
	var properties = 
	{
		duration: 500,
		transitionType: 'default',
		pages: 
		[
		 	'test_slide_page_1', 
		 	'test_slide_page_2', 
		 	'test_slide_page_3', 
		 	'test_slide_page_4'
		 ]
	};
	
	slide.init = function()
	{
		if ( ks.xhr.request.title == 'Slide (cover)' )
		{
			properties.transitionType = 'cover';
		} else if ( ks.xhr.request.title == 'Slide (reveal)' )
		{
			properties.transitionType = 'reveal';
		}
		
		this.panel =  new wink.ui.layout.SlidingPanels(properties);
		$('test_slide_1').appendChild(this.panel.getDomNode());
	};
	
	slide.slideTo = function(id)
	{
		this.panel.slideTo(id);
	};

	slide.slideBack = function()
	{
		this.panel.slideBack();
	};

	slide.init();
	
	return slide;
	
})();