import Vue from 'vue';
import App from './App.vue';

// This is everything we need to work with Apollo 2.0.
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

// Register the VueApollo plugin with Vue.
Vue.use(VueApollo);
Vue.config.productionTip = false

// Create a new HttpLink to connect to your GraphQL API.
// According to the Apollo docs, this should be an absolute URI.
const httpLink = new HttpLink({
  uri: `https://somerandomgraphqlapi.com/api`
});

// I'm creating another variable here just because it makes it easier to add more links in the future.
const link = httpLink;

new Vue({
  render: h => h(App),
}).$mount('#app')
