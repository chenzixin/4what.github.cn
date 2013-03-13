// onload
$what.bind(window, "load", function() {
	window.setInterval('$what.clock("clock")', 500);
	breadcrumb();
});

// breadcrumb
function breadcrumb() {
	function clickHandler() {
		for (var j = anchors.length - 1; j >= 0; j--) {
			anchors[j].className = no;
		}
		this.className = yes;
	}
	var
	anchors = document.getElementById("navbar").getElementsByTagName("a"),
	url = window.top.location.href,
	yes = "highlight",
	no = "original";
	for (var item, i = 0, l = anchors.length; i < l; i++) {
		item = anchors[i];
		if (url.indexOf(item.name) > -1) {
			item.className = yes;
		} else if (url.indexOf(".html") === -1) {
			anchors[0].className = yes;
		}
		//item.onclick = clickHandler;
	}
}


/* jQuery */
$(function() {

	// logo
	$("#logo").effect("slide", {}, "slow");

});
