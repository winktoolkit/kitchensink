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
		$('test_multitouch_1').listenToGesture('instant_scale', { context: this, method: 'instantScale' }, { preventDefault: true });
		$('test_multitouch_1').listenToGesture('gesture_end', { context: this, method: 'gestureEnd' }, { preventDefault: true });
		
		$('test_multitouch_4').listenToGesture('instant_rotation', { context: this, method: 'instantRotation' }, { preventDefault: true });
		$('test_multitouch_4').listenToGesture('gesture_end', { context: this, method: 'gestureEnd' }, { preventDefault: true });
	};
	
	multitouch.instantScale = function(gestureInfos)
	{
		var nextScale = gestureInfos.scale * this.scale;
		
		if (nextScale > 1 && nextScale < 10)
		{
			this.currentScale = nextScale;
			
			$('test_multitouch_2').scale(this.currentScale, this.currentScale);
			//$('test_multitouch_2').style.height = (this.currentScale*152) + 'px';
			//$('test_multitouch_2').style.width = (this.currentScale*204) + 'px';
		}
	};
	
	multitouch.instantRotation = function(gestureInfos)
	{
		var nextRotation = (gestureInfos.rotation + this.rotation) % 360;
		
		if ( nextRotation > 0 && nextRotation < 215 )
		{
			this.currentRotation = (gestureInfos.rotation + this.rotation) % 360;
			$('test_multitouch_5').translate(-(570/360 * this.currentRotation), 0);
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