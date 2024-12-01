//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNXSk5qL210RlYyNkRDN1g4VFBrd2M5eFVab01RK2xFT3hsTDVlTjVGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDRLQ3FSTHRSYlZJQTU1UExUam5wQ0JpbktyRmpoMTBBTWtNeVhWWnJUVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRXJSMEpBaGVwNVBJZmROZVF3bW1HbGtGQ1Z1c3lzK1JzUUx2RjBnWWs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6eU1DT0haSUIwSHlzdmd3N2RXell0QVU0WHMrNmlnbFlrSmxKYWUzQ0Y4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOSkJySmJvcU5hOUVpRU40blNFQ3ZYWFAveWMyNzBtS25XWlQ0bjZZVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVyT2ZYODFZYXB1ZXZDMDVRN3NXRDdNaXdjWlJwUFZyU0VFejV1bGppV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJOc3BiN1ZXdXVnaDBoNWVHTjRKYUpMZ1N6ZGpRbzRLMEVaN2pwbElrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkFra1pCSmRzQ2J1WWRZRERpQTFmdnRpWHZJRUt2VFVML0kyeU1vS0tqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGNWlXakFTWk1STjNkZlUxeUpYQy9nVmlBelMrdUV2c0YyUVlnS2M1OGVHTElWeGJoa3c5WEpmWWNveFJhMTFsdVA4dW1EMVVtNmcxb0ZheEJPYmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6ImZ0aWVLM2dqYVl2TGY3Y0NETEdnNVlWUXZDRTJ6WVlYM0ZPT0Q0S1FxQlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDc4NzI5MjYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYwREM0Q0YxMjdEREQzQzg1RDIyRDFBMzc2NENDQUNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzMwNDI1MTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ3ODcyOTI2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENjM3RTgxNjBFOTgxRjY3MDlEOTE1NDU3M0IxOTJDQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzMDQyNTE3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpc3laZWdnUFJnQ2czNUJId25salZBIiwicGhvbmVJZCI6IjU0YTIzMmY1LTMwOWQtNDkwOS05ZDQ1LTk0MTY1NzMxMDc0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4WnUva3R0UTFMZks5clV1UWg5K1ppUlhkUE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaThLbWhwcGMza3c4YXd2cHNXa2c3cUpPWUVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI5UTFDWVdTIiwibWUiOnsiaWQiOiI5MjM0Nzg3MjkyNjM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaW9qYm9IRU1QQ3NMb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3ZFlHQ0o3QkN2VSt6NHptcndDTmlpSGs2cGlLSElKSkQ1QzZaMEJqenhNPSIsImFjY291bnRTaWduYXR1cmUiOiJpK3d2amZ1bytpQmJXQmtCWm9nM3V3U3JNNmw0WGdxZ2I1UGJPMjZBOUMxanREdjY4QUZ2Zi9sMzBlMnBJUWhXOTl3em5HUUpWT1BVOGxwN0dDQ3NCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNHNGcTdNdkJPUDR5NEVhTUJSdyt5VUxQRVp2cVdoV0grVUsvNkhVSVhhQmR4eE5hUWI4amZLdHIwLzNrKzVhYnNoVjZOTnZYQUE5TW1lb0xROUxoalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0Nzg3MjkyNjM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjSFdCZ2lld1FyMVBzK001cThBallvaDVPcVlpaHlDU1ErUXVtZEFZODhUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMDQyNTEyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFzbSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
