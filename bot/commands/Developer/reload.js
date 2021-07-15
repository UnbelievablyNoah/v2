module.exports = class {
    constructor (name, category) {
        this.name = name,
        this.category = category,
        this.enabled = true,
        this.devOnly = true,
        this.aliases = [],
        this.userPerms = [],
        this.botPerms = [],
        this.cooldown = 0,
        this.help = {
            description: 'Reloads all commands and event modules.',
            arguments: '',
            details: '',
            examples: '',
        };
    }

    run (client, message, args, data) { //eslint-disable-line no-unused-vars
        client.commandLoader.reloadCommands();
        client.eventLoader.reloadEventModules();
        message.channel.send('All commands and event modules have been reloaded!');
    }
};