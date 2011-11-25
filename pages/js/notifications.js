ks.tests.notifications = (function()
{
	var notifications = 
	{
		newsticker1: null,
		newsticker2: null,
		newsticker3: null
	};
	
	var properties1 = 
	{
		'news':
		[
		 	{'type': 'alert', 'content': '<font color="#ff0000"><b>09H30:</b></font> You can customize the newsticker by adding your own data types !!!!'},
		 	{'type': 'info', 'content': '<font color="#ff5500"><b>09H40:</b></font> You can customize the newsticker by adding your own data types !!!!'},
		 	{'type': 'news', 'content': '<font color="#ffffff"><b>09H50:</b></font> You can customize the newsticker by adding your own data types !!!!'}
		]
	};
	
	var properties2 = 
	{
		'news':
		[
		 	{'type': 'custom', 'content': '<div class="nt_content_custom"><b>AAPL<span class="nt_news_value">384,62</span></b><br /><span class="nt_news_subtitle">Cap. : 357,5mds</span><span class="nt_news_subtitle nt_news_value">0,00</span></div><div class="nt_content_custom"><b>CAC40 <span class="nt_news_value">3104,41</span></b><br /><span class="nt_news_subtitle">Indice</span><span class="nt_news_subtitle nt_news_value nt_down">44,97</span></div><div class="nt_content_custom"><b>DOW J <span class="nt_news_value">12 153,68</span></b><br /><span class="nt_news_subtitle">Indice</span><span class="nt_news_subtitle nt_news_value nt_up">259,89</span></div><div class="nt_content_custom"><b>GOOG<span class="nt_news_value">608,35</span></b><br /><span class="nt_news_subtitle">Cap. : 197,0mds</span><span class="nt_news_subtitle nt_news_value">0,00</span></div>'}
		]
	};
	
	var properties3 = 
	{
		'news':
		[
		 	{'type': 'custom', 'content': '<div class="nt_content_custom"><b>AAPL<span class="nt_news_value">384,62</span></b><br /><span class="nt_news_subtitle">Cap. : 357,5mds</span><span class="nt_news_subtitle nt_news_value">0,00</span></div><div class="nt_content_custom"><b>CAC40 <span class="nt_news_value">3104,41</span></b><br /><span class="nt_news_subtitle">Indice</span><span class="nt_news_subtitle nt_news_value nt_down">44,97</span></div><div class="nt_content_custom"><b>DOW J <span class="nt_news_value">12 153,68</span></b><br /><span class="nt_news_subtitle">Indice</span><span class="nt_news_subtitle nt_news_value nt_up">259,89</span></div><div class="nt_content_custom"><b>GOOG<span class="nt_news_value">608,35</span></b><br /><span class="nt_news_subtitle">Cap. : 197,0mds</span><span class="nt_news_subtitle nt_news_value">0,00</span></div>'}
		]
	};
	
	notifications.init = function()
	{
		this.newsticker1 = new wink.ui.xy.NewsTicker(properties1);
		this.newsticker2 = new wink.ui.xy.NewsTicker(properties2);
		this.newsticker3 = new wink.ui.xy.NewsTicker(properties3);
		
		$('test_notifications_1').appendChild(this.newsticker1.getDomNode());
		$('test_notifications_2').appendChild(this.newsticker2.getDomNode());
		$('test_notifications_3').appendChild(this.newsticker3.getDomNode());
	};

	notifications.init();
	
	return notifications;
})();