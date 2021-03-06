/*
 * File: app/controller/Posts.js
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

Ext.define('Feed.controller.Posts', {
    extend: 'Ext.app.Controller',
    alias: 'controller.posts',

    config: {
        models: [
            'Post'
        ],
        stores: [
            'Posts',
            'Feed',
            'Feeds'
        ],
        views: [
            'posts.List',
            'posts.Story'
        ],

        refs: {
            postsNav: '#postsNav',
            postsList: '#postsList'
        },

        control: {
            "postslist": {
                activate: 'onPostsListActivate',
                itemtap: 'onPostsListItemTap'
            }
        }
    },

    onPostsListActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        this.getApplication().fireEvent('updateNav');
    },

    onPostsListItemTap: function(dataview, index, target, record, e, eOpts) {
        var story = Ext.create('Feed.view.posts.Story',{
            title: record.get('title')
        });
        story.setData(record.data);
        this.getPostsNav().push(story);
    },

    launch: function() {
        this.loadPostsOnFeedLoad();

        Ext.getStore('Feed').loadFeed('http://feeds.feedburner.com/blogspot/MKuf');
        //https://blog.facebook.com/atom.php
        //http://feeds.feedburner.com/blogspot/MKuf
        //http://feeds.feedburner.com/SenchaBlog

    },

    init: function(application) {

                application.on([
                    { event: 'updateNav', fn: this.onUpdateNav, scope: this }
                ]);
    },

    loadPostsOnFeedLoad: function() {
        var self = this;

        Ext.getStore('Feed').on('load', function(store, records) {
            var feed = records[0],
                posts, title, feedsStore;

            if (feed) {
                posts = feed.posts().getData().items;
                title = feed.get('title');
                feedsStore = Ext.getStore('Feeds');

                Ext.getStore('Posts').setData(posts);

                self.getPostsList().title = title;

                if (feedsStore.find('url', feed.get('url')) < 0){
                    feedsStore.add(feed);
                }
            } else {
                Ext.Msg.alert('Error', 'Could not load feed. Check that the URL is a valid feed.');
            }
        });

    },

    onUpdateNav: function() {
        var self = this;
        // ugly hack, so that this happens after title is internally set by back state stack
        Ext.defer(function(){
            var title = self.getPostsList().title;
            self.getPostsNav().getNavigationBar().setTitle(title);
        },500);
    }

});