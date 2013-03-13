// Include
if (window.location.href.indexOf("/wiki") > -1) {
	$what.include("syntaxhighlighter");
}

// onload
$what.bind(window, "load", function() {
	//toggle();
});

// toggle
function toggle() {
	function clickHandler() {
		var
		ico = this.getElementsByTagName("span")[0],
		section = document.getElementById("chapter-" + this.name);
		ico.innerHTML = ico.innerHTML === "-" ? "+" : "-";
		section.style.display = section.style.display === "none" ? "block" : "none";
	}
	var headings = document.getElementsByTagName("h2");
	for (var i = headings.length - 1; i >= 0; i--) {
		headings[i].getElementsByTagName("a")[0].onclick = clickHandler;
	}
}


/* jQuery */
$(function() {

	// toggle
	$("h2 a").click(function() {
		$("#chapter-" + $(this).attr("name")).slideToggle("slow");
		$(this).find("span").text($(this).is(":contains('-')") ? "+" : "-");
	});

});
