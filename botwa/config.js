const fs = require('fs')
const chalk = require('chalk')

// Web Apikey
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Tempat Apikey
global.APIKeys = {
	'https://zenzapis.xyz': 'NETROGEMBEL', // Register Untuk Dapatkan Apikey
}

// Ganti Sewajarnya
global.owner = ['6282136821559']
global.pengguna = '𝙻𝙸𝙾𝙽𝙶𝙰𝙼𝙸𝙽𝙶𝚈𝚃'
global.premium = ['6282136821559']
global.pemilik = ['6282136821559'] 
global.ownernomer = '6282136821559'
global.ownername = '𝙻𝙸𝙾𝙽𝙶𝙰𝙼𝙸𝙽𝙶𝚈𝚃'
global.botname = '𝘕 𝘌 𝘛 𝘙 𝘖 𝘉 𝘖 𝘛 𝘡'
global.Prefix = 'Multi'
global.meki = '6282136821559'
global.footer = '𝙽𝙴𝚃𝚁𝙾𝙱𝙾𝚃𝚉 | © 2022'
global.ig = 'https://instagram.com/msultanutomo'
global.email = 'netrobotcenter@gmail.com'
global.region = 'Indonesia'
global.sc = 'https://youtube.com/channel/UCbPD6WnYyXsS5EWNlc-XRVw'
global.packname = '✨ 𝙽𝙴𝚃𝚁𝙾𝙱𝙾𝚃𝚉 ✨' 
global.author = '𝘕 𝘌 𝘛 𝘙 𝘖 𝘉 𝘖 𝘛 𝘡' 
global.sessionName = 'sessions'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: 'Done Your Request',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Fitur sedang error!',
        endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
    
}
    global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./media/zaki.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

//Ambil dr chika
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
