import Fluxible from 'fluxible';
import { RouteStore } from 'fluxible-router';
import Application from './components/Application';
import routes from './configs/routes';
import ApplicationStore from './stores/ApplicationStore';

import postsStore from './stores/PostsStore';

import fetchrPlugin from 'fluxible-plugin-fetchr';

let fetchrInstance = fetchrPlugin({
    xhrPath: '/api' // Path for XHR to be served from
});

// create new fluxible instance
const app = new Fluxible({
    component: Application
});


app.plug(fetchrInstance);


// register routes
var MyRouteStore = RouteStore.withStaticRoutes(routes);
app.registerStore(MyRouteStore);

app.registerStore(postsStore);

// register other stores
app.registerStore(ApplicationStore);

module.exports = app;
