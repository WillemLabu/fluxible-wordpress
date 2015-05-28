export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home'),
        action: require('../actions/getPosts')
    }
};
