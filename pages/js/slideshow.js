ks.tests.slideshow = (function()
{
	var slideshow = 
	{
		slideshow: null
	};
	
	var properties = 
	{
		height: 250,
		width: 300,
		
		items: 
		[
		 	{ 
		 		image: './pages/images/sintel_0.jpg', 
		 		title: '', 
		 		info: ''
		 	},
		 	{ 
		 		image: './pages/images/sintel_1.jpg', 
		 		title: '', 
		 		info: ''
		 	},
		 	{ 
		 		image: './pages/images/sintel_2.jpg', 
		 		title: '', 
		 		info: ''
		 	},
		 	{ 
		 		image: './pages/images/sintel_3.jpg', 
		 		title: '', 
		 		info: ''
		 	},
		 	{ 
		 		image: './pages/images/sintel_4.jpg', 
		 		title: '', 
		 		info: ''
		 	},
		 	{ 
		 		image: './pages/images/sintel_5.jpg', 
		 		title: '', 
		 		info: ''
		 	},
		 	{ 
		 		image: './pages/images/sintel_6.jpg', 
		 		title: '', 
		 		info: ''
		 	},
		 	{ 
		 		image: './pages/images/sintel_7.jpg', 
		 		title: '', 
		 		info: ''
		 	}
		],
		
		position: 0,
		
		displayHeader: false,
		displayFooter: false,
		listeningTouch: true,
		touchTranslation: false,
		withSliding: false,
		withAnim: true,
		autoplay: true,
		anims:
		[ 
			"nSquare", "horizontalOut", "horizontalIn",
			"circleOut", "circleIn",
			"rowDown", "rowUp", "colLeft", "colRight",
			"spin", "spinQuarter", "light",
			"wrap", "scaleIn", "scaleOut"
		],
		animRandom: true,
		autoplayDuration: 3000,
		slideDuration: 200,
		animDuration: 800
	};
	
	slideshow.init = function()
	{
		this.slideshow = new wink.ui.xy.Slideshow(properties);
		wink.byId('test_slideshow_1').appendChild(this.slideshow.getDomNode());
	};
	
	slideshow.init();
	
	return slideshow;
	
})();