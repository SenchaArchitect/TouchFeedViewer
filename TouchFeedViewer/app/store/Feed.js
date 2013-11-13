/*
 * File: app/store/Feed.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Feed.store.Feed', {
    extend: 'Ext.data.Store',
    alias: 'store.feed',

    requires: [
        'Feed.model.Feed',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'Feed.model.Feed',
        storeId: 'Feed',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed'
            }
        }
    },

    loadFeed: function(feedUrl, numPosts) {
        console.log('Loading feed');
        this.load({
            params:{
                q: feedUrl,
                num: numPosts || 20
            }
        });

    }

});