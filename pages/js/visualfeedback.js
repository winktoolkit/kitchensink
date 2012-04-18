ks.tests.visualfeedback = (function()
{
	var visualfeedback = 
	{

	};
	
	var handler = {
		track: false,
		vbf: null,
		x: 0,
		y:0,
		
		onstart: function(uxEvent)
		{
			this.track = true;
			this.vfb = getVbf(uxEvent.x, uxEvent.y, 140);
			this.vfb.show();
			this.x = uxEvent.x;
			this.y = uxEvent.y;
		},
		onmove: function(uxEvent)
		{
			if (!this.track) {
				return;
			}
			var dx = this.x - uxEvent.x,
				dy = this.y - uxEvent.y,
				d = Math.sqrt(dx * dx + dy * dy);
		
			if (d > 20) {
				this.vfb.hide();
				this.track = false;
			}
		},
		onend: function(uxEvent)
		{
			if (!this.track) {
				return;
			}
			this.vfb.hide();
			this.vfb = null;
			this.track = false;
		}
	};
	
	var getVbf = function(x, y, size)
	{
		var vfb = new wink.plugins.VisualFeedback({
			refreshRate: 15,
			count: 4,
			size: size,
			color: "rgb(0, 0, 0)",
			underway: false,
			onEnd: function() {
				document.body.removeChild(vfb.getDomNode());
			}
		});
		wink.fx.apply(vfb.getDomNode(), {
			position: "absolute",
			top: 0
		});
		document.body.appendChild(vfb.getDomNode());
		wink.fx.translate(vfb.getDomNode(), x - (size / 2), y - (size / 2));
		return vfb;
	};
	
	visualfeedback.init = function()
	{
		var box = wink.byId('finger_box');
		wink.ux.touch.addListener(box, "start", { context: handler, method: "onstart" }, { tracking: false, preventDefault: true });
		wink.ux.touch.addListener(document.body, "move", { context: handler, method: "onmove" }, { preventDefault: true });
		wink.ux.touch.addListener(document.body, "end", { context: handler, method: "onend" });
	};

	visualfeedback.init();
	
	return visualfeedback;
	
})();