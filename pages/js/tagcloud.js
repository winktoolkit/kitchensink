ks.tests.tagcloud = (function()
{
	var tagcloud = 
	{
		cloud: null
	};
	
	var tags = 
	[
		{ id: "tag0", 	rating: 56.6 },
		{ id: "tag1", 	rating: 93.4 },
		{ id: "tag2", 	rating: 53.8 },
		{ id: "tag3", 	rating: 76.9 },
		{ id: "tag4", 	rating: 38.1 },
		{ id: "tag5", 	rating: 68.8 },
		{ id: "tag6", 	rating: 39.0 },
		{ id: "tag7", 	rating: 94.6 },
		{ id: "tag8", 	rating: 14.7 },
		{ id: "tag9", 	rating: 31.8 },
		{ id: "tag10", 	rating: 47.9 },
		{ id: "tag11", 	rating: 98.1 },
		{ id: "tag12", 	rating: 68.2 },
		{ id: "tag13", 	rating: 81.5 },
		{ id: "tag14", 	rating: 42.9 },
		{ id: "tag15", 	rating: 75.6 },
		{ id: "tag16", 	rating: 24.3 },
		{ id: "tag17", 	rating: 37.8 },
		{ id: "tag18", 	rating: 97.1 },
		{ id: "tag19", 	rating: 35.2 },
		{ id: "tag20", 	rating: 14.0 },
		{ id: "tag21", 	rating: 93.1 }
	];
	
	var properties =
	{
		tags: tags,
		size: 130,
		textColor: { r: 110, g: 38, b: 38 },
		scaleFactors : 
		{
			ratioDepth: 0.6, 
			ratioRating: 0.8
		},
		canMove: true,
		canSelect: true,
		axis: "xy"
	};
	
	tagcloud.init = function()
	{
		this.cloud = new wink.ui.xyz.TagCloud(properties);
		
		wink.subscribe('/tagcloud/events/selection', { context: this, method: 'handleTagSelection' });
		
		$('test_tagcloud_1').appendChild(this.cloud.getDomNode());
	};
	
	tagcloud.handleTagSelection = function(param)
	{
		$('test_tagcloud_2').innerHTML = 'Wink tag cloud (\'' + $(param.tag.id).innerHTML +'\' selected)';
	};
	
	tagcloud.init();
	
	return tagcloud;
})();