(function() {

/**
 * @requires $js
 */
var $what = window["$what"] = $js;

/**
 * @param {String} args
 * @param {String} callback (optional)
 */
$what.extend("include", function(args) {
	function getPath() {
		var
		result = "",
		pathname = {
			"/api/": "../../",
			"/docs/": "../"
		},
		url = window.location.href;
		for (var key in pathname) {
			if (url.indexOf(key) > -1) {
				 result = pathname[key];
			}
		}
		return result;
	}

	for (var i = 0, l = arguments.length; i < l; i++) {
		switch (arguments[i]) {
			// jQuery
			case "jquery":
				this.load(
					getPath() +
						//"js/jquery/jquery-1.3.2.min.js"
						//"js/jquery/jquery-1.4.4.min.js"
						//"js/jquery/jquery-1.5.2.min.js"
						//"js/jquery/jquery-1.6.4.min.js"
						//"js/jquery/jquery-1.7.2.min.js"
						"js/jquery/jquery-1.8.3.min.js"
				);
				break;

			// jQuery UI
			case "jqueryui":
				// v1.7
				//this.load(getPath() + "js/jquery/ui/1.7.3/jquery-ui.css");
				//this.load(getPath() + "js/jquery/ui/1.7.3/jquery-ui.min.js");
				//this.load(getPath() + "js/jquery/ui/1.7.3/ui.datepicker-zh-CN.min.js");

				// v1.8
				//this.load(getPath() + "js/jquery/ui/1.8.24/jquery-ui.min.css");
				this.load(getPath() + "js/jquery/ui/1.8.24/jquery-ui.min.js");
				//this.load(getPath() + "js/jquery/ui/1.8.24/jquery.ui.datepicker-zh-CN.min.js");

				// v1.9
				//this.load(getPath() + "js/jquery/ui/1.9.2/jquery-ui.min.css");
				//this.load(getPath() + "js/jquery/ui/1.9.2/jquery-ui.min.js");
				//this.load(getPath() + "js/jquery/ui/1.9.2/jquery.ui.datepicker-zh-CN.min.js");
				break;

			// jQuery lightBox
			case "jquery-lightbox":
				this.load(getPath() + "js/jquery/plugin/lightbox/jquery.lightbox-0.5.css");
				this.load(getPath() + "js/jquery/plugin/lightbox/jquery.lightbox-0.5.pack.js");
				break;

			// SyntaxHighlighter
			case "syntaxhighlighter":
				this.load(getPath() + "js/syntaxhighlighter/shCore.css");
				this.load(getPath() + "js/syntaxhighlighter/shCoreDefault.css");
				//this.load(getPath() + "js/syntaxhighlighter/shThemeDjango.css");
				//this.load(getPath() + "js/syntaxhighlighter/shThemeEclipse.css");
				//this.load(getPath() + "js/syntaxhighlighter/shThemeEmacs.css");
				//this.load(getPath() + "js/syntaxhighlighter/shThemeFadeToGrey.css");
				//this.load(getPath() + "js/syntaxhighlighter/shThemeMDUltra.css");
				//this.load(getPath() + "js/syntaxhighlighter/shThemeMidnight.css");
				//this.load(getPath() + "js/syntaxhighlighter/shThemeRDark.css");
				this.load(getPath() + "css/shTheme-4what.css");

				this.load(getPath() + "js/syntaxhighlighter/shCore.js");
				//this.load(getPath() + "js/syntaxhighlighter/shAutoloader.js");

				this.load(getPath() + "js/syntaxhighlighter/shLegacy.js"); // v1.5

				this.load(getPath() + "js/syntaxhighlighter/shBrushCss.js");
				this.load(getPath() + "js/syntaxhighlighter/shBrushJava.js");
				this.load(getPath() + "js/syntaxhighlighter/shBrushJScript.js");
				this.load(getPath() + "js/syntaxhighlighter/shBrushPhp.js");
				this.load(getPath() + "js/syntaxhighlighter/shBrushXml.js");

				// v3
				$(function() {

					//SyntaxHighlighter.defaults["auto-links"] = true;
					//SyntaxHighlighter.defaults["class-name"] = "";
					//SyntaxHighlighter.defaults["collapse"] = false;
					//SyntaxHighlighter.defaults["first-line"] = 1;
					//SyntaxHighlighter.defaults["gutter"] = true;
					//SyntaxHighlighter.defaults["highlight"] = [];
					//SyntaxHighlighter.defaults["html-script"] = false;
					//SyntaxHighlighter.defaults["smart-tabs"] = true;
					//SyntaxHighlighter.defaults["tab-size"] = 4;
					//SyntaxHighlighter.defaults["toolbar"] = false;

					SyntaxHighlighter.all();

				});

				// v1.5
				this.bind(window, "load", function() {
					dp.SyntaxHighlighter.HighlightAll("code", true, true, false, 1, false); // (name, [showGutter], [showControls], [collapseAll], [firstLine], [showColumns])
				});
				break;
			default:
				break;
		}
	}

	// callback
	var callback = arguments[arguments.length - 1];

	if (typeof callback === "function") {
		callback();
	}
});

/**
 * @param {Object} data
 * @param {Object} target (optional)
 */
$what.extend("log", function(data, target) {
	var p = document.createElement("p");
	p.innerHTML = data;
	!target ? document.body.appendChild(p) : target.appendChild(p);
});

})();

// init
$what.include("jquery", "jqueryui");
