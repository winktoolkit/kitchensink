ks.tests.video = (function()
{
	var video = 
	{
		player1: null,
		player2: null,
		player3: null,
		wheel: null
	};
	
	var properties1 =
	{
		source:
		{
			type: 'file',
			url: './pages/resources/bunny.m4v',
			height: 200,
			width: 300
		},

		customControls: 1,
		displayControls: 1,
		displayDuration: 1,
		displayCursor: 1,
		silentSeeking: 1
	};
	
	var properties2 =
	{
		source:
		{
			type: 'file',
			url: './pages/resources/sintel.mp4',
			height: 200,
			width: 300
		},

		customControls: 1,
		displayControls: 1,
		displayDuration: 0,
		displayCursor: 0,
		silentSeeking: 1
	};
	
	video.init = function()
	{
		this.player1 = new wink.mm.VideoPlayer(properties1);
		wink.mm.VideoPlayer.singleton = undefined;
		
		this.player2 = new wink.mm.VideoPlayer(properties2);
		wink.mm.VideoPlayer.singleton = undefined;

		this.player2._extendedControlsNode.style.marginTop = '10px';
		
		wink.connect(this.player1, 'play', {context: this, method: 'displayVideo1'});
		wink.connect(this.player2, 'play', {context: this, method: 'displayVideo2'});

		$('test_video_1').appendChild(this.player1.getDomNode());
		$('test_video_2').appendChild(this.player2.getDomNode());
	};
	
	video.displayVideo1 = function()
	{
		if ( getComputedStyle(this.player1._videoNode)['opacity'] == '0' )
		{
			this.player1._videoNode.style.opacity = '1';
			this.player1._domNode.style.background = '#000';
		}
	};
	
	video.displayVideo2 = function()
	{
		if ( getComputedStyle(this.player2._videoNode)['opacity'] == '0' )
		{
			this.player2._videoNode.style.opacity = '1';
			this.player2._domNode.style.background = '#000';
		}
	};

	video.init();
	
	return video;
})();