module.exports = {
    name: "ping",
    category: "Owner",
    cooldown: 2,
    usage: "ping",
    description: "Returns latency and API ping",
    run: async (client, message) => {
        return message.channel.send({
            content: `Pong! :ping_pong: Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`,
        });
    },
};