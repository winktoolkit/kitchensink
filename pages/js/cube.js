ks.tests.cube = (function()
{
	var cube = 
	{
		cube: null,
		timer: null
	};
	
	var properties = 
	{
		faces: 
		[
			{ id: 1, faceId: 'face1' },
			{ id: 2, faceId: 'face2' },
			{ id: 3, faceId: 'face3' },
			{ id: 4, faceId: 'face4' },
			{ id: 5, faceId: 'face5' },
			{ id: 6, faceId: 'face6' }
		],
		size: 200,
		shiftX: 0,
		shiftY: 0,
		shiftZ: -160,
		observerX: 160,
		observerY: 160,
		rotationCallback: { context: cube, method: 'handleRotation' },
		rotationEndCallback: { context: cube, method: 'handleRotationEnd' }
	};
	
	cube.clean = function()
	{
		clearTimeout(this.timer);
		wink.disconnect(ks.list, 'show', {context: cube, method: 'clean'});
	};
	
	cube.worldClock = function(zone, region)
	{
		var dst = 0;
		var time = new Date();
		var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
		var gmtTime = new Date(gmtMS);
		var day = gmtTime.getDate();
		var month = gmtTime.getMonth();
		var year = gmtTime.getYear();
		if (year < 1000) 
		{
			year += 1900;
		}
		var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
		
		var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
		if (year % 4 == 0) 
		{
			monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
		}
		if (year % 100 == 0 && year % 400 != 0) 
		{
			monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
		}
		
		var hr = gmtTime.getHours() + zone;
		var min = gmtTime.getMinutes();
		var sec = gmtTime.getSeconds();
		
		if (hr >= 24) 
		{
			hr = hr - 24;
			day -= -1;
		}
		if (hr < 0) 
		{
			hr -= -24;
			day -= 1;
		}
		if (hr < 10) 
		{
			hr = " " + hr;
		}
		if (min < 10) 
		{
			min = "0" + min;
		}
		if (sec < 10) 
		{
			sec = "0" + sec;
		}
		if (day <= 0) 
		{
			if (month == 0) 
			{
				month = 11;
				year -= 1;
			} else 
			{
				month = month - 1;
			}
			day = monthDays[month];
		}
		if (day > monthDays[month]) 
		{
			day = 1;
			if (month == 11) 
			{
				month = 0;
				year -= -1;
			} else 
			{
				month -= -1;
			}
		}
		if (region == "NAmerica") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(3);
			startDST.setHours(2);
			startDST.setDate(1);
			var dayDST = startDST.getDay();
			if (dayDST != 0) 
			{
				startDST.setDate(8 - dayDST);
			} else 
			{
				startDST.setDate(1);
			}
			endDST.setMonth(9);
			endDST.setHours(1);
			endDST.setDate(31);
			dayDST = endDST.getDay();
			endDST.setDate(31 - dayDST);
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST && currentTime < endDST) 
			{
				dst = 1;
			}
		}
		if (region == "Europe") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(2);
			startDST.setHours(1);
			startDST.setDate(31);
			var dayDST = startDST.getDay();
			startDST.setDate(31 - dayDST);
			endDST.setMonth(9);
			endDST.setHours(0);
			endDST.setDate(31);
			dayDST = endDST.getDay();
			endDST.setDate(31 - dayDST);
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST && currentTime < endDST) 
			{
				dst = 1;
			}
		}
		
		if (region == "SAmerica") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(9);
			startDST.setHours(0);
			startDST.setDate(1);
			var dayDST = startDST.getDay();
			if (dayDST != 0) 
			{
				startDST.setDate(22 - dayDST);
			} else 
			{
				startDST.setDate(15);
			}
			endDST.setMonth(1);
			endDST.setHours(11);
			endDST.setDate(1);
			dayDST = endDST.getDay();
			if (dayDST != 0) 
			{
				endDST.setDate(21 - dayDST);
			} else 
			{
				endDST.setDate(14);
			}
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST || currentTime < endDST) 
			{
				dst = 1;
			}
		}
		if (region == "Cairo") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(3);
			startDST.setHours(0);
			startDST.setDate(30);
			var dayDST = startDST.getDay();
			if (dayDST < 5) 
			{
				startDST.setDate(28 - dayDST);
			} else 
			{
				startDST.setDate(35 - dayDST);
			}
			endDST.setMonth(8);
			endDST.setHours(11);
			endDST.setDate(30);
			dayDST = endDST.getDay();
			if (dayDST < 4) 
			{
				endDST.setDate(27 - dayDST);
			} else 
			{
				endDST.setDate(34 - dayDST);
			}
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST && currentTime < endDST) 
			{
				dst = 1;
			}
		}
		if (region == "Israel") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(3);
			startDST.setHours(2);
			startDST.setDate(1);
			endDST.setMonth(8);
			endDST.setHours(2);
			endDST.setDate(25);
			dayDST = endDST.getDay();
			if (dayDST != 0) 
			{
				endDST.setDate(32 - dayDST);
			} else 
			{
				endDST.setDate(1);
				endDST.setMonth(9);
			}
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST && currentTime < endDST) 
			{
				dst = 1;
			}
		}
		if (region == "Beirut") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(2);
			startDST.setHours(0);
			startDST.setDate(31);
			var dayDST = startDST.getDay();
			startDST.setDate(31 - dayDST);
			endDST.setMonth(9);
			endDST.setHours(11);
			endDST.setDate(31);
			dayDST = endDST.getDay();
			endDST.setDate(30 - dayDST);
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST && currentTime < endDST) 
			{
				dst = 1;
			}
		}
		if (region == "Baghdad") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(3);
			startDST.setHours(3);
			startDST.setDate(1);
			endDST.setMonth(9);
			endDST.setHours(3);
			endDST.setDate(1);
			dayDST = endDST.getDay();
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST && currentTime < endDST) 
			{
				dst = 1;
			}
		}
		if (region == "Australia") 
		{
			var startDST = new Date();
			var endDST = new Date();
			startDST.setMonth(9);
			startDST.setHours(2);
			startDST.setDate(31);
			var dayDST = startDST.getDay();
			startDST.setDate(31 - dayDST);
			endDST.setMonth(2);
			endDST.setHours(2);
			endDST.setDate(31);
			dayDST = endDST.getDay();
			endDST.setDate(31 - dayDST);
			var currentTime = new Date();
			currentTime.setMonth(month);
			currentTime.setYear(year);
			currentTime.setDate(day);
			currentTime.setHours(hr);
			if (currentTime >= startDST || currentTime < endDST) 
			{
				dst = 1;
			}
		}
		
		
		if (dst == 1) 
		{
			hr -= -1;
			if (hr >= 24) 
			{
				hr = hr - 24;
				day -= -1;
			}
			if (hr < 10) 
			{
				hr = " " + hr;
			}
			if (day > monthDays[month]) 
			{
				day = 1;
				if (month == 11) 
				{
					month = 0;
					year -= -1;
				} else 
				{
					month -= -1;
				}
			}
			
			return {'month': month+1, 'day': day, 'year': year, 'hours': hr, 'minutes': min, 'seconds': sec};
		} else 
		{
			return {'month': month+1, 'day': day, 'year': year, 'hours': hr, 'minutes': min, 'seconds': sec};
		}
	};
	
	cube.updateTime = function()
	{
		clearTimeout(this.timer);
		
		var paris = this.worldClock(1, "Europe");
		var newyork = this.worldClock(-5, "NAmerica");
		var beijing =  this.worldClock(8, "Beijing");
		var moscow = this.worldClock(3, "Europe");
		
		wink.byId('test_cube_paris').innerHTML = paris.hours + ":" + paris.minutes + ":" + paris.seconds;
		wink.byId('test_cube_nyc').innerHTML = newyork.hours + ":" + newyork.minutes + ":" + newyork.seconds;
		wink.byId('test_cube_beijing').innerHTML = beijing.hours + ":" + beijing.minutes + ":" + beijing.seconds;
		wink.byId('test_cube_moscow').innerHTML = moscow.hours + ":" + moscow.minutes + ":" + moscow.seconds;

		this.timer = wink.setTimeout(this, 'updateTime', 1000); 
	};

	
	cube.handleRotation = function(rotation)
	{
		this.cube.rotate(rotation.x, 0, 0);
	};
	
	cube.handleRotationEnd = function(rotation)
	{
		if (rotation.x > 20)
		{
			this.cube.rotate(25, 0, 0);
			this.cube.faceFocus(500);
		} else if (rotation.x < -20)
		{
			this.cube.rotate(-25, 0, 0);
			this.cube.faceFocus(500);
		} else
		{
			this.cube.faceFocus(500);
		}
	};
	
	cube.init = function()
	{
		this.cube = new wink.ui.xyz.Cube(properties);
		
		wink.byId('test_cube_1').appendChild(this.cube.getDomNode());
		
		this.updateTime();
	};
	
	cube.init();
	
	wink.connect(ks.list, 'show', {context: cube, method: 'clean'});
	
	return cube;
})();