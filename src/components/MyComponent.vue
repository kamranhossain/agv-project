<template>
  <p v-if="alligatorGraphQL">From GraphQL: {{alligatorGraphQL.name}}</p>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      <span class="code-annotation">alligatorGraphQL: null</span>
    }
  },

  apollo: {
    // They key is the name of the data property
    // on the component that you intend to populate.
    alligatorGraphQL: {
      // Yes, this looks confusing.
      // It's just normal GraphQL.
      query: gql`
        query alligatorQuery($input: String!) {
          getAlligator(uuid: $input) {
            name
          }
        }
      `,

      variables: {
        // Some random UUID I generated.
        input: `03e082be-5e10-4351-a968-5f28d3e50565`
      },

      // Apollo maps results to the name of the query, for caching.
      // So to update the right property on the componet, you need to
      // select the property of the result with the name of the query.
      update: result => result.getAlligator,
    }
  }
}