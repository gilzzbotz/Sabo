const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'netrogembel',
}

// Other
global.owner = ['628815952469']
global.premium = ['628815952469']
global.botname = 'Sabo - MD'
global.ownername = 'Sabo'
global.packname = ''
global.author = 'Created By Sabo'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '*_Done_*',
admin: '*Fitur Ini Hanya Bisa Digunakan Oleh Admin Grup*',
botAdmin: '*Jadikan Bot Sebagai Admin Terlebih Dahulu*',
owner: '*Fitur Ini Khusus Owner Bot*',
group: '*Fitur Ini Hanya Bisa Di Gunakan Di Group*',
private: '*Fitur Ini Hanya Bisa Digunakan Di Private Message*',
bot: '*Fitur Ini Khusud Pengguna Bot*',
wait: '*Bentar*',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 30
}
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
global.sewabot = fs.readFileSync('./media/sewabot.jpg')
global.qris = fs.readFileSync('./media/qris.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
