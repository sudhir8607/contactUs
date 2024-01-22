const myModule = require("../model/contactus.model.js");
const ContactUs = myModule.ContactUs;

exports.create = (req, res) => {
    // Validate the request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }
   
    // Create a ContactUs instance
    const contactUs = new ContactUs({
         name: req.body.name,
         email: req.body.email,
         subject: req.body.subject,
         message: req.body.message
    });
   
    // Save ContactUs entry in the database

    ContactUs.create(contactUs, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the ContactUs entry."
            });
        } else {
            res.send(data);
        }
    });
};
