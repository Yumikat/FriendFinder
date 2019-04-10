// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var companion = require("../data/friends");
// var totalScore = 100;
var totalScore = 0;
var bigNumber = 1000;
var friendScore = [];

// var path = require("path");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(companion);
    });

    app.post("/api/friends", function (req, res) {
        for (var i = 0; i < companion.length; i++) {
            var difference = 0;
            for (var j = 0; j < companion[i].scores.length; j++) {
                difference = Math.abs(companion[i].scores[j] - req.body.answers[j]);
                totalScore += difference;
                var currentFriend = companion[i].animal;
            };
            friendScore.push(totalScore);
            console.log("Current friend is: " + currentFriend + " with a score of " + totalScore + ".");
            totalScore = 0;
            for(var x = 0; x < 5; x++) {
            if (friendScore[x] < bigNumber) {
                bigNumber = friendScore[x];
                var bestFriend = companion[x].animal;
                var bestPhoto = companion[x].photo;
            }};
        }
        res.json({
            bestFriend: bestFriend,
            bestPhoto: bestPhoto
    });
});
}
