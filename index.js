const express  = require('express')
const axios  = require('axios')

const app = express();
app.use(express.json())

let config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json" 
    },

    params:{
        "grant_type":"urn:ibm:params:oauth:grant-type:apikey",
        "apikey": "your_apikey"
    }
  }

app.get('/', (_, response) =>{
    return response.send("'I'm Working")
})



function getToken(){
    url = "https://iam.cloud.ibm.com/identity/token"
    
    token = axios.post(url, null, config)
    return token
}


app.post('/', async function(request, response){

    let tokenResponse = await getToken()
    data = {
       email_addr: "your_email@email.com",
       wml_url: "wml_url",
       iam_token: String(tokenResponse.data.access_token),
       submit_confirmation: true,
    }
    url_os = "http://172.21.86.186:5000/submit"

    axios.post(url_os, data).then(function(response){
        console.log(response)
    }).catch(function(err){
        console.log(err)
    })
    
});


app.listen(8080, () => console.log("App Inicializado"))
