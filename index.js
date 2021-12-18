const express  = require('express')
const axios  = require('axios')

const app = express();
app.use(express.json())

app.get('/', (_, response) =>{
    return response.send("'I'm Working")
})

app.post('/', async function(request, response){

    let tokenResponse = await getToken()
    data ={
      "email": "yuripedro3@gmail.com",
      "assistantId": "1eab40d3-95b0-4593-a8c9-afc6ce1a6458",
      "url": "https://api.us-south.assistant.watson.cloud.ibm.com/instances/fffa018a-9828-4bf0-a2f2-d74786b33d19/v1/workspaces/ad2ee409-dfa6-423c-a3da-89d2ca36e931/message",
      "skillId": "ad2ee409-dfa6-423c-a3da-89d2ca36e931",
      "apiKey": "hi4wVBb6THX7zFkMRQqeSiWmlMAH-hg34BMyiTbZDaH0",
      "submitConfirmation": false
    }
    url_os = "http://172.21.188.211:3000/submit"

    axios.post(url_os, data).then(function(response){
        console.log(response)
    }).catch(function(err){
        console.log(err)
    })
    
});


app.listen(8080, () => console.log("App Inicializado"))
