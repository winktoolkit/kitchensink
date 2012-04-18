ks.tests.radio =
{
	toggle: function(input)
	{
		var radios = $$('input[name="' + input.name + '"]');

		for ( var i in  radios)
		{
			if ( radios[i] == input)
			{
				wink.addClass(input, 'w_checked');
			} else
			{
				wink.removeClass(radios[i], 'w_checked');
			}
		}
	}
};