ks.tests.input = (function()
{
	var input = {};
	
	var properties1 =
	{
		type: 'tel',
		eraseButton: 1,
		autoCorrect: 0,
		autoCapitalize: 1,
		placeholder: 'type a number',
		width: 150
	};
	
	var properties2 =
	{
		type: 'url',
		eraseButton: 1,
		autoCorrect: 0,
		autoCapitalize: 0,
		placeholder: 'type an url',
		width: 150
	};
	
	var properties3 = 
    {
        input: $('test_input_3'),
        managers: 
        {                
            data: 
            {
                name: 'LocalDataManager',
                suggestions: cities,
                callbacks: 
                {
                    'parseResponseData': {context: input, method: 'parse'}
                }
            },
            dom: 
            {
                name: 'SimpleDomManager'
            },
            event: 
            {
                name: 'SimpleEventManager'
            }
       }
    };

	var input1 = new wink.ui.form.Input(properties1);
	var input2 = new wink.ui.form.Input(properties2);
	
	var input3 = new wink.plugins.completion.Component(properties3);
	input3.start();
	
	$('test_input_1').appendChild(input1.getDomNode());
	$('test_input_2').appendChild(input2.getDomNode());
	
	/**
	 * 
	 */
	input.parse = function(data)
    {
        if (data.length > 0)
        {
            data.unshift({ value: 'Suggests', type: 'label' });
            data.push({ value: 'close', type: 'label', css: 'leftClose', action: { context: this, method: 'closeCompletion' } });
        }
        
        return data;
    };
    
    /**
     * 
     */
    input.closeCompletion = function()
    {
    	input3.hideCompletion();
    };
    
    /**
     * WORKAROUND FOR IOS
     */
    input.focus = function()
    {
    	if ( wink.ua.isIOS && wink.ua.osVersion < 5)
    	{
    		$('test_inputs').style.visibility = 'hidden';
    	}
    };
    
    /**
     * WORKAROUND FOR IOS
     */
    input.blur = function()
    {
    	if ( wink.ua.isIOS && wink.ua.osVersion < 5)
    	{
    		$('test_inputs').style.visibility = 'visible';
    	}
    };
    
    return input;
})();