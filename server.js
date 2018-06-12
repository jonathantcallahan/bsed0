const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(bodyParser.json());

app.route('/')
    .get((req,res) => {res.sendFile(__dirname + '/index.html')});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
