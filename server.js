


const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json());
  

require("./routes/contactus.routes")(app);


console.log('in server');
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

module.exports = app;
