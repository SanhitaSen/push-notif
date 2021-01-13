const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.json())

const publicKey = 'BGhx1o-G_jjVLjWmSxdlYjGRrCPq46pUclijaqn_Gch2cmDyAccUs-L9kCXOzJIp-YCisYKXzoUZqmd6HME3miE';
const privateKey = 'nbydpGRdm38hJ5Cp5eETrHdr7LeAJaemX3rjrTp3gg8';

// webpush.setVapidDetails(
//   "mailto:abc@test.com",
//   publicKey,
//   privateKey
// );

const sub = {};
app.post("/", (req, res, next) => {
    try {
        webpush.setVapidDetails('mailto:example@yourdomain.org', publicKey, privateKey);
        const data = await Noties.find();
        console.log(data);
            const payload = {
                notification: {
                    data: "any", 
                    title: "New push notification!",
                    body: `Check out the latest pushh notification`,
                    vibrate: [100, 50, 100],
                },
            };
            webpush.sendNotification(req.body, JSON.stringify(payload));
        return res.json({ msg: "Notification sent" });
    } catch (error) {
        console.log("inside catch");
        return res.status(400).json({ error });
    }
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));


