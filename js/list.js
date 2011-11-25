/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
ks.list = (function()
{
	var list = {},
		scrolling = false,
		sliding = false,
		currentStage = null,
		selectTimer = null,
		nodePreselected = null,
		nodeSelected = null;
	
	/**
	 * 
	 */
	list.init = function() 
	{
		ks.utils.sizeElements();
		
		this.build('ui');
		
		var properties =
		{
			target: "scrollContent", 
			direction: "y",
			callbacks: 
			{
				scrollerTouched:	{ context: this, method: 'stageChanged', arguments: 'scrollerTouched' },
				scrollerClicked:	{ context: this, method: 'stageChanged', arguments: 'scrollerClicked' },
				startScrolling:		{ context: this, method: 'stageChanged', arguments: 'startScrolling' },
				scrolling:			{ context: this, method: 'stageChanged', arguments: 'scrolling' },
				endScrolling:		{ context: this, method: 'stageChanged', arguments: 'endScrolling' },
				startSliding:		{ context: this, method: 'stageChanged', arguments: 'startSliding' },
				stopSliding:		{ context: this, method: 'stageChanged', arguments: 'stopSliding' }
			}
		};
		
		if ( wink.ua.isMobile && !wink.ua.isIOS )
		{
			properties.scrollbars =
			{
				active: false
			};
		}
		
		ks.scroller = new wink.ui.layout.Scroller(properties);
		
		ks.options.init();
		
		$('logo').style.opacity = '1';
	};
	
	/**
	 * 
	 */
	list.show = function()
	{
		ks.utils.sizeElements();
		
		$('wrapper').style['overflow-y'] = 'hidden';
		$('wrapper').style.height = window.innerHeight + 'px';
		
		wink.fx.apply($('container'), {'transition-timing-function': 'linear'});
		
		$('container').translate(0, 0);
	};
	
	/**
	 * 
	 */
	list.build = function(section) 
	{
		$('content').innerHTML = '';
		
		for (var i = 0; i < ks.config[section].length; i++)
		{
			var li = document.createElement('li');
			
			li.innerHTML = '<a href="#" onclick="ks.test.load(\'' + section + '\', ' + i + ')">' + ks.config[section][i].title + '</a><span class="w_icon w_chevron"></span>';
			
			$('content').appendChild(li);
			
			wink.addClass(li, "w_list_item w_border_bottom w_bg_light");
		}
		
		if ( wink.isSet(ks.scroller) )
		{
			ks.scroller.updateTargetSize();
		}
	};
	
	/**
	 * 
	 */
	list.preselect = function(node)
	{
		clearTimeout(this.selectTimer);
		this.selectTimer = null;
		if (this.scrolling == false && this.sliding == false) 
		{
			var cn = node.className;
			if (cn.indexOf('selected') == -1) 
			{
				this.resetItemStatus();
				
				wink.addClass(node.parentNode, "preselected");
				this.nodePreselected = node;
			}
		}
	};

	/**
	 * 
	 */
	list.select = function(node) 
	{
		clearTimeout(this.selectTimer);
		this.resetItemStatus();
		wink.addClass(node.parentNode, "selected");
		this.nodeSelected = node;
	};

	/**
	 * 
	 */
	list.resetItemStatus = function() 
	{
		if (this.nodePreselected != null) 
		{
			wink.removeClass(this.nodePreselected.parentNode, "preselected");
			this.nodePreselected = null;
		}
		
		if (this.nodeSelected != null)
		{
			wink.removeClass(this.nodeSelected.parentNode, "selected");
			this.nodeSelected = null;
		}
	};
	
	/**
	 * 
	 */
	list.stageChanged = function(params, stage) 
	{
		this.currentStage = stage;

		var target;
		
		if (wink.isSet(params.uxEvent)) 
		{
			target = params.uxEvent.target;
			target = (target.nodeType == 3 ? target.parentNode : target);
		}

		if (stage == 'scrollerTouched') 
		{
			if (this.sliding == false) 
			{
				this.selectTimer = wink.setTimeout(this, 'preselect', 200, target);
			}
		} else if (stage == 'startScrolling') 
		{
			this.resetItemStatus();
			this.scrolling = true;
		} else if (stage == 'endScrolling') 
		{
			if (this.selectTimer != null) 
			{
				clearTimeout(this.selectTimer);
				this.selectTimer = null;
			}
			this.scrolling = false;
		} else if (stage == 'startSliding') 
		{
			this.sliding = true;
		} else if (stage == 'stopSliding') 
		{
			this.sliding = false;
		} else if (stage == 'scrollerClicked') 
		{
			this.select(target);
		}
	};
	
	return list;
})();