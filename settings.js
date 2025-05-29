import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['18493907272', '🜲 Propietario 🜲', true],
  ['595974952174'],
  ['18093978365'],
  ['18292489539'], 
  ['']
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['18493907272'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = '𝐒𝐡𝐚𝐧𝐤𝐬𝐮-𝐁𝐎𝐓'
global.namebot = '𝚂𝚑𝚊𝚗𝚔𝚜𝚞-𝙱𝙾𝚃𝚅1'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '𝐒𝐇𝐀𝐍𝐊𝐒𝐔-𝐁𝐎𝐓𝐕1'
global.botname = '𝙎𝙝𝙖𝙣𝙠𝙨𝙪-𝘽𝙊𝙏👹'
global.wm = '✞︎𝙎𝙝𝙖𝙣𝙠𝙨𝙪-𝙗𝙤𝙩𝙫1✞︎'
global.author = '𝗠𝗮𝗱𝗲 𝗕𝘆 𝗡𝗲𝘅𝘂𝘀 𝗖𝗹𝘂𝗯༆'
global.dev = '© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐃𝐚𝐧𝐢𝐱𝐬 𝐑𝐃༆'
global.textbot = '𝑺𝒉𝒂𝒏𝒌𝒔𝒖-𝑩𝑶𝑻𝑽1 • 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐍𝐞𝐱𝐮𝐬 𝐂𝐥𝐮𝐛𝐬༆'
global.etiqueta = 'ⁱᵃᵐ|𝐃𝐚𝐧𝐢𝐱𝐬 𝐑𝐃༆'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = '¥enes'
global.welcom1 = '᯽ 𝙴𝚍𝚒𝚝𝚊 𝙲𝚘𝚗 𝙴𝚕 𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝚂𝚎𝚝𝚠𝚎𝚕𝚌𝚘𝚖𝚎🗨️'
global.welcom2 = '᯽ 𝙴𝚍𝚒𝚝𝚊 𝙲𝚘𝚗 𝙴𝚕 𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝚂𝚎𝚝𝚋𝚢𝚎👋🏻'
global.banner = 'https://files.catbox.moe/bqienf.jpg'
global.avatar = 'https://files.catbox.moe/ecdb44.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/BnaMTKnuJeR2YDFrHXiKP3'
global.comunidad1 = 'https://chat.whatsapp.com/BnaMTKnuJeR2YDFrHXiKP3'
global.channel = 'https://whatsapp.com/channel/0029VbAoNZxDZ4Lk1WmUyZ3I'
global.channel2 = 'https://whatsapp.com/channel/0029VbAoNZxDZ4Lk1WmUyZ3I'
global.md = 'https://github.com/DanxiZx/Shanksu-BotV1'
global.correo = 'marcelinolenny81@gmail.com'
global.cn ='https://whatsapp.com/channel/0029VbAoNZxDZ4Lk1WmUyZ3I';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363418746160323@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
