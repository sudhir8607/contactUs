module.exports = app => {
  const contactUs = require("../controller/contactus.controller");

  app.post("/contact", contactUs.create);
      

  
   
}; 