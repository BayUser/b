module.exports = {
    // Client will be the bot that you will use for the main purpose of the website and commands.
    client: {
        id: '1066734883059290162', // Bot ID
        token: process.env.token, // Bot token
        secret: process.env.secret, // Bot secret
        prefix: '!!', // Bot prefix
        owners: ["860229283598827540", "1125194165513375804"], // Bot owner(s) ID, can be multiple owners separated by comma 
    },

    // ServerClient will be the bot that will be used for the server list/server commands 
    // and the bot that will be public to everyone so they can invite it to their server.
    serverClient: {
        id: '1145263085679030273', // Server Bot ID
        prefix: '??', // Server Bot prefix
        token: process.env.token2, // Server Bot token

        // Replace the REPLACEME with your client ID
        invite: 'https://discord.com/oauth2/authorize?client_id=1145263085679030273&scope=bot%20identify&permissions=19473'
    },

    database: {
        url: "mongodb+srv://pegasus:sAw6D9uyGCoKN15D@cluster0.biew5bl.mongodb.net/?retryWrites=true&w=majority", // Mongo url (eg. mongodb+srv://<username>:<password>@<host>/<database>)
    },

    website: {
        port: 8080, // The port that the website will be on (default: 4777)
        // Localhost Example:
        // url: 'http://localhost:4777', // default url
        // callback: 'http://localhost:4777/callback', // default callback url

        // Example with domain:
        url: 'https://jet-ringed-spoon.glitch.me/', // default url
        callback: 'https://jet-ringed-spoon.glitch.me/callback', // default callback url

        // For login issues about the callback url, please join the support server and check the #support channel pinned messages.
        // If you still can't fix it, feel free to open a ticket in the support server.

        support: 'https://discord.gg/MWBMqd7jjz', // discord support server
        roles: {
            administrator: ["1071467432209825864"] // administrator role id(s)
        },
        botTags: [ // Botlist tags
            "Fun",
            "NSFW",
            "Game",
            "24/7",
            "OSU!",
            "Guard",
            "Anime",
            "Music",
            "Memes",
            "Invite",
            "Reddit",
            "Twitch",
            "Crypto",
            "Economy",
            "Logging",
            "Youtube",
            "Utility",
            "General",
            "Leveling",
            "Roleplay",
            "Fortnite",
            "Welcomer",
            "Chat bot",
            "Minecraft",
            "Community",
            "Minigames",
            "Moderation",
            "Protection",
            "Web Dashboard",
            "Reaction Roles",
            "Auto Moderation",
        ],
        serverTags: [
            "Fun",
            "Game",
            "NSFW",
            "Meme",
            "Shop",
            "Media",
            "Emoji",
            "Sound",
            "Stream",
            "Social",
            "Design",
            "Company",
            "Turkish",
            "Protest",
            "E-Sport",
            "Bot List",
            "Chatting",
            "Roleplay",
            "Challange",
            "Community",
            "Technology",
            "Server List",
            "Development",
        ]
    },

    server: {
        id: '983132734820081694', // Server ID

        emojis: {
            "approve": "<:tick:1127982524921024582>", 
            "decline": "<:red:1130053792558223381>",
            "success": "✅",
            "error": "❌",
        },

        // Channel IDs
        channels: {
            errors: '1145239512360955944', // Sends errors to this channel
            login: '1145239512360955944', // Sends login logs to this channel (member login)
            botlogs: '1145239512360955944', // Bot Add, Remove, Approve, Deny, Edit
            votes: '1145239512360955944', // Bot votes channel
            serverlogs: '1145239512360955944', // Server Add, Remove, Approve, Deny, Edit
            
            // Greetings
            welcome: '', // welcome logs channel Member/Bot joins the server
            leave: '', // Leave logs channel Member/Bot leaves the server

            schedules: '1145239512360955944', // New schedule logs channel when you want to schedule a promotion

            // Mongo Logs
            database: {
                logs: '1145239512360955944', // Channel ID to store database changes
            },

            voiceChannelStatistics: '1145239512360955944', // Voice channel statistics channel "Website Visitors: 1365"
        },

        // Role IDs
        roles: {
            botReviewer: '1071467432209825864', // Bot reviewer role
            botDeveloper: '1133055816589639681', // Bot developer role

            verifiedBot: '1125195734426320947', // Verified bot role
            unverifiedBot: '1125195734426320947', // Unverified bot role
        }
    },

    languages: [],
}