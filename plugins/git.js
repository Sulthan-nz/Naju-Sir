const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.Naju, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('20210811_082543.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number wa.me/919895494822*
   
*owner number wa.me/919496956830*


*whatsapp group : _https://tinyurl.com/ygpz5bdq_*


*githublink       _https://tinyurl.com/yjdej5a2_*


*audio commads    _https://tinyurl.com/ydvlpbol_*



*sticker commads  _https://tinyurl.com/yfpd23yn_*     
`}) 

})); 
