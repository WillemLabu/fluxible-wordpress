import createStore from 'fluxible/addons/createStore';

export default createStore({
    storeName: 'postsStore',
    handlers: {
        'RECEIVE_POSTS_SUCCESS': '_receivePosts'
    },
    initialize: function() {
        this.posts = [];
    },
    getAll: function() {
        return this.posts;
    },
    dehydrate: function() {
        return {
            posts: this.posts
        };
    },
    rehydrate: function(state) {
        this.posts = state.posts;
    },
    _receivePosts: function(posts) {

        console.log(posts.length + ' - Posts received!');

        this.posts = posts;
        this.emitChange();
    }
});