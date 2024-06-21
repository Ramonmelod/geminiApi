# Nodejs Gemini Api consulting


- For consulting the gemini API using curl (you need to put your API_KEY): 

```sh
curl   -H 'Content-Type: application/json'   -d '{"contents":[{"parts":[{"text":"give a code in python that makes a request to the endpoint generativelanguage.googleapis.com"}]}]}'   -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=API_Key'
```

- For updating informations about the last chat openeds you can consult the endpoint: 

```sh
curl -X GET "https://api.telegram.org/bot<BOT_TOKEN>/getUpdates"
```
