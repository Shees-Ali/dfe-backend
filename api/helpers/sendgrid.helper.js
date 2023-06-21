const sgMail = require("@sendgrid/mail");
const sgClient = require("@sendgrid/client");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
    
}