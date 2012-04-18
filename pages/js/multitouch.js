ks.tests.multitouch = (function()
{
	var multitouch = 
	{
		scale: 1.0,
		currentScale: 1.0,
		rotation: 0,
		currentRotation: 0
	};
			
	multitouch.init = function()
	{
		wink.ux.gesture.listenTo(wink.byId('test_multitouch_1'), 'instant_scale', { context: this, method: 'instantScale' }, { preventDefault: true });
		wink.ux.gesture.listenTo(wink.byId('test_multitouch_1'), 'gesture_end', { context: this, method: 'gestureEnd' }, { preventDefault: true });
		
		wink.ux.gesture.listenTo(wink.byId('test_multitouch_4'), 'instant_rotation', { context: this, method: 'instantRotation' }, { preventDefault: true });
		wink.ux.gesture.listenTo(wink.byId('test_multitouch_4'), 'gesture_end', { context: this, method: 'gestureEnd' }, { preventDefault: true });
	};
	
	multitouch.instantScale = function(gestureInfos)
	{
		var nextScale = gestureInfos.scale * this.scale;
		
		if (nextScale > 1 && nextScale < 10)
		{
			this.currentScale = nextScale;
			
			wink.fx.scale(wink.byId('test_multitouch_2'), this.currentScale, this.currentScale);
		}
	};
	
	multitouch.instantRotation = function(gestureInfos)
	{
		var nextRotation = (gestureInfos.rotation + this.rotation) % 360;
		
		if ( nextRotation > 0 && nextRotation < 215 )
		{
			this.currentRotation = (gestureInfos.rotation + this.rotation) % 360;
			wink.fx.translate(wink.byId('test_multitouch_5'), -(570/360 * this.currentRotation), 0);
		}
	};
	
	multitouch.gestureEnd = function()
	{
		this.scale = this.currentScale;
		this.rotation = this.currentRotation;
	};
	
	multitouch.init();
			
	return multitouch;
})();