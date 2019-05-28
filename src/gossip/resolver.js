const pull = require('pull-stream')
// const { gossip, peers } = require('ssb-helpers')

module.exports = {
  peers: async (_, {}, { sbot }) => {
    return sbot.gossip.peers()
  },
  gossip: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { source, connected } = args
      const channel = 'gossip'
      pull(
        sbot.gossip.changes(),
        pull.filter(change => {
          if (source) {
            if (change.peer.source === source) return change
            else return
          }
          if (connected) {
            return change.type === 'connect'
          }
          return change
        }),
        pull.drain(gossip => pubsub.publish(channel, { gossip }))
      )
      return pubsub.asyncIterator(channel)
    },
  },
}