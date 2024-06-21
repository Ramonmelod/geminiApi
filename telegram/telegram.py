import requests

def send_telegram_message(bot_token, chat_id, message):
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload = {
        'chat_id': chat_id,
        'text': message
    }
    headers = {
        'Content-Type': 'application/json'
    }
    
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        print('Message sent successfully')
    else:
        print('Failed to send message:', response.status_code, response.text)

if __name__ == '__main__':
    bot_token = 'THE_BOT_TOKEN_HERE'
    chat_id = 'CHAT_ID_HERE'  # Replace with your user ID
    message = 'Hello from your bot!'
    
    send_telegram_message(bot_token, chat_id, message)

