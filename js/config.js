/**
 * @author:
 * 	--> Jérôme GIRAUD
 */

ks.winkPath = '../wink/';
ks.winkPluginsPath = '../';

ks.config =
{
	ui:
	[
	 	{
	 		title: 'Buttons', 
	 		url:'./pages/html/buttons.html', 
	 		resources: 
	 		[
	 		 	{ 
					url: ks.winkPath + 'ui/xy/togglebutton/js/togglebutton.js', 
					type: 'js',
					group: 0
				},
				{ 
	 		 		url: './pages/js/buttons.js', 
	 		 		type: 'js',
	 		 		group: 0
	 		 	},
				{ 
					url: ks.winkPath + 'ui/xy/togglebutton/css/togglebutton.css', 
					type: 'css',
					group: 0
				},
	 		 	{ 
	 		 		url: './pages/css/buttons.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	}
	 		 ]
	 	},
	 	{
	 		title: 'Checkboxes', 
	 		url: './pages/html/checkboxes.html', 
	 		resources: 
	 		[
	 		 	{
	 		 		url: './pages/js/checkboxes.js', 
	 		 		type: 'js'
	 		 	}, 
	 		 	{ 
	 		 		url: './pages/css/checkboxes.css', 
	 		 		type: 'css'
	 		 	}
	 		 ]
	 	},
	 	{
	 		title: 'Radio buttons', 
	 		url:'./pages/html/radios.html', 
	 		resources: 
	 		[
	 		 	{ 
	 		 		url: './pages/js/radios.js', 
	 		 		type: 'js'
	 		 	}, 
	 		 	{ 
	 		 		url: './pages/css/radios.css', 
	 		 		type: 'css'
	 		 	}
	 		 ]
	 	},
	 	{
	 		title: 'Inputs', 
	 		url:'./pages/html/inputs.html', 
	 		resources: 
	 		[
	 		 	{ 
	 		 		url: ks.winkPath + 'ui/form/input/js/input.js', 
	 		 		type: 'js', 
	 		 		group: 0
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/component.js', 
	 		 		type: 'js', 
	 		 		group: 1
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/tools.js', 
	 		 		type: 'js', 
	 		 		group: 2
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/searchTools.js', 
	 		 		type: 'js', 
	 		 		group: 3
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/manager/helper.js', 
	 		 		type: 'js', 
	 		 		group: 4
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/manager/data/local.js', 
	 		 		type: 'js', 
	 		 		group: 5
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/manager/dom/simple.js', 
	 		 		type: 'js', 
	 		 		group: 6
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/manager/event/simple.js', 
	 		 		type: 'js', 
	 		 		group: 7
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/module/data/default.js', 
	 		 		type: 'js', 
	 		 		group: 8
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/module/data/label.js', 
	 		 		type: 'js', 
	 		 		group: 9
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/module/dom/default.js', 
	 		 		type: 'js', 
	 		 		group: 10
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/module/dom/label.js', 
	 		 		type: 'js', 
	 		 		group: 11
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/module/event/default.js', 
	 		 		type: 'js', 
	 		 		group: 12
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/js/module/event/label.js', 
	 		 		type: 'js', 
	 		 		group: 13
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/test/resources/cities.js', 
	 		 		type: 'js', 
	 		 		group: 14
	 		 	},
	 		 	{ 
	 		 		url: './pages/js/inputs.js', 
	 		 		type: 'js', 
	 		 		group: 15
	 		 	}, 
	 		 	{ 
	 		 		url: ks.winkPath + 'ui/form/input/css/input.css', 
	 		 		type: 'css', 
	 		 		group: 0
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'plugins/completion/css/completion.css', 
	 		 		type: 'css', 
	 		 		group: 0
	 		 	},
	 		 	{ 
	 		 		url: './pages/css/inputs.css', 
	 		 		type: 'css', 
	 		 		group: 0
	 		 	}
	 		 ]
	 	},
	 	{
	 		title: 'Forms', 
	 		url:'./pages/html/forms.html', 
	 		resources: 
	 		[
	 		 	{ 
	 		 		url: './pages/js/radios.js', 
	 		 		type: 'js'
	 		 	},
	 		 	{
	 		 		url: './pages/js/checkboxes.js', 
	 		 		type: 'js'
	 		 	},
	 		 	{
	 		 		url: './pages/js/forms.js', 
	 		 		type: 'js'
	 		 	},
	 		 	{ 
	 		 		url: './pages/css/forms.css', 
	 		 		type: 'css'
	 		 	}
	 		 ]
	 	},
	 	{
	 		title: 'Toolbars', 
	 		url:'./pages/html/toolbars.html',
	 		resources: 
	 		[
				{ 
					url: './pages/js/toolbars.js', 
					type: 'js'
				},
	 		 	{ 
	 		 		url: './pages/css/toolbars.css', 
	 		 		type: 'css'
	 		 	}
	 		 ]
	 	},
	 	{
	 		title: 'Accordions', 
	 		url:'./pages/html/accordion.html',
	 		resources: 
	 		[
				{ 
					url: ks.winkPath + 'ui/layout/accordion/js/accordion.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/accordion.js', 
					type: 'js',
					group: 1
				},
	 		 	{ 
	 		 		url: ks.winkPath + 'ui/layout/accordion/css/accordion.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	},
	 		 	{ 
	 		 		url: './pages/css/accordion.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	}
	 		 ]
	 		
	 	},
	 	{
	 		title: 'Carousels', 
	 		url:'./pages/html/carousel.html',
	 		resources: 
	 		[
				{ 
					url: ks.winkPath + 'ui/xy/carousel/js/carousel.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + '/math/_matrix/js/matrix.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + '/fx/_xyz/js/3dfx.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/js/carousel.js', 
					type: 'js',
					group: 2
				},
				{ 
	 		 		url: './pages/js/radios.js', 
	 		 		type: 'js',
	 		 		group: 2
	 		 	}, 
	 		 	{ 
	 		 		url: './pages/css/radios.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	},
	 		 	{ 
	 		 		url: ks.winkPath + 'ui/xy/carousel/css/carousel.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	},
	 		 	{ 
	 		 		url: './pages/css/carousel.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	}
	 		 ]
	 		
	 	},
	 	{
	 		title: 'Tabs', 
	 		url:'./pages/html/tabs.html',
	 		resources: 
	 		[
				{ 
					url: ks.winkPath + 'ui/layout/tabcontainer/js/tabcontainer.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/tabs.js', 
					type: 'js',
					group: 1
				},
	 		 	{ 
	 		 		url: ks.winkPath + 'ui/layout/tabcontainer/css/tabcontainer.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	},
	 		 	{ 
	 		 		url: './pages/css/tabs.css', 
	 		 		type: 'css',
	 		 		group: 0
	 		 	}
	 		 ]
	 	},
	 	{
	 		title: 'Maps', 
	 		url:'./pages/html/maps.html',
	 		resources: 
	 		[
				{ 
					url: './pages/js/maps.js', 
					type: 'js'
				}
	 		 ]
	 	},
	 	{
	 		title: 'Pickers', 
	 		url:'./pages/html/pickers.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ui/xy/datepicker/js/datepicker.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xy/datepicker/resources/en_EN/datepicker.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: ks.winkPath + 'ui/xy/colorpicker/js/colorpicker.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/pickers.js', 
					type: 'js',
					group: 2
				},
				{ 
					url: ks.winkPath + 'ui/xy/datepicker/css/datepicker.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xy/colorpicker/css/colorpicker.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Menus &amp; Popups', 
	 		url:'./pages/html/menus.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ui/xy/menu/js/menu.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xy/popup/js/popup.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xy/popup/resources/en_EN/popup.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/js/menus.js', 
					type: 'js',
					group: 2
				},
				{ 
					url: ks.winkPath + 'ui/xy/menu/css/menu.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xy/popup/css/popup.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/menus.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Notifications', 
	 		url:'./pages/html/notifications.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ui/xy/newsticker/js/newsticker.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/toolbars.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/js/notifications.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: ks.winkPath + 'ui/xy/newsticker/css/newsticker.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/toolbars.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/notifications.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Indicators', 
	 		url:'./pages/html/indicators.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ui/xy/cspinner/js/cspinner.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xy/progressbar/js/progressbar.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/indicators.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: ks.winkPath + 'ui/xy/progressbar/css/progressbar.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/indicators.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	}
	],
	animations:
	[
	 	{
	 		title: 'Slide', 
	 		url:'./pages/html/slide.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ui/layout/slidingpanels/js/slidingpanels.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/slide.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: ks.winkPath + 'ui/layout/slidingpanels/css/slidingpanels.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/slide.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Slide (cover)', 
	 		url:'./pages/html/slide.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ui/layout/slidingpanels/js/slidingpanels.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/slide.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: ks.winkPath + 'ui/layout/slidingpanels/css/slidingpanels.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/slide.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Slide (reveal)', 
	 		url:'./pages/html/slide.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ui/layout/slidingpanels/js/slidingpanels.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/slide.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: ks.winkPath + 'ui/layout/slidingpanels/css/slidingpanels.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/slide.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Fade', 
	 		url:'./pages/html/fade.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'math/_geometric/js/geometric.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'math/_matrix/js/matrix.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'fx/_xyz/js/3dfx.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'fx/_animation/js/animation.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/fade.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/css/fade.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Cube', 
	 		url:'./pages/html/cube.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'math/_geometric/js/geometric.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'math/_matrix/js/matrix.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'fx/_xyz/js/3dfx.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ux/movementtracker/js/movementtracker.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xyz/cube/js/cube.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/cube.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/css/cube.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Tag Cloud', 
	 		url:'./pages/html/tagcloud.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'math/_geometric/js/geometric.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'math/_matrix/js/matrix.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'fx/_xyz/js/3dfx.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ux/movementtracker/js/movementtracker.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xyz/tagcloud/js/tagcloud.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/tagcloud.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/css/tagcloud.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Opener', 
	 		url:'./pages/html/opener.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'math/_geometric/js/geometric.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'math/_matrix/js/matrix.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'fx/_xyz/js/3dfx.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xyz/opener/js/opener.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/opener.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: ks.winkPath + 'ui/xyz/opener/css/opener.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: './pages/css/opener.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: '3D Animations', 
	 		url:'./pages/html/animations.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'math/_geometric/js/geometric.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'math/_matrix/js/matrix.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'fx/_xyz/js/3dfx.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'fx/_animation/js/animation.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/animations.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/css/animations.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Slideshow', 
	 		url:'./pages/html/slideshow.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ux/movementtracker/js/movementtracker.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ui/xy/slideshow/js/slideshow.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/slideshow.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/css/slideshow.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	}
	],
	events:
	[
	 	{
	 		title: 'Drag &amp; drop', 
	 		url:'./pages/html/dnd.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ux/dnd/js/dnd.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/dnd.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/css/dnd.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Multitouch', 
	 		url:'./pages/html/multitouch.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ux/gesture/js/gesture.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/multitouch.js', 
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/css/multitouch.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
		{
	 		title: 'Gesture recognition', 
	 		url:'./pages/html/recognition.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'ux/gesturerecognizer/js/gesturerecognizer.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: './pages/js/recognition.js', 
					type: 'js',
					group: 1
				}
	 		]
	 	},
	 	{
	 		title: 'Visual feedback', 
	 		url:'./pages/html/feedback.html',
	 		resources: 
	 		[
	 		 	{
	 		 		url: ks.winkPluginsPath + 'visualfeedback/js/visualfeedback.js',
	 		 		type: 'js',
					group: 0
	 		 	},
				{ 
					url: './pages/js/visualfeedback.js', 
					type: 'js',
					group: 1
				}    
	 		 ]
	 	},
	],
	media:
	[
	 	{
	 		title: 'Audio player', 
	 		url:'./pages/html/audio.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'mm/audioplayer/js/audioplayer.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'math/_geometric/js/geometric.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ux/movementtracker/js/movementtracker.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'mm/mediawheel/js/mediawheel.js', 
					type: 'js',
					group: 1
				},
				{
					url: ks.winkPath + 'mm/audioplayer/resources/en_EN/audioplayer.js',
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/js/audio.js', 
					type: 'js',
					group: 2
				},
				{ 
					url: './pages/css/audio.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: ks.winkPath + 'mm/audioplayer/css/audioplayer.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: ks.winkPath + 'mm/mediawheel/css/mediawheel.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	},
	 	{
	 		title: 'Video player', 
	 		url:'./pages/html/video.html',
	 		resources: 
	 		[
		 		{ 
					url: ks.winkPath + 'mm/videoplayer/js/videoplayer.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'math/_geometric/js/geometric.js', 
					type: 'js',
					group: 0
				},
				{ 
					url: ks.winkPath + 'ux/movementtracker/js/movementtracker.js', 
					type: 'js',
					group: 0
				},
				{
					url: ks.winkPath + 'mm/videoplayer/resources/en_EN/videoplayer.js',
					type: 'js',
					group: 1
				},
				{ 
					url: './pages/js/video.js', 
					type: 'js',
					group: 2
				},
				{ 
					url: './pages/css/video.css', 
					type: 'css',
					group: 0
				},
				{ 
					url: ks.winkPath + 'mm/videoplayer/css/videoplayer.css', 
					type: 'css',
					group: 0
				}
	 		]
	 	}
	]
};