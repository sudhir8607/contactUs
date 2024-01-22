


const { sql: connection } = require("./db.js");

const ContactUs = function (contactus) {
   this.name = contactus.name;
   this.email = contactus.email;
   this.subject = contactus.subject;
   this.message = contactus.message;
}

ContactUs.create = async (loginuser, result) => {
   var datetime = new Date();
   let final_res;
   let resp;
   let stmt;

   stmt = `INSERT INTO contactus (name,email,subject,message)
   VALUES ('${loginuser.name}','${loginuser.email}','${loginuser.subject}','${loginuser.message}')`;

   connection.query(stmt, loginuser, (err, res) => {
       if (err) {
           result(null, err);
           return;
       }

       if (res.affectedRows == 0) {
           result({ kind: "not_found" }, null);
           return;
       }

       result(null, res);
   })
}

module.exports = {ContactUs};

