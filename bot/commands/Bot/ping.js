module.exports = class {
    constructor (name, category) {
        this.name = name,
        this.category = category,
        this.enabled = true,
        this.devOnly = false,
        this.aliases = [],
        this.userPerms = [],
        this.botPerms = [],
        this.cooldown = 2000,
        this.help = {
            description: 'Test response time between Woomy and Discord.',
            usage: 'ping',
            examples: null
        };
    }

    run (client, message, args, data) { //eslint-disable-line no-unused-vars
        message.channel.createMessage(client.constants.responses.ping.random())
            .then(m => {
                m.edit(`${m.content} \`roundtrip: ${m.timestamp - message.timestamp}ms | websocket: ${message.channel.guild.shard.latency}ms\``);
            });
    }
};