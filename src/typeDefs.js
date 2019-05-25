const Gossip = require('./gossip/type')

const Query = `
  type Query {
    peers: [Peer]
  }
`

const Subscription = `
  type Subscription {
    gossip(connected: Boolean source: String): Gossip
  }
`

const Schema = () => [`
  schema {
    query: Query
    subscription: Subscription
  }
`]

module.exports = [
  Schema,
  Query,
  Subscription,
  Gossip,
]