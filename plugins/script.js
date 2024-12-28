const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *ABDULLAH KING*

> *PANHWAR MD REPO:*
*|* *https://github.com/abdullahkh123/ABDULLAH-KING-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029VatGT5777qVZ3dHdYK2g*
*╰──────────────●●►*

> *🇵🇰ABDULLAH-KING-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363358664877093@newsletter',
      newsletterName: "⁣♛꧁ 𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇༒𓆩 𝐊𝐈𝐍𝐆 .𓆪༒𝐌𝐃꧂⁣♛•°",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'PANHWAR MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/abdullahkh123/ABDULLAH-KING-MD" ,
thumbnailUrl: "https://i.ibb.co/Wnf2wJk/Manul-Ofc-X.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
