const express = require('express')
const app = express()
const {google} =require('googleapis')

var Port = process.env.PORT || 8000

const OAuth2Client = new google.auth.OAuth2(
    "798320351245-qu7pp7hog1b9tibpbv9ib6isc81s7764.apps.googleusercontent.com",
    "LnlHuP2EywC73Gp8rhlUqG-1",
    "https://mysterious-depths-53503.herokuapp.com/google/callback"
)

app.get('/google/callback',(req,res) => {
    const code = req.query.code

    if(code){
        OAuth2Client.getToken(code, function(err, tokens){
            if(err){
                console.log("ERROR IN AUTH", err)
                res.json({
                    err
                })
            }else{
                console.log("SUCCESSFULLY AUTH YEsss",tokens)
                
                res.json({
                    tokens
                })
            }
        })
    }
})

app.get('/',(req,res)=>{
    res.json({
        allRight : "yes"
    })
})


app.listen( Port, () => {
    console.log('server is running',Port)
})