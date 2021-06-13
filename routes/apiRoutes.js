const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
    app.get("/api/notes", (req, resp) => {
        let info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        console.log("GET - Notes Data: " + JSON.stringify(info));
        
        resp.JSON(info);
    });

    app.post("/api/notes", (req, resp) => {
        const note = req.body;
        console.log("POST - Notes Data: " + JSON.stringify(note));
        
        note.id = uuidv4();

        let info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        info.push(note);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(info));
        console.log("Note added.")
        
        report.JSON(info);
    });

    app.delete("/api/notes/:id", (req, resp) => {
        let nID = req.params.id.toString();

        let info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        let newInfo = info.filter( note => note.id.toString() !== nID);

        fs.writeFileSync("./db/db.json", JSON.stringify(newInfo));

        response.json(newInfo);
    });
};