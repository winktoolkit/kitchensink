ks.tests.dnd = (function()
{
	var dnd = 
	{
		manager: null
	};
			
	dnd.init = function()
	{
		this.manager = new wink.ux.Dnd({zone: wink.byId('test_dnd')});

		// Define the d&d source and its methods
		
		// Source 1
		var source1 = new wink.ux.dnd.Source({id: 'reorder_grab_1'});
		source1.registerEvent('/dnd/events/dropItem', this, 'moveItem');

		// Source 2
		var source2 = new wink.ux.dnd.Source({'id': 'reorder_grab_2'});
		source2.registerEvent('/dnd/events/dropItem', this, 'moveItem');

		// Source 3
		var source3 = new wink.ux.dnd.Source({'id': 'reorder_grab_3'});
		source3.registerEvent('/dnd/events/dropItem', this, 'moveItem');

		// Source 4
		var source4 = new wink.ux.dnd.Source({'id': 'reorder_grab_4'});
		source4.registerEvent('/dnd/events/dropItem', this, 'moveItem');

		// Source 5
		var source5 = new wink.ux.dnd.Source({'id': 'reorder_grab_5'});
		source5.registerEvent('/dnd/events/dropItem', this, 'moveItem');

		// Source 6
		var source6 = new wink.ux.dnd.Source({'id': 'reorder_grab_6'});
		source6.registerEvent('/dnd/events/dropItem', this, 'moveItem');

		wink.ux.dnd.Source.prototype.getAvatar = function()
		{
			var avatar = wink.byId(this.id).parentNode.cloneNode(true);

			avatar.style.position = 'absolute';
			avatar.style.opacity = '0.5';
			
			avatar.style.width = wink.byId('test_dnd').offsetWidth + 'px';
			
			avatar.style.background = "#333";
			avatar.style.color = "#fff";

			avatar.style.top = wink.getTopPosition(wink.byId(this.id)) + 'px';
			avatar.style.left = (wink.getLeftPosition(wink.byId('test_dnd'))-window.innerWidth > 0)?(wink.getLeftPosition(wink.byId('test_dnd'))-window.innerWidth + 'px'):'15px';
			
			return avatar;
		};

		// Define the d&d targets and their methods
		var target1 = new wink.ux.dnd.Target({id: 'reorder_position_1', event: '/dnd/events/dropItem'});
		var target2 = new wink.ux.dnd.Target({id: 'reorder_position_2', event: '/dnd/events/dropItem'});
		var target3 = new wink.ux.dnd.Target({id: 'reorder_position_3', event: '/dnd/events/dropItem'});
		var target4 = new wink.ux.dnd.Target({id: 'reorder_position_4', event: '/dnd/events/dropItem'});
		var target5 = new wink.ux.dnd.Target({id: 'reorder_position_5', event: '/dnd/events/dropItem'});
		var target6 = new wink.ux.dnd.Target({id: 'reorder_position_6', event: '/dnd/events/dropItem'});

		wink.ux.dnd.Target.prototype.over = wink.ux.dnd.Target.prototype.onSourceOver;
		wink.ux.dnd.Target.prototype.out = wink.ux.dnd.Target.prototype.onSourceOut;

		wink.ux.dnd.Target.prototype.onSourceOver = function()
		{
			if(!this._isOver)
			{
				this.over();
				wink.byId(this.id).style.color = '#ff0000';
			}
		};

		wink.ux.dnd.Target.prototype.onSourceOut = function()
		{
			if(this._isOver)
			{
				this.out();
				wink.byId(this.id).style.color = 'inherit';
			}
		};

		// Add the source and targets to the d&d manager
		this.manager.addSource(source1);
		this.manager.addSource(source2);
		this.manager.addSource(source3);
		this.manager.addSource(source4);
		this.manager.addSource(source5);
		this.manager.addSource(source6);

		this.manager.addTarget(target1);
		this.manager.addTarget(target2);
		this.manager.addTarget(target3);
		this.manager.addTarget(target4);
		this.manager.addTarget(target5);
		this.manager.addTarget(target6);

		
		// Override the default behaviour and insert the avatar in the list
		wink.ux.Dnd.prototype._startDrag = function(event)
		{		
			if ( event.multitouch )
			{
				this._multitouch++;
				return;
			}
			
			this._startEvent = event;
			
			if (event.target.className && event.target.className.search(/dnd_movable/i) > -1)
			{
				// See if the element being dragged is a registered source
				this._currentSource = this._getSource(event.target.id);
		        
				if (this._currentSource !== null)
				{
					this._currentSource.activate();
		
					this._currentAvatar = 
					{
		                target: this._currentSource.getAvatar(),
						beginX: event.x,
		                beginY: event.y,
		                pozX: event.target.pozXinit,
		                pozY: event.target.pozYinit
		            };
					
					wink.byId('test_dnd').appendChild(this._currentAvatar.target);
				}
				
		    }
		};
		
		wink.ux.Dnd.prototype._endDrag = function(event)
		{	
			if ( this._multitouch > 0 )
			{
				this._multitouch--;
				return;
			}
			
			this._endEvent = event;
			
			// Check if a click event must be generated
			if ( ((this._endEvent.timestamp-this._startEvent.timestamp) < 250) && (Math.abs(this._endEvent.x-this._startEvent.x) < 20))
			{
				this._endEvent.dispatch(this._endEvent.target, 'click');
			}
			
			if (this._currentAvatar !== null)
			{
				
				// check if we are over a drop target
				this._currentTarget = this._getTarget(this.lastX, this.lastY);
				
				if ( this._currentTarget !== null )
				{
					// make the drop target react
					this._currentTarget._onDrop(this._currentSource);
				}
				
				// remove the avatar
				wink.byId('test_dnd').removeChild(this._currentAvatar.target);
				
				// reset the drag and drop
				this._currentSource.deactivate();
				
				this._currentSource = null;
				this._currentTarget = null;
				this._currentAvatar = null;
				
				this.lastX = 0;
				this.lastY = 0;
		
				this.updateTargets();
		    }
		};
		
		// Override the default behaviour and force the vertical drag
		wink.ux.Dnd.prototype._drag = function(event)
		{
			if ( this._multitouch > 0 )
			{
				return;
			}
			
			if (this._currentAvatar !== null)
			{
				this._currentAvatar.target.pozXinit = this._currentAvatar.pozX + event.x - this._currentAvatar.beginX;	
				this._currentAvatar.target.pozYinit = this._currentAvatar.pozY + event.y - this._currentAvatar.beginY;	
				
				wink.fx.translate(this._currentAvatar.target, 0, this._currentAvatar.target.pozYinit);
				
				// check if we are over a drop target
				this._currentTarget = this._getTarget(event.x, event.y);
				
				if ( this._currentTarget !== null )
				{
					for ( var i=0; i<this._currentSource._events.length; i++)
					{
						if ( this._currentSource._events[i].event == this._currentTarget._event )
						{
							// make the drop target react
							this._currentTarget.onSourceOver(this._currentSource);
						}
					}
				} 
				
				// Save the current position
				this.lastX = event.x;
				this.lastY = event.y;
		
				// Vertical scroll
				if ( event.y >= ( (window.innerHeight + window.scrollY)-60 ) )
				{
					scrollTo(window.scrollX, window.scrollY + 5);
				} else if ( (event.y <= (window.scrollY + 60)) && window.scrollY > 0 )
				{
					scrollTo(window.scrollX, window.scrollY - 5);
				}
				
				// Horizontal scroll
				if ( event.x >= ( (window.innerWidth + window.scrollX)-40 ) )
				{
					scrollTo(window.scrollX + 5, window.scrollY);
				} else if ( (event.x <= (window.scrollX + 40)) && window.scrollX > 0 )
				{
					scrollTo(window.scrollX - 5, window.scrollY);
				}
		    }
		};
	};

	// Switch the items in the list
	dnd.moveItem = function(params)
	{
		params.target.onSourceOut();

		var sourceId = wink.byId(params.source.id).parentNode.id;
		var targetId = params.target.id;

		if ( sourceId != targetId )
		{
			var sourceTop = wink.getTopPosition(wink.byId(sourceId));
			var targetTop = wink.getTopPosition(wink.byId(targetId));

			if( targetTop < sourceTop)
			{
				wink.byId(targetId).parentNode.insertBefore(wink.byId(sourceId), wink.byId(targetId));
			} else 
			{
				if( wink.byId(targetId) == wink.byId(targetId).parentNode.lastChild)
				{
					wink.byId(targetId).parentNode.appendChild(wink.byId(sourceId));
				} else 
				{
					wink.byId(targetId).parentNode.insertBefore(wink.byId(sourceId), wink.byId(targetId).nextSibling);
				}
			}
		} else
		{
			// Do nothing
		}

		wink.setTimeout(ks.tests.dnd, 'updateTargets', 200);
	};

	// Update the items positions
	dnd.updateTargets = function()
	{
		this.manager.updateTargets();
	};
	
	dnd.init();
			
	return dnd;
})();