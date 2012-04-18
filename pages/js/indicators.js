ks.tests.indicators = (function()
{
	var indicators = 
	{
		spinner1: null,
		spinner2: null,
		progressBar1: null,
		progressBar2: null,
		progressBar3: null
	};
	
	var properties1 = 
	{
		size: 24,
		radius: 5,
		thickness: 7,
		count: 15,
		space: 14,
		fromcolor: '#ccc',
		tocolor: '#000',
		linewidth: 1,
		refreshRate: 60
	};
	
	var properties2 = 
	{
		size: 50,
		radius: 10,
		thickness: 10,
		count: 10,
		space: 5,
		fromcolor: '#333',
		tocolor: '#f50',
		stopcolor: 0.1,
		linewidth: 0,
		refreshRate: 60
	};
	
	var properties3 =
	{
		height: 5,
		borderColor: '#ff0000',
		progressBarColor: '#000'
	};
	
	var properties4 =
	{
		height: 7,
		width: 250,
		borderColor: '#333',
		progressBarColor: '#f50'
	};
	
	indicators.init = function()
	{
		this.spinner1 = new wink.ui.xy.CSpinner(properties1);
		this.spinner2 = new wink.ui.xy.CSpinner(properties2);
		
		this.progressBar1 = new wink.ui.xy.ProgressBar();
		this.progressBar2 = new wink.ui.xy.ProgressBar(properties3);
		this.progressBar3 = new wink.ui.xy.ProgressBar(properties4);
		
		this.progressBar1.setValue(30);
		this.progressBar2.setValue(80);
		this.progressBar3.setValue(50);
		
		wink.byId('test_indicators_1').appendChild(this.spinner1.getDomNode());
		wink.byId('test_indicators_2').appendChild(this.spinner2.getDomNode());
		wink.byId('test_indicators_3').appendChild(this.progressBar1.getDomNode());
		wink.byId('test_indicators_4').appendChild(this.progressBar2.getDomNode());
		wink.byId('test_indicators_5').appendChild(this.progressBar3.getDomNode());
	};

	indicators.init();
	
	return indicators;
})();