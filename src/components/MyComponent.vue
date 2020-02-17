<template>
  <p>
    Alligator Name:
    <input type="text" v-if="alligatorGraphQL"
      :value="alligatorGraphQL.name" @input="temporaryName = $event.target.value"
    />
    <button @click="updateName">Update Name</button>
  </p>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      temporaryName: '',
      alligatorGraphQL: null
    }
  },

  apollo: {
    alligatorGraphQL: {
      query: gql`
        query alligatorQuery($input: String!) {
          getAlligator(uuid: $input) {
            name
          }
        }
      `,

      variables: {
        input: `03e082be-5e10-4351-a968-5f28d3e50565`
      },

      update: result => result.getAlligator,
    }
  },

  methods: {
    updateName() {
      this.$apollo.mutate({
        mutation: gql`
          mutation ($name: String!) {
            updateAlligatorName(name: $name)
          }
        `,
        variables: { name: this.temporaryName }
      }).then(mutationResult => {
        // Do stuff with the result.
        console.log(`The Alligator's updated name is: ${mutationResult.data.updateAlligatorName}`)
      });

    }
  }
}
</script>
