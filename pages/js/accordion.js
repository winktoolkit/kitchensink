ks.tests.accordion = (function()
{
	var accordion = 
	{
		accordion1: null,
		accordion2: null
	};
	
	accordion.init = function()
	{
		this.accordion1 = new wink.ui.layout.Accordion();
		this.accordion2 = new wink.ui.layout.Accordion();
		
		this.accordion1.addSection('section1', 'Wink Toolkit is a lightweight JavaScript toolkit which will help you build great mobile web apps.<br />It is designed and developed to meet the specific constraints of the mobile environment.');
		this.accordion1.addSection('section2', 'The toolkit\'s core offers all the basic functionalities a mobile developer would need from touch event handling to DOM manipulation objects or CSS transforms utilities.<br />Additionally, it offers a wide range of UI components are offered to help you improve the look and feel of a web app, or simply to experiment with new user interactions.');
		this.accordion1.addSection('section3', 'Gesture recognition, HTML5 features like geolocation or local storage, multitouch events and many others are also part of the Wink Toolkit.<br />The project currently targets iOS (iPhone), Android platforms, Blackberry (6+), Bada...');
		
		this.accordion2.addSection('section1', 'Wink Toolkit is a lightweight JavaScript toolkit which will help you build great mobile web apps.<br />It is designed and developed to meet the specific constraints of the mobile environment.');
		this.accordion2.addSection('section2', 'The toolkit\'s core offers all the basic functionalities a mobile developer would need from touch event handling to DOM manipulation objects or CSS transforms utilities.<br />Additionally, it offers a wide range of UI components are offered to help you improve the look and feel of a web app, or simply to experiment with new user interactions.');
		this.accordion2.addSection('section3', 'Gesture recognition, HTML5 features like geolocation or local storage, multitouch events and many others are also part of the Wink Toolkit.<br />The project currently targets iOS (iPhone), Android platforms, Blackberry (6+), Bada...');
		
		wink.byId('test_accordion_1').appendChild(this.accordion1.getDomNode());
		wink.byId('test_accordion_2').appendChild(this.accordion2.getDomNode());
	};
	
	accordion.init();
	
	return accordion;
	
})();