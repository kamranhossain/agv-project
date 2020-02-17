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

new Vue({
  render: h => h(App),
}).$mount('#app')
