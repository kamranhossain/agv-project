// This assumes your server-side schema is roughly as follows:

type Alligator {
  name: String
}

type Query {
  getAlligator(uuid: String!): Alligator
}

type Mutation {
  updateAlligatorName(name: String!): String
}

schema {
  query: Query
  mutation: Mutation
}