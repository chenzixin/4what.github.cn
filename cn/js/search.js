/* jQuery */
$(function() {

	// subnav
	$("#subnav li a").each(function() {
		var
		item = $(this).find("span"),
		name = $(this).attr("name"),
		url = window.top.location.href;
		if (url.indexOf(name) > -1 || (url.indexOf(".html") === -1 && name === "index")) {
			$(this).find("em").css({
				 "background": item.css("background-color")
			}).addClass("highlight");
		} else {
			item = item.andSelf();
			$(this).mouseenter(function() {
				item.animate({
					"width": "+=15"
				}, "fast");
			}).mouseleave(function() {
				item.animate({
					"width": "-=15"
				}, "fast");
			});
		}
	});

});
