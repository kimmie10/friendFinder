//DEPENDENCIES
//npm packages

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Express server created for node
let app = express();

//Port set
let PORT = process.env.PORT || 8080;

//Data parsing for Express app
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Router directions

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


