import telebot
import os

TOKEN = os.getenv("7976474395:AAHY5dp6MO8BAgonWGIJyDtf0uemUCl4YEA")
bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def start(msg):
    bot.reply_to(msg, "البوت يخدم 24/24 على Railway!")

@bot.message_handler(func=lambda m: True)
def reply_all(msg):
    bot.reply_to(msg, "مرحبا! البوت شغّال!")

bot.infinity_polling(skip_pending=True)

