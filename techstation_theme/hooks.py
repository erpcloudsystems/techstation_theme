# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "techstation_theme"
app_title = "Techstation Theme"
app_publisher = "Techstation Egypt"
app_description = "Techstation Theme"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "support@techstation.com.eg"
app_license = "MIT"
app_logo_url = "/assets/techstation_theme/img/logo.png"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html

app_include_css = [
	"/assets/techstation_theme/css/blue-theme.css"
]

website_context = {
	"favicon": 	"/assets/techstation_theme/img/logo.png",
	"splash_image": "/assets/techstation_theme/img/logo.png"
}

# include js, css files in header of desk.html
# app_include_css = "/assets/techstation_theme/css/techstation_theme.css"
# app_include_js = "/assets/techstation_theme/js/customer_quick_entry.js"

# include js, css files in header of web template
# web_include_css = "/assets/techstation_theme/css/techstation_theme.css"
# web_include_js = "/assets/techstation_theme/js/techstation_theme.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "techstation_theme/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"
home_page = "index"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

fixtures = [
    {
        "dt": "Property Setter",
        "filters": [
            ["app_name", "=", "techstation_theme"]
        ]
    }
]

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "techstation_theme.install.before_install"
# after_install = "techstation_theme.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "techstation_theme.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"techstation_theme.tasks.all"
# 	],
# 	"daily": [
# 		"techstation_theme.tasks.daily"
# 	],
# 	"hourly": [
# 		"techstation_theme.tasks.hourly"
# 	],
# 	"weekly": [
# 		"techstation_theme.tasks.weekly"
# 	]
# 	"monthly": [
# 		"techstation_theme.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "techstation_theme.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "techstation_theme.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "techstation_theme.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


