// include
$what.include("jquery-lightbox");

// onload
$what.bind(window, "load", function() {
	//setFont();
});

// font
function setFont() {
	try {
		var anchors = document.getElementById("overview").getElementsByTagName("a");
		for (var i = 0, l = anchors.length; i < l; i++) {
			anchors[i]
				.style.fontSize = $what.random(0.5, 2) * 1.618 + "em";
				//.className = "font-" + $what.random(0, 9, true);
		}
	} catch (e) {}
}


/* jQuery */
$(function() {

	// jQuery lightBox
	$("ul.gallery p a").lightBox({
		imageLoading: "js/jquery/plugin/lightbox/images/lightbox-ico-loading.gif",
		imageBtnPrev: "js/jquery/plugin/lightbox/images/lightbox-btn-prev.gif",
		imageBtnNext: "js/jquery/plugin/lightbox/images/lightbox-btn-next.gif",
		imageBtnClose: "js/jquery/plugin/lightbox/images/lightbox-btn-close.gif",
		imageBlank: "js/jquery/plugin/lightbox/images/lightbox-blank.gif"
	});

});

$(window).load(function() {

	// spotlight (for IE7-, Std)
	//window.setTimeout(function() {
		$("#overview li").eq(-1).delay(2000).effect("pulsate");
	//}, 2000);

});
