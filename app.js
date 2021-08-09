const cron = require('node-cron');
const express = require('express');
const https = require('https');
const fs = require('fs');
const moment = require('moment');
const PORT = process.env.PORT || 4001;

const app = express();

let rawjson = fs.readFileSync('./websites.json');
let websites = JSON.parse(rawjson);

// Set up cron in order to send GET request constantly
cron.schedule('0,20,40 * * * * *', () => {
	
	for (let website in websites) {
		console.log(`making http GET request to ${website} every 20 seconds`);
		https.get(websites[website], (res) => {
			console.log(`Status code: ${res.statusCode}`);
			console.log(`Content-type: ${res.headers['content-type']}`);
			res.setEncoding('utf8');

			// Create Write stream to destination file
			const writeStream = fs.createWriteStream(`./html_files/${website}.txt`);
			writeStream.write(`Detection made on: ${moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}\n`);
			
			res.on('data', (chunck) => {
				writeStream.write(chunck);	
			});
			res.on('end', () => {
				console.log('No more data in response.');
				writeStream.end();
			});
		});
	}

});


app.listen(PORT, () => {
	console.log(`Server is listening to port ${PORT}`);
});

app.get('/', (req, res, next) => {
	console.log('GET request received');
	res.send('Support Plusidentity!!');
})