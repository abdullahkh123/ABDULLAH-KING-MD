const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    alias: "speed",
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const startTime = Date.now();

        // Add a short delay
        await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay

        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping result
        await conn.sendMessage(from, { 
            text: `*⚡ ⁣♛꧁ 𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇༒𓆩 𝐊𝐈𝐍𝐆 .𓆪༒𝐌𝐃꧂⁣♛•° SPEED: ${ping}ms*`, 
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363358664877093@newsletter',
                    newsletterName: '⁣♛꧁ 𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇༒𓆩 𝐊𝐈𝐍𝐆 .𓆪༒𝐌𝐃꧂⁣♛•°',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 

cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '> *PINGING...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `> *🔥 𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇 𝐊𝐈𝐍𝐆 SPEED : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
