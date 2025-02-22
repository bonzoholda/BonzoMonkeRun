const TelegramBot = require('node-telegram-bot-api');
const token = '7927794384:AAHI-QxkJCB3DB_5N5Qhifz6s5rKt4Pvr9I'; // Replace with your token
const bot = new TelegramBot(token, { polling: true });
const gameUrl = 'https://bonzoholda.github.io/BonzoMonkeRun/'; // Replace with your GitHub Pages URL

bot.onText(/\/start/, (msg) => {
    bot.sendGame(msg.chat.id, 'BonzoMonkeRun');
});

bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.game_short_name === 'BonzoMonkeRun') {
        bot.answerCallbackQuery(callbackQuery.id, { url: gameUrl });
    }
});
