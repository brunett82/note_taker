const path = require('path');

module.exports = app => {
    app.get("/notes", function(req, resp) {
        resp.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    app.get("/", function(req, resp) {
        resp.sendFile(path.join(__dirname, "../public/index.html"));
    })
}


