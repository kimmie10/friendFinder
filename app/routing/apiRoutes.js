//LOAD DATA

const formData = require("../data/friends");

//ROUTING
module.exports = function (app) {
    //API GET Requests

    app.get("/api/friends", function (req, res) {
        res.json(formData);
    });

    //API POST Request

    app.post("/api/friends", function (req, res) {
        let compatibleProfile;
        $.each(friends, function (i, val) {
            let scores = friends.scores;
            let newProfile = scores.reduce((totalDiff, int, i) => {
                const diff = Math.abs(num - app[i]);

                totalDiff += diff;
                return totalDiff;
            }, 0);

            if (!compatibleProfile) {
                compatibleProfile = { score: newProfile, val };

            } else {
                if (compatibleProfile.score > val) {
                    compatibleProfile = { score: newProfile, val };
                }
            }
        });

        return compatibleProfile;
    })
};

