var TelegramBot = require("node-telegram-bot-api");
var token = "7306405647:AAF5V1eCZF_dXOvwfwRf2oof6IBEE6SrEXA";
var bot = new TelegramBot(token, { polling: true });
bot.on("message", function (msg) {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "Received your message");
});
