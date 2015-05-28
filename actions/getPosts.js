export default function getPosts(context, payload, done) {

    context.service.read('posts', {}, {}, function (err, posts) {

        if (err || !posts) {
            context.dispatch('RECEIVE_POSTS_FAILURE', err);
        } else {
            context.dispatch('RECEIVE_POSTS_SUCCESS', posts);
        }

        done();

    });

}