import createStore from 'fluxible/addons/createStore';

export default createStore({
    storeName: 'postsStore',
    handlers: {
        'RECEIVE_POSTS_SUCCESS': 'handleReceivePosts'
    },
    handleReceivePosts: function (payload) {
        this.posts = payload;
        this.emitChange();
    },
    getPosts: function () {
        return this.posts;
    },
    dehydrate: function () {
        return {
            posts: this.posts
        };
    },
    rehydrate: function (state) {
        this.posts = state.posts;
    }
});