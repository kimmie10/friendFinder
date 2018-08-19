//DEPENDENCIES
//npm packages

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Express server created for node
let app = express();

//Port set
let PORT = process.env.PORT || 3000;

//Data parsing for Express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Router directions

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});


