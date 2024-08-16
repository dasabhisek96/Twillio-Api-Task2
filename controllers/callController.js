
const twilio = require('twilio');
const { twilio: { accountSid, authToken, phoneNumber } } = require('../config/keys');

const client = twilio(accountSid, authToken);

exports.initiateCall = (req, res) => {
    const { to } = req.body;

    client.calls.create({
        url: "http://demo.twilio.com/docs/voice.xml",
        to: to,
        from: phoneNumber
    }).then(call => {
        console.log('Call initiated:', call.sid);
        res.send('Call initiated successfully');
    }).catch(error => {
        console.error('Error initiating call:', error);
        res.status(500).send('Error initiating call');
    });
};
