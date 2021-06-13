const JSON = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
    app.get("/api/notes", (req, resp) => {
        let info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        console.log("GET - Notes Data: " + JSON.stringify(info));
        
        resp.JSON(info);
    });

    app.post("/api/notes", function (req, res) {
        
        const info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        const notes = req.body;
                
        notes.id = uuidv4(); 
        
        info.push(notes);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(info));
        console.log("Note added.")
        
        res.JSON(info);
    });

    app.delete("/api/notes/:id", (req, resp) => {
        let nID = req.params.id.toString();

        let info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        let newInfo = info.filter( note => note.id.toString() !== nID);

        fs.writeFileSync("./db/db.json", JSON.stringify(newInfo));

        resp.json(newInfo);
    });
};