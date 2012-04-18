ks.tests.toolbar =
{
	i:1,
	
	add: function()
	{
		this.i++;
		wink.byId('test_toolbar_1').innerHTML = this.i;
	}
};