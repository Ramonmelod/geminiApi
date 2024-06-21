const axios = require("axios");
const dotenv = require("dotenv").config();

//implement the fetching code to get information about the chat in: curl -X GET "https://api.telegram.org/bot<HERE_BOT_TOKEN>/getUpdates"

async function sendTelegramMessage(botToken, chatId, message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: message,
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

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const message = "New test";

sendTelegramMessage(botToken, chatId, message);