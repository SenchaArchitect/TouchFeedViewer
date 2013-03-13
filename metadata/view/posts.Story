{
    "type": "Ext.Panel",
    "reference": {
        "name": "items",
        "type": "array"
    },
    "codeClass": null,
    "userConfig": {
        "data": [
            "{",
            "    title: 'Post One',",
            "    author: 'Joe Schmoe',",
            "    story: 'This is some mock content.',",
            "    date:\"Thu, 10 Jan 2013 14:41:00 -0800\"   ",
            "}"
        ],
        "html": null,
        "styleHtmlContent": true,
        "designer|userClassName": "posts.Story",
        "designer|userAlias": "postsstory",
        "layout": "fit",
        "scrollable": "vertical"
    },
    "mockCfgs": [
        "data"
    ],
    "designerId": "2a091605-b040-405a-850b-7188c860907c",
    "cn": [
        {
            "type": "Ext.XTemplate",
            "reference": {
                "name": "tpl",
                "type": "object"
            },
            "codeClass": null,
            "userConfig": {
                "designer|userClassName": "tpl",
                "implHandler": [
                    "{story}"
                ],
                "designer|displayName": "tpl"
            },
            "designerId": "23020e46-1839-4ada-8238-6b094e9cb545"
        }
    ]
}