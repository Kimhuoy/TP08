const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// allow api to access any port
app.use(cors({
    origin: '*',
}))
// parse app/x-www-form-urlecoded
app.use(bodyParser.urlencoded({extended: false}));
// parse app/json
app.use(bodyParser.json());

const router = require('./router');
app.use(router);


app.listen(3000, ()=>{
    console.log("Your app is runing on http://localhost:3000");
})
