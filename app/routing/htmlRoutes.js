// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
var path = require("path");
module.exports = function (app) {
    app.get("/:default", function (req, res) {
        var typed = req.params.default;
        if (typed != "survey") {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        } else {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        }
    });

    // app.use(function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}