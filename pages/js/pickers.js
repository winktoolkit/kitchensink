ks.tests.pickers = (function()
{
	var pickers = 
	{
		datePicker: null,
		colorPicker: null
	};
	
	pickers.init = function()
	{
		this.datePicker = new wink.ui.xy.DatePicker();
		this.colorPicker = new wink.ui.xy.ColorPicker();
		
		wink.subscribe('/datepicker/events/pickdate', {method: 'fillDate', context: this});
		wink.subscribe('/colorpicker/events/pickcolor', {method: 'fillColor', context: this});
	};
	
	pickers.fillDate = function(result)
	{
		var d = result.date;

		var day = (d.getDate().toString().length == 1)?('0' + d.getDate().toString()):d.getDate().toString();
		var month = ((d.getMonth()+1).toString().length == 1)?('0' + (d.getMonth()+1).toString()):(d.getMonth()+1).toString();
		var year = d.getFullYear();

		wink.byId('test_pickers_1').innerHTML = day + '/' + month + '/' + year;
	};
	
	pickers.fillColor = function(result)
	{
		wink.byId("test_pickers_2").innerHTML = '&nbsp;';
		wink.byId("test_pickers_2").style.width = '14px';
		wink.byId("test_pickers_2").style.background = result.color;
	};
	
	pickers.showDatePicker = function()
	{
		this.datePicker.show();
	};
	
	pickers.showColorPicker = function()
	{
		this.colorPicker.show();
	};
	
	pickers.init();

	return pickers;
	
})();