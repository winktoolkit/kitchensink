ks.tests.opener = (function()
{
	var opener = 
	{
		opener: null
	};
	
	var properties = 
	{
		image: './pages/images/calendar.jpg',
		height: 250,
		width: 200,
		openerXAngle: 5
	};
	
	opener.init = function()
	{
		this.opener = new wink.ui.xyz.Opener(properties);
		wink.byId('test_opener_1').appendChild(this.opener.getDomNode());
	};
	
	opener.init();
	
	return opener;
})();