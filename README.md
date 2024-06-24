# Node.js Gemini Api consulting

<div>
<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="logo node" width="200" height="auto"> 
</div>

## Used Technologies:

- `Telegram`
- `Gemini`

## Basic Telegram gemini consulting

- This project enables your telegram bot to consulte Gemini AI for you directly in the telegram chat

Info: This project is still under construction!

## Get started:

### Downloading the project and Installing dependencies

- Download this project using the command bellow:

```sh
git clone https://github.com/Ramonmelod/geminiApi.git ~/Projects
```

PS: Make sure you already have git install on your computer

- In the directory `~/Projects/geminiApi` run the command below to install the dependencies:

```sh
npm install
```

PS: Make sure you have node installed on your computer

### Create a file .env the following variables in the diretory geminiAPI:

```
API_KEY=PUT_YOUR_API_GEMINI_KEY_HERE
BOT_TOKEN=PUT_YOUR_BOT_TOKEN
CHAT_ID=PUT_YOUR_CHAT_ID_HERE
```

## Tips:

- For consulting the gemini API using curl (you need to put your API_KEY):

```sh
curl   -H 'Content-Type: application/json'   -d '{"contents":[{"parts":[{"text":"give a code in python that makes a request to the endpoint generativelanguage.googleapis.com"}]}]}'   -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=API_Key'
```

- For updating informations about the last chat openeds you can consult the endpoint:

```sh
curl -X GET "https://api.telegram.org/bot<BOT_TOKEN>/getUpdates"
```

## Author

- Ramon Melo — Linkedin: [/in/ramonmelod](https://www.linkedin.com/in/ramonmelod/)
