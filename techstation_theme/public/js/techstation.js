
$(document).ready(function() {

document.body.style.backgroundColor= '#f7fafc';

//document.body.append(frappe.render_template("search", {}));

//$("#search").append(frappe.render_template("ser", {}));

frappe.utils.set_title(__("Applications"));

document.getElementById("type=help").style.display = "none";

if (["ar", "he", "fa"].indexOf(frappe.boot.lang) >= 0) {
			var ls = document.createElement('link');
			ls.rel="stylesheet";
			ls.href= "assets/techstation_theme/css-rtl/rtl.css";			
			document.getElementsByTagName('head')[0].appendChild(ls);
			$('body').addClass('rtl')
		}
});
