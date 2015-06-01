
var React = require('react');
var postsStore = require('../stores/PostsStore');

function createMarkup(html) { return {__html: html}; }

var Home = React.createClass({

    contextTypes: {
        getStore: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return this.getStoreState();
    },

    getStoreState: function () {
        return {
            posts: this.context.getStore(postsStore).getPosts()
        }
    },

    componentDidMount: function () {
        this.context.getStore(postsStore).addChangeListener(this._onStoreChange);
    },

    componentWillUnmount: function () {
        this.context.getStore(postsStore).removeChangeListener(this._onStoreChange);
    },

    _onStoreChange: function () {
        this.setState(this.getStoreState());
    },

    render: function () {

        return (
            <div>
                {
                    this.state.posts.map(function(post, key){
                        return (
                            <div key={key}>
                                <h1>{post.title}</h1>
                                <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>
                            </div>
                        )
                    })
                }
            </div>
        );

    }
});

module.exports = Home;