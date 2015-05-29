'use strict';
var React = require('react');
var FluxibleMixin = require('fluxible').Mixin;
var postsStore = require('../stores/PostsStore.js');

class Home extends React.Component {
	mixins: [FluxibleMixin]

    constructor() {
        // super();
        // this.state = postsStore.getAll();
    }

    statics: {
        storeListeners: {
            _onChange: [postsStore]
        }
    }
	
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
            </div>
        );
    }
}

module.exports = Home;
