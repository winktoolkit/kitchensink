ks.tests.menus = (function()
{
	var menus = 
	{
		menu: null,
		popup: null,
		initialHeight: 0,
		i18n:
		{
			title: "Add to Home Screen",	
			contentIPhone:	"To add this webapp to your homescreen, click on the icon below",
			contentIPad: "To add this webapp to your homescreen, click on the icon above",
			tip: "don't show anymore"
		}
	};
	
	menus.init = function()
	{
		this.popup = new wink.ui.xy.Popup();
		
		this.menu = new wink.ui.xy.Menu(
		{
			x: window.innerWidth/2 - 136,
			y: window.innerHeight/2 - 109
		});
		
		this.menu.addItem({itemClass: 'w_menu_1_1', title: 'now'});
		this.menu.addItem({itemClass: 'w_menu_1_2', title: 'next hour'});
		this.menu.addItem({itemClass: 'w_menu_1_3', title: 'tonight'});
		this.menu.addItem({});
		this.menu.addItem({});
		this.menu.addItem({itemClass: 'w_menu_1_4', title: 'London 2012'});
		
		this.menu.getDomNode().style.zIndex = 999;
		
		document.body.appendChild(this.popup.getDomNode());
		document.body.appendChild(this.menu.getDomNode());
	};
	
	menus.clean = function()
	{
		document.body.removeChild(this.menu.getDomNode());
		document.body.removeChild(this.popup.getDomNode());
		
		wink.disconnect(ks.list, 'show', {context: menus, method: 'clean'});
	};
	
	menus.closePopup = function()
	{
		this.popup.hide();
	};
	
	menus.displayMenu1 = function()
	{
		wink.removeClass(this.menu.getDomNode(), 'w_menu_custom');
		this.menu.toggle();
	};
	
	menus.displayMenu2 = function()
	{
		wink.addClass(this.menu.getDomNode(), 'w_menu_custom');
		this.menu.toggle();
	};
	
	menus.displayPopup1 = function()
	{
		wink.removeClass(this.popup.getDomNode(), "pp_popup_add");
		
		this.popup.alert(
		{
			msg: 'this is an alert',
			callback: { context: this, method:'closePopup' }
		});
	};
	
	menus.displayPopup2 = function()
	{
		wink.removeClass(this.popup.getDomNode(), "pp_popup_add");
		
		this.popup.confirm(
		{
			msg: 'Will you confirm ?',
			callbackOk: { context: this, method:'closePopup' },
			callbackCancel: { context: this, method:'closePopup' }
		});
	};
	
	menus.displayPopup3 = function(input)
	{
		wink.removeClass(this.popup.getDomNode(), "pp_popup_add");
		
		this.popup.popup(
		{
			content: '<div class=\'w_bloc\'>This is a fully customizable popup</div>',
			arrow: 'bottom',
			targetNode: input,
			layerCallback: { context: this, method: 'closePopup' }
		});
	};
	
	menus.displayPopup4 = function(input)
	{
		this.popup.popup(
		{	
			content: "<div class='w_icon w_button_close w_float' onclick='ks.tests.menus.popup.hide()'></div><div style='margin: 1em;'><center><span style='color:#fff;font-weight:bold;'>" + _("title", this) + "</span></center></div><div style='margin: 1em;'><center><span>" + (wink.ua.isIPad?_("contentIPad", this):_("contentIPhone", this)) + "</span></center></div><div style='margin: 1em;'><input type='checkbox' id='dontshow' onchange='javascript:void(0);' /><label for='dontshow'>&nbsp;&nbsp;&nbsp;" + _("tip", this) + "</label></div>",
			arrow: wink.ua.isIPad ? "top" : "bottom",
			arrowLeftPos: wink.ua.isIPad ? "157px": "45%"
		});
		
		wink.addClass(this.popup.getDomNode(), "pp_popup_add");
	};
	
	menus.init();
	
	wink.connect(ks.list, 'show', {context: menus, method: 'clean'});

	return menus;
	
})();