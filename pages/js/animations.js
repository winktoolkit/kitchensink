ks.tests.animations = (function()
{
	var animations = 
	{
		clone1: null,
		clone2: null,
		clone3: null,
		clone4: null,
		animGroup1: null,
		animGroup2: null,
		animGroup3: null
	};
	
	var transformer =
	{
		transform: function(params, transformations)
		{
			var node = params.node;
			
			wink.fx.initComposedTransform(node);
			
			for (var i = 0; i < transformations.length; i++) 
			{
				wink.fx.setTransformPart(node, (i + 1), transformations[i]);
			}
			
			wink.fx.applyComposedTransform(node);
		}
	};
	
	animations.flip = function()
	{
		$('test_animations_1').parentNode.style["-webkit-perspective"] = 500;
		$('test_animations_1').style["-webkit-transform-style"] = 'preserve-3d';
		
		$('test_animations_page_1').style["-webkit-backface-visibility"] = "hidden";
		$('test_animations_page_2').style["-webkit-backface-visibility"] = "hidden";
		
		wink.fx.initComposedTransform($('test_animations_page_2'));
		wink.fx.setTransformPart($('test_animations_page_2'), 1, { type: "rotate", x: 0, y: 1, z: 0, angle: -180});
		wink.fx.applyComposedTransform($('test_animations_page_2'));
		
		$('test_animations_page_1').style.zIndex = 1;
		$('test_animations_page_2').style.zIndex = 2;
		
		wink.fx.initComposedTransform($('test_animations_1'));
		wink.fx.setTransformPart($('test_animations_1'), 1, { type: "rotate", x: 0, y: 1, z: 0, angle: -180});
		wink.fx.applyComposedTransform($('test_animations_1'));
	};
	
	animations.flip2 = function() 
	{
		var node = $('test_animations_page_3');
		var node2 = $('test_animations_page_4');
		
		node.parentNode.appendChild(this.clone.copy.container.node);
		node.style.opacity = 0;
		
		node2.parentNode.appendChild(this.clone2.copy.container.node);
		node2.style.opacity = 0;
		
		this.rotateParts(this.clone, 180, 1000, 0, null);
		this.rotateParts(this.clone2, 0, 1000, 0, null);
	};
	
	animations.rotateParts = function(clone, angle, duration, delay, onEnd)
	{
		clone.copy.container.node.style["-webkit-perspective"] = 500;
		clone.copy.container.node.style["-webkit-transform-style"] = 'preserve-3d';
		
		this.animGroup1 = new wink.fx.animation.AnimationGroup();

		for (var i = 0; i < clone.rows; i++)
		{
			for (var j = 0; j < clone.cols; j++)
			{
				var sp = clone.copy.subparts[i][j];
				
				var anim = new wink.fx.animation.Animation();
				
				anim.addStep(
				{
					property: '-webkit-transform',
					value: { context: transformer, method: 'transform', arguments: [ [{ type: "rotate", x: 1, y: 1, z: 0, angle: angle }] ] },
					duration: duration,
					delay: delay,
					func: 'linear'
				});
				
				sp.node.style["-webkit-backface-visibility"] = "hidden";
				this.animGroup1.addAnimation(sp.node, anim);
			}
		}
		this.animGroup1.start({ onEnd: onEnd });
	};
	
	animations.fly = function()
	{
		var node3 = $('test_animations_page_5');
		
		node3.parentNode.appendChild(this.clone3.copy.container.node);
		node3.style.opacity = 0;
		
		this.animGroup2.start(null);
	};
	
	animations.tip = function()
	{
		var node4 = $('test_animations_page_7');
		
		node4.parentNode.appendChild(this.clone4.copy.container.node);
		node4.style.opacity = 0;
		
		this.animGroup3.start(null);
	};
	
	animations.init = function()
	{
		wink.fx.applyTransformTransition($('test_animations_1'), '1000ms', '0ms', 'default');
		
		// Flip 2 init
		this.clone = wink.fx.split($('test_animations_page_3'), 6, 6);
		
		this.clone.copy.container.node.style.left = '0';
		this.clone.copy.container.node.style.top = '0';

		this.clone2 = wink.fx.split($('test_animations_page_4'), 6, 6);
		
		this.clone2.copy.container.node.style.left = '0';
		this.clone2.copy.container.node.style.top = '0';
		
		
		this.rotateParts(this.clone2, 179, 0, 0, null);
		
		// Fly init
		this.clone3 = wink.fx.split($('test_animations_page_5'), 6, 6);
		
		this.clone3.copy.container.node.style.left = '0';
		this.clone3.copy.container.node.style.top = '0';

		this.clone3.copy.container.node.style["-webkit-perspective"] = 300;
		this.clone3.copy.container.node.style["-webkit-transform-style"] = 'preserve-3d';

		var transformations = 
		[
			{ type: "rotate", x: 1, y: 1, z: 0, angle: 180 },
			{ type: "translate", x: 0, y: 0, z: 600 }
		];

		this.animGroup2 = new wink.fx.animation.AnimationGroup();
		
		for (var i = 0; i < 6; i++) 
		{
			for (var j = 0; j < 6; j++) 
			{
				var sp = this.clone3.copy.subparts[i][j];
				
				var anim = new wink.fx.animation.Animation();
				
				anim.addStep(
				{
					property: '-webkit-transform',
					value: { context: transformer, method: 'transform', arguments: [ transformations ] },
					duration: 1000,
					delay: ((i + j) * 100),
					func: 'linear'
				});
				
				this.animGroup2.addAnimation(sp.node, anim);
			}
		}
		
		// Tip init
		this.clone4 = wink.fx.split($('test_animations_page_7'), 1, 2);

		this.clone4.copy.container.node.style.left = '0';
		this.clone4.copy.container.node.style.top = '0';
		
		this.clone4.copy.container.node.style["-webkit-perspective"] = 300;
		this.clone4.copy.container.node.style["-webkit-transform-style"] = 'preserve-3d';

		this.animGroup3 = new wink.fx.animation.AnimationGroup();
		
		for (var i = 0; i < 1; i++)
		{
			for (var j = 0; j < 2; j++)
			{
				var sp = this.clone4.copy.subparts[i][j];
				var anim = new wink.fx.animation.Animation();

				var angle = 90;
				if (j >= 1)
				{
					angle = -90;
				}
				
				var transformations1 = 
				[
					{ type: "rotate", x: 0, y: 1, z: 0, angle: angle },
					{ type: "translate", x: 0, y: 0, z: 0 }
				];

				var transformations2 = 
				[
					{ type: "rotate", x: 0, y: 1, z: 0, angle: angle },
					{ type: "translate", x: 0, y: 0, z: 500 }
				];
				
				anim.addStep(
				{
					property: '-webkit-transform',
					value: { context: transformer, method: 'transform', arguments: [ transformations1 ] },
					duration: 1000,
					delay: 0,
					func: 'default'
				});
				
				anim.addStep(
				{
					property: '-webkit-transform',
					value: { context: transformer, method: 'transform', arguments: [ transformations2 ] },
					duration: 1000,
					delay: 0,
					func: 'default'
				});
				
				this.animGroup3.addAnimation(sp.node, anim);
			}
		}
	};
	
	animations.init();
	
	return animations;
})();