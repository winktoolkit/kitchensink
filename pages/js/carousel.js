ks.tests.carousel = (function()
{
	var carousel = 
	{
		carousel1: null,
		carousel2: null,
		interval: null,
		currentAd: 2,
		currentOpacity: 1,
		currentRotation: 0
	};
	
	var properties1 = 
	{
		'itemsWidth': 280,
		'itemsHeight': 136,
		'autoAdjust': 1,
		'autoAdjustDuration': 400,
		'autoPlay': 1,
		'autoPlayDuration': 4000,
		'firstItemIndex': 0,
		'items':
		[
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><div class="h1">Carousel Examples</div>How to mix images and content ?<br/><br/>See the next items</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Text Content only</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><div style="width: 90%; height: 80%; padding: 5%"><div style="border: 1px solid #fff; height: 100%; overflow: hidden"><p style="margin:0; padding: 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra placerat dapibus. Suspendisse ac justo ac turpis tempor porta sed a tellus. Proin quis enim lacus, a hendrerit erat. Aliquam tincidunt, magna id euismod hendrerit, nisi massa bibendum libero, non condimentum purus erat a arcu. Donec ipsum enim, malesuada sed eleifend in, sagittis quis nibh. Cras bibendum lacinia turpis, vitae varius augue sodales id. Nulla id fringilla erat.</p></div></div></div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Image only</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><img src="./pages/images/ad.gif" /></div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Clickable content</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><div class="h2">Cick on the button below to change the item\'s color</div><br /><input type="button" value="change color" class="w_button w_radius w_bg_light" onclick="ks.tests.carousel.switchItemColor(this)" /></div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Dynamical content</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><img id="dynamicalAd" src="./pages/images/ad_2.gif" /></div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Animated content</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" id="flippableItem" style="color: #fff; background-color:#000"><div class="h2">Cick on the button below to rotate the item</div><br /><input type="button" value="rotate" class="w_button w_radius w_bg_light" onclick="ks.tests.carousel.flip(this)" /></div>'}
		]
	};
	
	var properties2 = 
	{
		'display': 'vertical',
		'itemsWidth': 280,
		'itemsHeight': 136,
		'autoAdjust': 1,
		'autoAdjustDuration': 400,
		'autoPlay': 1,
		'autoPlayDuration': 4000,
		'firstItemIndex': 0,
		'items':
		[
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><div class="h1">Carousel Examples</div>How to mix images and content ?<br/><br/>See the next items</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Text Content only</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><div style="width: 90%; height: 80%; padding: 5%"><div style="border: 1px solid #fff; height: 100%; overflow: hidden"><p style="margin:0; padding: 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra placerat dapibus. Suspendisse ac justo ac turpis tempor porta sed a tellus. Proin quis enim lacus, a hendrerit erat. Aliquam tincidunt, magna id euismod hendrerit, nisi massa bibendum libero, non condimentum purus erat a arcu. Donec ipsum enim, malesuada sed eleifend in, sagittis quis nibh. Cras bibendum lacinia turpis, vitae varius augue sodales id. Nulla id fringilla erat.</p></div></div></div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Image only</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><img src="./pages/images/ad.gif" /></div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #0d6df3; background-color:#b9d4fa"><div class="h1">Clickable content</div><br/>See the next item</div>'},
		 {'type': 'string', 'content': '<div class="test_carousel_item_1" style="color: #fff; background-color:#000"><div class="h2">Cick on the button below to change the item\'s color</div><br /><input type="button" value="change color" class="w_button w_radius w_bg_light" onclick="ks.tests.carousel.switchItemColor(this)" /></div>'}
		]
	};
	
	carousel.init = function()
	{
		carousel.carousel1 = new wink.ui.xy.Carousel(properties1);
		carousel.carousel2 = new wink.ui.xy.Carousel(properties2);
		
		wink.byId('test_carousel_1').appendChild(carousel.carousel1.getDomNode());
		wink.byId('test_carousel_2').appendChild(carousel.carousel2.getDomNode());
		
		wink.fx.applyTransition(wink.byId('dynamicalAd'), 'opacity', '1500ms', '0ms', 'ease-in-out');
		wink.fx.onTransitionEnd(wink.byId('dynamicalAd'), carousel.switchAd);
		
		wink.fx.applyTransformTransition(wink.byId('flippableItem'), '500ms', '0ms', 'ease-in-out');
		wink.fx.apply(wink.byId('flippableItem').parentNode, 
		{
			"transform-style": "preserve-3d",
			"perspective": "500"
		});
		
		setTimeout(function(){wink.byId('dynamicalAd').style.opacity = "0"; carousel.currentOpacity = 0;}, 3000);
	};
	
	carousel.switchCarousel = function(type)
	{
		if ( type == 0 )
		{
			wink.byId('test_carousel_1').style.display = 'block';
			wink.byId('test_carousel_2').style.display = 'none';
			
			wink.fx.onTransitionEnd(wink.byId('dynamicalAd'), carousel.switchAd);
			setTimeout(carousel.switchAd, 1000);
			
		} else
		{
			wink.byId('test_carousel_1').style.display = 'none';
			wink.byId('test_carousel_2').style.display = 'block';
		}
		
	};
	
	carousel.switchItemColor = function(button)
	{
		if ( getComputedStyle(button.parentNode)['backgroundColor'] == "rgb(0, 0, 0)" )
		{
			button.parentNode.style.backgroundColor = "#f00";
			button.parentNode.style.color = "#000";
		} else
		{
			button.parentNode.style.backgroundColor = "#000";
			button.parentNode.style.color = "#fff";
		}
	};
	
	carousel.flip = function(button)
	{
		if ( carousel.currentRotation == 0 )
		{
			carousel.currentRotation = -45;
		} else
		{
			carousel.currentRotation = 0;
		}
		
		wink.fx.initComposedTransform(button.parentNode);
		wink.fx.setTransformPart(button.parentNode, 1, { type: "rotate", x: 0, y: 1, z: 0, angle: carousel.currentRotation});
		wink.fx.applyComposedTransform(button.parentNode);
	};
	
	carousel.switchAd = function()
	{
		if ( wink.isSet(wink.byId('dynamicalAd')) )
		{
			if ( carousel.currentOpacity == 0 )
			{
				if ( carousel.currentAd == 2 )
				{
					wink.byId('dynamicalAd').src = './pages/images/ad_3.gif';
					carousel.currentAd = 3;
				} else if ( carousel.currentAd == 3 )
				{
					wink.byId('dynamicalAd').src = './pages/images/ad_2.gif';
					carousel.currentAd = 2;
				}
			}
			
			wink.fx.onTransitionEnd(wink.byId('dynamicalAd'), carousel.switchAd);
			
			if ( wink.byId('dynamicalAd').style.opacity == "0" )
			{
				wink.byId('dynamicalAd').style.opacity = "1";
				carousel.currentOpacity = 1;
			} else
			{
				wink.byId('dynamicalAd').style.opacity = "0";
				carousel.currentOpacity = 0;
			}
		}
	};
	
	carousel.init();
	
	return carousel;
	
})();