frappe.provide('frappe.ui.form');

frappe.ui.form.CustomerQuickEntryForm.prototype.get_variant_fields= function() {
    var variant_fields = [
    {
        fieldname: 'territory',
        label: __('Territory'),
        reqd: 0,
        fieldtype: 'Link',
        options: "Territory",
        get_query: function() {
            return {
                filters: {
                    "is_group": 1
                }
            };
        }
    },	
    // {
    //     label: __("Sub Territory"),
    //     fieldname: "sub_territory",
    //     fieldtype: "Link",
    //     options: "Sub Territory",
    //     reqd: 1,
    // },
    // {
    //     fieldtype: "Section Break",
    //     label: __("National Identity"),
    //     collapsible: 1,
    // },
    // {
    //     label: __("Nationality"),
    //     fieldname: "nationality_1",
    //     fieldtype: "Link",
    //     options: "Country"
    // },
    // {
    //     label: __("Date of Birth"),
    //     fieldname: "date_of_birth_1",
    //     fieldtype: "Date"
    // },
    // {
    //     fieldtype: "Column Break"
    // },
    // {
    //     label: __("National Identification Number"),
    //     fieldname: "national_identification_number_1",
    //     fieldtype: "Data"
    // },
    // {
    //     label: __("Passport Number"),
    //     fieldname: "passport_number_1",
    //     fieldtype: "Data"
    // },
    {
        fieldtype: "Section Break",
        label: __("Primary Contact Details"),
        collapsible: 1,
    },
    {
        label: __("Email Id"),
        fieldname: "email_add",
        fieldtype: "Data"
    },
    {
        label: __("Mobile No"),
        fieldname: "mobile_no_0",
        fieldtype: "Data"
    },
    {
        label: __("Emergency Mobile No"),
        fieldname: "mobile_no_1",
        fieldtype: "Data"
    },
    {
        fieldtype: "Column Break"
    },
    {
        label: __("Whatsapp"),
        fieldname: "whatsapp",
        fieldtype: "Data"
    },
    {
        label: __("Telegram"),
        fieldname: "telegram_1",
        fieldtype: "Data"
    },
    {
        fieldtype: "Section Break",
        label: __("Primary Address Details"),
        collapsible: 1,
    },
    {
        label: __("Address Line"),
        fieldname: "address_line",
        fieldtype: "Data"
    },
    {
        label: __("Street"),
        fieldname: "street",
        fieldtype: "Data"
    },
    {
        label: __("City"),
        fieldname: "city_town",
        fieldtype: "Data"
    },
    {
        label: __("Country"),
        fieldname: "country",
        fieldtype: "Link",
        options: "Country"
    },
    {
        fieldtype: "Column Break"
    },
    {
        label: __("Apartment Number"),
        fieldname: "apartment_number",
        fieldtype: "Data"
    },
    {
        label: __("Special Marque"),
        fieldname: "special_marque",
        fieldtype: "Data"
    },
    {
        label: __("Phone to Contact"),
        fieldname: "phone_to_contact",
        fieldtype: "Data"
    }
    ];

    return variant_fields;
}