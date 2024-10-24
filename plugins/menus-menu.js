import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

     // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┎━━━━━━━ ∙ʚ🤴🏻ɞ∙ ━━━━━━━┒
┃⭐ Creador : 𝐍𝐀𝐒𝐀 𝐁𝐎𝐓
┃📞 Wa.me/51920011639
┃https://whatsapp.com/channel/0029Varplf3EwEjoUMw34V13
┖━━━━━━━ ∙ʚ🚀ɞ∙ ━━━━━━━┚


 ╭━〔 🔘 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 🔘 〕
 *┃➤ 🟢 ${usedPrefix}enable*
 *┃➤ 🔴 ${usedPrefix}disable*
  ╰━━━━━━━━━━━━
 
╭━〔 ℹ️ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 ℹ️〕
*┃➤ ${usedPrefix}grupos*
*┃➤ ${usedPrefix}estado*
*┃➤ ${usedPrefix}infobot*
*┃➤ ${usedPrefix}speedtest*
*┃➤ ${usedPrefix}donar*
*┃➤ ${usedPrefix}owner*
*┃➤ ${usedPrefix}script*
*┃➤ ${usedPrefix}reporte <txt>*
*┃➤ ${usedPrefix}join <wagp_url>*
*┃➤ ${usedPrefix}fixmsgespera*
*┃➤ bot (sin prefijo)*
╰━━━━━━━━━━━━


╭━〔 ⚙️ 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎𝐍 ⚙️〕
*┃➤ ${usedPrefix}enable restrict*
*┃➤ ${usedPrefix}disable restrict*
* ${usedPrefix}enable autoread*
*┃➤ ${usedPrefix}disable autoread*
*┃➤ ${usedPrefix}enable antispam*
*┃➤ ${usedPrefix}disable antispam*
*┃➤ ${usedPrefix}enable anticall*
*┃➤ ${usedPrefix}disable anticall*
*┃➤ ${usedPrefix}enable modoia*
*┃➤ ${usedPrefix}disable modoia*
*┃➤ ${usedPrefix}enable audios_bot*
*┃➤ ${usedPrefix}disable audios_bot*
*┃➤ ${usedPrefix}enable antiprivado*
*┃➤ ${usedPrefix}disable antiprivado*
╰━━━━━━━━━━━━


╭━〔 ⚠️ *FREE FIRE* ⚠️ 〕
 *┃➤ 🗺️ ${usedPrefix}menuff*
 *┃➤ 🗺️ ${usedPrefix}bermuda*
 *┃➤ 🗺️ ${usedPrefix}kalahari*
 *┃➤ 🗺️ ${usedPrefix}alpes*
 *┃➤ 🗺️ ${usedPrefix}purgatorio*
 *┃➤ 🗺️ ${usedPrefix}nexterra*
 *┃➤ 📋 ${usedPrefix}agendasemanal*
╰━━━━━━━━━━━━


╭━〔 🎮 𝐌𝐎𝐃𝐎𝐒 𝐃𝐄 𝐉𝐔𝐄𝐆𝐎 🎮 〕
*┃➤ ${usedPrefix}Fem4*
*┃➤ ${usedPrefix}Fem6*
*┃➤ ${usedPrefix}FemInterna4*
*┃➤ ${usedPrefix}FemInterna6*
*┃➤ ${usedPrefix}Masc4*
*┃➤ ${usedPrefix}Masc6*
*┃➤ ${usedPrefix}MascInterna4*
*┃➤ ${usedPrefix}MascInterna6*
*┃➤ ${usedPrefix}Mixto4*
*┃➤ ${usedPrefix}Mixto6*
*┃➤ ${usedPrefix}MixtoInterna4*
*┃➤ ${usedPrefix}MixtoInterna6*
*┃➤ ${usedPrefix}apos*
*┃➤ ${usedPrefix}mapa*
*┃➤ ${usedPrefix}Ficha / Formulario Reclutamiento*
*┃➤ ${usedPrefix}Nexterra*
*┃➤ ${usedPrefix}Bermuda*
*┃➤ ${usedPrefix}Kalahary*
*┃➤ ${usedPrefix}Alpes*
*┃➤ ${usedPrefix}AgendaSemanal*
╰━━━━━━━━━━━━


╭━〔 ⚔️ *BUSCAR VS* 🔱 〕
 *┃➤ 🌀 ${usedPrefix}buscarvsmasc*
 *┃➤ ⚔️ ${usedPrefix}bsmsac*
 *┃➤ ⚓ ${usedPrefix}buscarvsfem*
 *┃➤ ✨ ${usedPrefix}bsfem*
 *┃➤ 📍 ${usedPrefix}buscarvsmixto*
 *┃➤ 👁️‍🗨️ ${usedPrefix}bsmixto*
╰━━━━━━━━━━━━


╭━〔 📂 𝐋𝐈𝐍𝐊𝐒 𝐃𝐄 𝐂𝐎𝐌𝐔𝐍𝐈𝐃𝐀𝐃𝐄𝐒/𝐀𝐏𝐊 𝐘 𝐃𝐑𝐈𝐕𝐄𝐒 𝐃𝐙𝐍 📂〕
┃➤ ${usedPrefix}SpamApk / WhatsApp
┃➤ ${usedPrefix}SpamComu / Comunidades
┃➤ ${usedPrefix}Spam2
┃➤ ${usedPrefix}rcursosdzn
┃➤ ${usedPrefix}drivesdzn
┃➤ ${usedPrefix}dzn
┃➤ ${usedPrefix}ApkEdits
┃➤ ${usedPrefix}DriveEdits
╰━━━━━━━━━━━━


╭━〔 🧿 𝐆𝐄𝐍𝐄𝐑𝐀 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 🧿 〕
┃➤ 🖥️ ${usedPrefix}plataformas
┃➤ 📦 ${usedPrefix}drops
┃➤ 🎥 ${usedPrefix}streaming
┃➤ 💳 ${usedPrefix}cccompras
┃➤ 🎓 ${usedPrefix}cursovip
┃➤ 💳 ${usedPrefix}cc2
┃➤ 💼 ${usedPrefix}cursoplataformas
╰━━━━━━━━━━━


╭━〔 ✨ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐘 𝐅𝐈𝐋𝐓𝐑𝐎𝐒 ✨ 〕
*┃➤ ${usedPrefix}sticker | s imagen o video*
*┃➤ ${usedPrefix}sticker | s url de tipo jpg*
*┃➤ ${usedPrefix}emojimix 😺+😆*
*┃➤ ${usedPrefix}qc*
*┃➤ ${usedPrefix}scircle | círculo imagen*
*┃➤ ${usedPrefix}semoji | emoji tipo emoji*
*┃➤ ${usedPrefix}attp texto*
*┃➤ ${usedPrefix}attp2 texto*
*┃➤ ${usedPrefix}ttp texto*
*┃➤ ${usedPrefix}ttp2 texto*
*┃➤ ${usedPrefix}ttp3 texto*
*┃➤ ${usedPrefix}ttp4 texto*
*┃➤ ${usedPrefix}ttp5 texto*
*┃➤ ${usedPrefix}ttp6 texto*
*┃➤ ${usedPrefix}dado*
*┃➤ ${usedPrefix}stickermarker efecto : responder a imagen*
*┃➤ ${usedPrefix}stickerfilter efecto : responder a imagen*
*┃➤ ${usedPrefix}cs : cs2*
╰━━━━━━━━━━━━


╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
*┃➤ 🕹️ ${usedPrefix}mates*
*┃➤ 🕹️ ${usedPrefix}ppt*
*┃➤ 🕹️ ${usedPrefix}prostituto <@tag>*
*┃➤ 🕹️ ${usedPrefix}prostituta <@tag>*
*┃➤ 🕹️ ${usedPrefix}gay2 <@tag>*
*┃➤ 🕹️ ${usedPrefix}lesbiana <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajero <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajera <@tag>*
*┃➤ 🕹️ ${usedPrefix}puto <@tag>*
*┃➤ 🕹️ ${usedPrefix}puta <@tag>*
*┃➤ 🕹️ ${usedPrefix}manco <@tag>*
*┃➤ 🕹️ ${usedPrefix}manca <@tag>*
*┃➤ 🕹️ ${usedPrefix}rata <@tag>*
*┃➤ 🕹️ ${usedPrefix}negro <@tag>*
*┃➤ 🕹️ ${usedPrefix}negra <@tag>*
*┃➤ 🕹️ ${usedPrefix}fea <@tag>*
*┃➤ 🕹️ ${usedPrefix}feo <@tag>*
*┃➤ 🕹️ ${usedPrefix}sinpoto <@tag>*
*┃➤ 🕹️ ${usedPrefix}sintetas <@tag>*
*┃➤ 🕹️ ${usedPrefix}sinpito <@tag>*
*┃➤ 🕹️ ${usedPrefix}adoptada <@tag>*
*┃➤ 🕹️ ${usedPrefix}adoptado <@tag>*
*┃➤ 🕹️ ${usedPrefix}love*
*┃➤ 🕹️ ${usedPrefix}los10*
*┃➤ 🕹️ ${usedPrefix}suitpvp*
*┃➤ 🕹️ ${usedPrefix}slot*
*┃➤ 🕹️ ${usedPrefix}simisimi*
*┃➤ 🕹️ ${usedPrefix}pregunta*
*┃➤ 🕹️ ${usedPrefix}cuando*
*┃➤ 🕹️ ${usedPrefix}ship5*
*┃➤ 🕹️ ${usedPrefix}abrazo*
*┃➤ 🕹️ ${usedPrefix}ship2*
*┃➤ 🕹️ ${usedPrefix}formarpareja*
*┃➤ 🕹️ ${usedPrefix}verdad*
*┃➤ 🕹️ ${usedPrefix}reto*
*┃➤ 🕹️ ${usedPrefix}cancion*
*┃➤ 🕹️ ${usedPrefix}pista*
*┃➤ 🕹️ ${usedPrefix}ruleta*
*┃➤ 🕹️ ${usedPrefix}zodiac*
*┃➤ 🕹️ ${usedPrefix}odio*
*┃➤ 🕹️ ${usedPrefix}ship*
*┃➤ 🕹️ ${usedPrefix}sorteo*
*┃➤ 🕹️ ${usedPrefix}minovia*
*┃➤ 🕹️ ${usedPrefix}minovio*
*┃➤ 🕹️ ${usedPrefix}kchero*
*┃➤ 🕹️ ${usedPrefix}kchero*
 ╰━━━━━━━━━━━━


 ╭━〔 🎭 *IMAGENES* 🎭 〕
*┃➤ 🖍️ ${usedPrefix}goku*
*┃➤ 🖍️ ${usedPrefix}vegeta*
*┃➤ 🖍️ ${usedPrefix}lora*
*┃➤ 🖍️ ${usedPrefix}cr7*
*┃➤ 🖍️ ${usedPrefix}spiderman*
*┃➤ 🖍️ ${usedPrefix}batman*
*┃➤ 🖍️ ${usedPrefix}hellokitty*
*┃➤ 🖍️ ${usedPrefix}charmander*
 ╰━━━━━━━━━━━━


 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 📥 ${usedPrefix}play*
*┃➤ 📥 ${usedPrefix}play.1*
*┃➤ 📥 ${usedPrefix}play2.2*
*┃➤ 📥 ${usedPrefix}ytv.2*
*┃➤ 📥 ${usedPrefix}yta.2*
*┃➤ 📥 ${usedPrefix}playlist*
*┃➤ 📥 ${usedPrefix}spotify*
*┃➤ 📥 ${usedPrefix}spotifydl*
*┃➤ 📥 ${usedPrefix}tiktok*
*┃➤ 📥 ${usedPrefix}instagram*
*┃➤ 📥 ${usedPrefix}mediafire*
*┃➤ 📥 ${usedPrefix}gdrive*
*┃➤ 📥 ${usedPrefix}twitter*
*┃➤ 📥 ${usedPrefix}yta*
*┃➤ 📥 ${usedPrefix}ytv*
*┃➤ 📥 ${usedPrefix}imagen*
*┃➤ 📥 ${usedPrefix}iaimagen*
*┃➤ 📥 ${usedPrefix}pinteres*
*┃➤ 📥 ${usedPrefix}igstory*
 ╰━━━━━━━━━━━━


*╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*
*┃➤ 📍 ${usedPrefix}toimg*
*┃➤ 📍 ${usedPrefix}tomp3*
*┃➤ 📍 ${usedPrefix}toptt*
*┃➤ 📍 ${usedPrefix}tovideo*
*┃➤ 📍 ${usedPrefix}tts*
 ╰━━━━━━━━━━━━

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*
*┃➤ ❄️ ${usedPrefix}mensajefalso*
*┃➤ ❄️ ${usedPrefix}logos*
*┃➤ ❄️ ${usedPrefix}logocorazon*
*┃➤ ❄️ ${usedPrefix}ytcomment*
*┃➤ ❄️ ${usedPrefix}hornycard*
*┃➤ ❄️ ${usedPrefix}itssostupid*
*┃➤ ❄️ ${usedPrefix}pixelar*
 ╰━━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*┃➤ 🥀 ${usedPrefix}piropo*
*┃➤ 🥀 ${usedPrefix}consejo*
*┃➤ 🥀 ${usedPrefix}fraseromantica*
 ╰━━━━━━━━━━━━

 ╭━〔 ✨ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
*┃➤ 🔍 ${usedPrefix}xnxxsearch*
*┃➤ 🔍 ${usedPrefix}google*
*┃➤ 🔍 ${usedPrefix}letra*
*┃➤ 🔍 ${usedPrefix}wikipedia*
*┃➤ 🔍 ${usedPrefix}ytsearch*
*┃➤ 🔍 ${usedPrefix}playstore*
*┃➤ 🔍 ${usedPrefix}mercadolibre*
*┃➤ 🔍 ${usedPrefix}pornhubsearch*
 ╰━━━━━━━━━━━━

 ╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
*┃➤ 🍃 ${usedPrefix}clima*
*┃➤ 🍃 ${usedPrefix}afk*
*┃➤ 🍃 ${usedPrefix}ocr*
*┃➤ 🍃 ${usedPrefix}calc*
*┃➤ 🍃 ${usedPrefix}del*
*┃➤ 🍃 ${usedPrefix}whatmusic*
*┃➤ 🍃 ${usedPrefix}qrcode*
*┃➤ 🍃 ${usedPrefix}traducir*
 ╰━━━━━━━━━━━━

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
*┃➤ 🍁 ${usedPrefix}verificar*
*┃➤ 🍁 ${usedPrefix}unreg*
*┃➤ 🍁 ${usedPrefix}minar*
*┃➤ 🍁 ${usedPrefix}buy*
*┃➤ 🍁 ${usedPrefix}work*
*┃➤ 🍁 ${usedPrefix}mendigar*
*┃➤ 🍁 ${usedPrefix}transfer*
 ╰━━━━━━━━━━━━


 ╭━〔 🔧 𝐀𝐃𝐌𝐈𝐍𝐒 🔧 〕
*┃➤ ${usedPrefix}add num*
*┃➤ ${usedPrefix}kick <@tag>*
*┃➤ ${usedPrefix}kick2 <@tag>*
*┃➤ ${usedPrefix}listanum <txt>*
*┃➤ ${usedPrefix}kicknum <txt>*
*┃➤ ${usedPrefix}grupo <abrir/cerrar>*
*┃➤ ${usedPrefix}grouptime*
*┃➤ ${usedPrefix}promote <@tag>*
*┃➤ ${usedPrefix}demote <@tag>*
*┃➤ ${usedPrefix}infogroup*
*┃➤ ${usedPrefix}resetlink*
*┃➤ ${usedPrefix}link*
*┃➤ ${usedPrefix}setname <txt>*
*┃➤ ${usedPrefix}setdesc <txt>*
*┃➤ ${usedPrefix}invocar <txt>*
*┃➤ ${usedPrefix}setwelcome <txt>*
*┃➤ ${usedPrefix}setbye <txt>*
*┃➤ ${usedPrefix}hidetag <txt>*
*┃➤ ${usedPrefix}hidetag <audio>*
*┃➤ ${usedPrefix}hidetag <video>*
*┃➤ ${usedPrefix}hidetag <img>*
*┃➤ ${usedPrefix}warn <@tag>*
*┃➤ ${usedPrefix}unwarn <@tag>*
*┃➤ ${usedPrefix}listwarn*
*┃➤ ${usedPrefix}fantasmas*
*┃➤ ${usedPrefix}destraba*
*┃➤ ${usedPrefix}setpp <img>*
*┃➤ ${usedPrefix}admins <txt>*
╰━━━━━━━━━━━━


╭━〔 👑 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄𝐒 𝐏𝐀𝐑𝐀 𝐎𝐖𝐍𝐄𝐑𝐒 👑 〕
*┃➤ 💎 ${usedPrefix}join enlace*
*┃➤ 💎 ${usedPrefix}unete enlace*
*┃➤ 💎 ${usedPrefix}dardiamantes cantidad*
*┃➤ 💎 ${usedPrefix}darxp cantidad*
*┃➤ 💎 ${usedPrefix}dargatacoins cantidad*
*┃➤ 💎 ${usedPrefix}addprem | userpremium @tag cantidad*
*┃➤ 💎 ${usedPrefix}addprem2 | userpremium2 @tag cantidad*
*┃➤ 💎 ${usedPrefix}addprem3 | userpremium3 @tag cantidad*
*┃➤ 💎 ${usedPrefix}addprem4 | userpremium4 @tag cantidad*
*┃➤ 💎 _${usedPrefix}idioma | language*
*┃➤ 💎 _${usedPrefix}cajafuerte*
*┃➤ 💎 ${usedPrefix}comunicar | broadcastall | bc texto*
*┃➤ 💎 ${usedPrefix}broadcastchats | bcc texto*
*┃➤ 💎 ${usedPrefix}comunicarpv texto*
*┃➤ 💎 ${usedPrefix}broadcastgc texto*
*┃➤ 💎 ${usedPrefix}comunicargrupos texto*
*┃➤ 💎 _${usedPrefix}borrartmp | cleartmp*
*┃➤ 💎 ${usedPrefix}delexp @tag*
*┃➤ 💎 ${usedPrefix}deloptimuscoins @tag*
*┃➤ 💎 ${usedPrefix}deldiamantes @tag*
*┃➤ 💎 _${usedPrefix}reiniciar | restart*
*┃➤ 💎 _${usedPrefix}Actualizar | update*
*┃➤ 💎 ${usedPrefix}addprem | +prem @tag*
*┃➤ 💎 ${usedPrefix}delprem | -prem @tag*
*┃➤ 💎 _${usedPrefix}listapremium | listprem*
*┃➤ 💎 ${usedPrefix}añadirdiamantes @tag cantidad*
*┃➤ 💎 ${usedPrefix}añadirxp @tag cantidad*
*┃➤ 💎 ${usedPrefix}añadircoins @tag cantidad*
╰━━━━━━━━━━━━
    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen1
    } else if (idioma == 'pt-br') {
      pp = global.imagen2
    } else if (idioma == 'fr') {
      pp = global.imagen3
    }else if (idioma == 'en') {
      pp = global.imagen4
    } else if (idioma == 'ru') {
      pp = global.imagen5
    } else {
      pp = global.imagen1 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      //await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
