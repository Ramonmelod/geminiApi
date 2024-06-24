const axios = require("axios");
const dotenv = require("dotenv").config();
const { geminiRequester } = require("./gemini");

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

async function sendTelegramMessage(botToken, chatId, message) {
  // function that sends the
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: await geminiRequester(message),
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Message sent successfully");
    } else {
      console.log("Failed to send message:", response.status, response.data);
    }
  } catch (error) {
    console.error(
      "Error sending message:",
      error.response ? error.response.data : error.message
    );
  }
}

const query = async () => {
  // function that catches the last message to the API bot
  const search = await fetch(
    `https://api.telegram.org/bot${botToken}/getUpdates`
  );
  const data = await search.json();
  const text = data.result[data.result.length - 1].message.text;

  const timeLastMessage =
    data.result[data.result.length - 1].message.date * 1000; //this multiplications trasforms from seconds to miliseconds

  const timeNow = Date.now();

  return { text, timeLastMessage, timeNow, data };
};

query().then(({ text, timeLastMessage, timeNow, data }) => {
  // here is called the function sendTelegramMessage. The two first arguments comes from the .env file and the last argument (text) comes from the query() function
  /*console.log("timeLastMessage: " + timeLastMessage);
  console.log("timeNow: " + timeNow);
  console.log("last question in Telegram: " + text);
  console.log("data.result.lenght: " + data.result.length);*/
  if (data.result.length === 0) {
    throw new Error("No messages found");
  } else if (timeNow - 10000 < timeLastMessage) {
    sendTelegramMessage(botToken, chatId, text);
  } else {
    console.log("no message in the last 10 seconds");
  }
});
