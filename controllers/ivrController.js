
const twilio = require('twilio');
const axios = require('axios');

exports.handleIvr = (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();

    twiml.play('https://1drv.ms/u/s!AssNWNmUSYNtjv9VSb0TQm5cQ8_YQQ?e=ubsLY3');
    twiml.gather({
        action: '/gather',
        method: 'POST',
        numDigits: 1,
    });

    res.type('text/xml');
    res.send(twiml.toString());
};

exports.handleGather = (req, res) => {
    const digit = req.body.Digits;

    if (digit === '1') {
        sendInterviewLink(req.body.From);
    }

    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say('Thank you for your response. Goodbye!');
    twiml.hangup();

    res.type('text/xml');
    res.send(twiml.toString());
};

function sendInterviewLink(phoneNumber) {
    axios.post('https://v.personaliz.ai/', {
        id: '9b697c1a',
        uid: 'fe141702f66c760d85ab',
        mode: 'test',
        phoneNumber: phoneNumber,
    }).then(response => {
        console.log('Interview link sent successfully');
    }).catch(error => {
        console.error('Error sending interview link:', error);
    });
}
