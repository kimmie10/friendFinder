//LOAD DATA

const formData = require("../data/friendFinder");

//ROUTING
module.exports = function (app) {
    //API GET Requests

    app.get("/api/friends", function (req, res) {
        res.json(formData);
    });

    //API POST Requests

    app.post("/api/friends", function(req, res) {
        formData.push(req.body);
    })
};

