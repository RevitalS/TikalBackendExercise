const express = require('express');
const app = express();
const service = require('./messageService')
const constants = require('./Constants');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen( 3000, ()=> {
 console.log(`app is running on port 3000`);
})

app.post('/send', (req, res) => {
    if (service.isValidData(req.body, constants.SEND)) {
        service.addMessageToMap(req.body);
        res.sendStatus(200);
    } else {
        res.status(400).json({message: 'invalid input'});
    }
})

app.get('/receive', (req, res) => {
    if (service.isValidData(req.body, constants.RECEIVE)) {
        res.json(service.getMeggaseList(req.body.recipient));
    } else {
        res.status(400).json({message: 'invalid input'});
    }
})

