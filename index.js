// index.js
const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
	// Provide the URL(s) of the website(s) that you want to clone
	// In this example, you can clone the Our Code World website
	urls: ['https://tuyendung.topcv.vn/quy-trinh-tuyen-dung/xem-ung-vien?id=AlZtPTEKDXhaYit4V2lsdwB3tG&signature=6a2c0961596f9d82da0148f82179240b'],
	// Specify the path where the content should be saved
	// In this case, in the current directory inside the ourcodeworld dir
	directory: path.resolve(__dirname, 'nghia_ngao'),
	// Load the Puppeteer plugin
	plugins: [
		new PuppeteerPlugin({
			launchOptions: {
				// If you set  this to true, the headless browser will show up on screen
				headless: true
			} /* optional */,
			scrollToBottom: {
				timeout: 10000,
				viewportN: 10
			} /* optional */
		})
	]
});
