import Vue from 'vue';
import App from './App.vue';

// This is everything we need to work with Apollo 2.0.
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
// Add this to your Apollo imports.
import { setContext } from 'apollo-link-context';

// Register the VueApollo plugin with Vue.
Vue.use(VueApollo);
Vue.config.productionTip = false

// Create a new HttpLink to connect to your GraphQL API.
// According to the Apollo docs, this should be an absolute URI.
const httpLink = new HttpLink({
  uri: `https://somerandomgraphqlapi.com/api`
});

// Create a new Middleware Link using setContext
const middlewareLink = setContext(() => ({
  headers: {
    authorization: `Bearer ${HOWEVER_I_GET_MY_JWT}`
  }
}));

// Change link assignment from
// const link = httpLink;
// to
const link = middlewareLink.concat(httpLink);

// Create the apollo client
const apolloClient = new ApolloClient({
  // Tells Apollo to use the link chain with the http link we set up.
  link,
  // Handles caching of results and mutations.
  cache: new InMemoryCache(),
  // Useful if you have the Apollo DevTools installed in your browser.
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  // Apollo 2.0 allows multiple clients to be enabled at once.
  // Here we select the default (and only) client.
  defaultClient: apolloClient,
});

new Vue({
  // Inject apolloProvider for components to use.
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app')
