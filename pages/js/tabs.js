ks.tests.tabs = (function()
{
	var tabs = 
	{
		tab1: null,
		tab2: null,
		tab3: null,
		tab4: null,
		tab5: null
	};
	
	var properties1 = 
	{
		'tabs': ['tab1_1', 'tab2_1', 'tab3_1', 'tab4_1', 'tab5_1', 'tab6_1', 'tab7_1', 'tab8_1'],
		'firstSelectedTab': 2
	};
	
	var properties2 = 
	{
		'tabs': ['tab1_2', 'tab2_2', 'tab3_2', 'tab4_2', 'tab5_2', 'tab6_2', 'tab7_2', 'tab8_2'],
		'firstSelectedTab': 0,
		'displayArrows': 0
	};
	
	var properties3 = 
	{
		'tabs': ['tab1_3', 'tab2_3', 'tab3_3', 'tab4_3', 'tab5_3', 'tab6_3', 'tab7_3', 'tab8_3'],
		'firstSelectedTab': 0
	};
	
	var properties4 = 
	{
		'tabs': ['tab1_4', 'tab2_4', 'tab3_4', 'tab4_4', 'tab5_4', 'tab6_4', 'tab7_4', 'tab8_4'],
		'firstSelectedTab': 0
	};
	
	var properties5 = 
	{
		'tabs': ['tab1_5', 'tab2_5', 'tab3_5', 'tab4_5', 'tab5_5', 'tab6_5', 'tab7_5', 'tab8_5'],
		'firstSelectedTab': 0
	};
	
	// instantiate carousel
	tabs.tab1 = new wink.ui.layout.TabContainer(properties1);
	tabs.tab2 = new wink.ui.layout.TabContainer(properties2);
	tabs.tab3 = new wink.ui.layout.TabContainer(properties3);
	tabs.tab4 = new wink.ui.layout.TabContainer(properties4);
	tabs.tab5 = new wink.ui.layout.TabContainer(properties5);
	
	$('test_tabs_1').appendChild(tabs.tab1.getDomNode());
	$('test_tabs_2').appendChild(tabs.tab2.getDomNode());
	$('test_tabs_3').appendChild(tabs.tab3.getDomNode());
	$('test_tabs_4').appendChild(tabs.tab4.getDomNode());
	$('test_tabs_5').appendChild(tabs.tab5.getDomNode());

	return tabs;
	
})();