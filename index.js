const express = require("express");
const AccessToken = require('twilio').jwt.AccessToken;
const app = express();

app.listen(4000, () => console.log("servidor rodando na porta 4000"));

const VideoGrant = AccessToken.VideoGrant;

// Used when generating any kind of Access Token
const twilioAccountSid = 'ACb37498f7c3cfb048887cc7f437d22050';
const twilioApiKey = 'SK20f33b227c80b3e35ec3130b53072223';
const twilioApiSecret = 'KOUAOQ63Nm8V7UlT7bVCvseAcMDB5PmO';

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
token.identity = 'Matheus_eli';

// Create a Video grant which enables a client to use Video 
// and limits access to the specified Room (DailyStandup)
const videoGrant = new VideoGrant({
    room: 'hello_world_2'
});

// Add the grant to the token
token.addGrant(videoGrant);

// Serialize the token to a JWT string
console.log(token.toJwt());


app.get('/token', (req, res) => {
    res.send(token.toJwt());
});