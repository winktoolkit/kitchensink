ks.tests.audio = (function()
{
	var audio = 
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
			url: './pages/resources/track.mp3'
		},
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
			url: './pages/resources/track.mp3'
		},
		displayControls: 1,
		displayDuration: 0,
		displayCursor: 0,
		silentSeeking: 1
	};
	
	/**
	 * Audio Player
	 */
	var audioplayer = (function()
	{
		var _audioNode,
			_playing = false,
			_url,
			_parent,
			_playBtn,
			_onready,
			_onprogress,
			_ontimeupdate;
		
		var ap = {};

		ap.init = function(props) 
		{
			_url = props.url;
			_parent = wink.byId(props.parent);
			_playBtn = wink.byId(props.playBtn);
			_onready = props.onready;
			_onprogress = props.onprogress;
			_ontimeupdate = props.ontimeupdate;
			_initAudioNode();
			_toggleButtonState();
		};
		
		ap.play = function() 
		{
			if (_playing) 
			{
				return;
			}
			_playing = true;
			_audioNode.play();
			_toggleButtonState();
		};
		
		ap.pause = function() 
		{
			if (!_playing) {
				return;
			}
			_playing = false;
			_audioNode.pause();
			_toggleButtonState();
		};
		
		ap.getCurrentTime = function() 
		{
			return _audioNode.currentTime;
		};
		
		ap.getDuration = function() 
		{
			return _audioNode.duration;
		};
		
		ap.getBufferedDuration = function() 
		{
			return _audioNode.buffered.end((_audioNode.buffered.length - 1));
		};
		
		ap.setTime = function(seconds) 
		{
			try { 
				_audioNode.currentTime = seconds;
			} catch(e) {}
		};

		var _initAudioNode = function() 
		{
			_audioNode = document.createElement('audio');
			_audioNode.style.height = '0';
			_audioNode.style.width = '0';
			_audioNode.src = _url;
			_parent.appendChild(_audioNode);
			_audioNode.addEventListener('canplay', _onready, false);
			_audioNode.addEventListener('progress', _onprogress, false);
			_audioNode.addEventListener('timeupdate', _ontimeupdate, false);
			_playBtn.addEventListener('click', _togglePlayButton, false);
		};
		var _togglePlayButton = function() 
		{
			if (_playing) {
				ap.pause();
			} else {
				ap.play();
			}
		};
		
		var _toggleButtonState = function() 
		{
			if (_playing) {
				wink.removeClass(_playBtn, 'w_button_play');
				wink.addClass(_playBtn, 'w_button_pause');
			} else {
				wink.removeClass(_playBtn, 'w_button_pause');
				wink.addClass(_playBtn, 'w_button_play');
			}
		};
		
		return ap;
	})();
	
	audio.init = function()
	{
		this.player1 = new wink.mm.AudioPlayer(properties1);
		wink.mm.AudioPlayer.singleton = undefined;
		
		this.player2 = new wink.mm.AudioPlayer(properties2);
		wink.mm.AudioPlayer.singleton = undefined;
		
		this.wheel = new wink.mm.MediaWheel(
		{
			radius: 69,
			width: 160,
			height: 160,
			thickness: 10,
			bgGradientColors: [{ pos: 0, color: '#000'}],
			readGradientColors: [{ pos: 0, color: '#7cbf4e'}, { pos: 1, color: '#5a9a39'}],
			unbufferedGradientColors: [{ pos: 0, color: '#1d1d1d'}],
			cursorRectColor: ['transparent', 'transparent'],
			cursorTriangleColor: ['transparent', 'transparent'],
			canChangeTime: false
		});

		wink.byId('test_audio_1').appendChild(this.player1.getDomNode());
		wink.byId('test_audio_2').appendChild(this.player2.getDomNode());
		wink.byId('test_audio_3').appendChild(this.wheel.getDomNode());
		
		wink.subscribe('/mediawheel/events/timeupdate', 
		{ 
			context: 
			{
				ontimeupdate: function(params) {
					if (params.publisher.uId != ks.tests.audio.wheel.uId) {
						return;
					}
					if (!ready) {
						return;
					}
					audioplayer.setTime(params.time);
					audioplayer.play();
				}
			}, 
			method: 'ontimeupdate' 
		});
		
		audioplayer.init(
		{
			url: './pages/resources/track.mp3',
			parent: 'test_audio_player',
			playBtn: 'test_audio_player_btn',
			onready: function() 
			{
				ready = true;
				ks.tests.audio.wheel.setDuration(audioplayer.getDuration());
				ks.tests.audio.wheel.setBufferedTime(audioplayer.getBufferedDuration());
			},
			onprogress: function() 
			{
				if (!ready) 
				{
					return;
				}
				ks.tests.audio.wheel.setBufferedTime(audioplayer.getBufferedDuration());
			},
			ontimeupdate: function()
			{
				if (!ready) 
				{
					return;
				}
				ks.tests.audio.wheel.setTime(audioplayer.getCurrentTime());
			}
		});
	};

	audio.init();
	
	return audio;
})();