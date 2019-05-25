const { peers, gossip } = require('./gossip/resolver') 

const Query = {
  peers,
}

const Subscription = {
  gossip,
}

module.exports = {
  Query,
  Subscription,
}