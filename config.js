const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
DATABASE_URL: process.env.DATABASE_URL === undefined ? 'none' : process.env.DATABASE_URL,
ABHI_API: 'https://abhi-api-khje.onrender.com',
AUTO_MSG_READ : process.env.AUTO_MSG_READ === undefined ? 'false' : process.env.AUTO_MSG_READ,
MODERATORS : process.env.MODERATORS === undefined ? "919547261290,919074692450" : process.env.MODERATORS ,
SESSION_ID : process.env.SESSION_ID === undefined ? 'RAHUL-MD~kIQllSiS#zR05yrqx4ZJ7I7wD7H_8NNDE7g0KdkmGl2N2q_LwP0U' : process.env.SESSION_ID,
ANTI_BAD: process.env.ANTI_BAD === undefined ? 'false' : process.env.ANTI_BAD,
MAX_SIZE: 2000,
WORK_TYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
ALIVE_IMG: process.env.ALIVE_IMG === undefined ? 'https://telegra.ph/file/3569f630b0ca83652b49e.jpg' : process.env.ALIVE_IMG,
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'I m alive now!' : process.env.ALIVE_MSG,
AUTO_REACT: process.env.AUTO_REACT === undefined ? 'true' : process.env.AUTO_REACT,    
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX ,
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,
ANTI_BOT: process.env.ANTI_BOT === undefined ? 'false' : process.env.ANTI_BOT ,
INBOX_USER: process.env.INBOX_USER === undefined ? '919083366564' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '94767438882' : process.env.BANNED_USER ,

};
