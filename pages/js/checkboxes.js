ks.tests.checkbox =
{
	toggle: function(input)
	{
		if( input.checked )
		{
			wink.addClass(input, 'w_checked');
		} else
		{
			wink.removeClass(input, 'w_checked');
		}
	}
};