ks.tests.maps = (function()
{
	var map = {};
	
	map.init = function()
	{
		$('map_canvas').style.height = window.innerHeight - 44 + 'px';
		$('map_canvas').style.width = window.innerWidth + 'px';
		
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://maps.google.com/maps/api/js?sensor=false&callback=ks.tests.maps.createMap';
	
		script.onerror = function ()
		{
			alert('could not load map');
		};
		
		document.getElementsByTagName('head')[0].appendChild(script);
	};
	
	map.createMap = function()
	{
		var latlng = new google.maps.LatLng(49.169031,-0.358382);
	    
		var myOptions = 
	    {
	      zoom: 10,
	      center: latlng,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    
	    map = new google.maps.Map($('map_canvas'), myOptions);
	    
	    marker = new google.maps.Marker(
	    	{
	    		position: latlng,
	    		animation: google.maps.Animation.DROP,
	    		title: 'test'
	    	}
	    );
	    
	    marker.setMap(map);  
	};
	
	map.init();

	return map;
	
})();