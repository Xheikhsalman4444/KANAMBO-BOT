import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['923184070915', 'GOJO SATORU', true],
  ['923228980860', 'KEN KANEKI', true],
  ['19294512260', 'TOUKA CHAN', true],
] //Number of owners

global.mods = ['923184070915', '19294512260'] 
global.prems = ['923184070915', '923228980860']

// global.ai = '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', // Get you Api-key from 'https://platform.openai.com/account/api-keys'
// global.org = 'org-Wmzg6lcVPHGYXxmvPpM0CDsu',   
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['SGWN']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝙆𝘼𝙉𝙀𝙆𝙄-𝙈𝘿'
global.premium = 'true'
global.packname = '𝙆𝙀𝙉 𝙆𝘼𝙉𝙀𝙆𝙄' 
global.author = '𝙎𝘼𝙇𝙈𝘼𝙉 𝘼𝙃𝙈𝘼𝘿' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/itz_shaikho\n' 
global.dygp = 'https://chat.whatsapp.com/'
global.fgsc = 'https://github.com/Kanambp/KANAMBO-BOT' 
global.fgyt = 'https://youtube.com/s4salmanyt'
global.fgpyp = 'https://youtube.com/venomopi'
global.fglog = 'https://cdn.jsdelivr.net/gh/Kanambp/kanamb@main/kanambo.jpg' 


global.wait = '*⌛ _please wait..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
