const fs = require('fs');

module.exports = app => {
    app.get("/api/notes", (req, resp) => {
        let info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        console.log("GET - Notes Data: " + JSON.stringify(info));
        
        resp.JSON(info);
    });

    app.post("/api/notes", (req, resp) => {
        const note = req.body;
        console.log("POST - Notes Data: " + JSON.stringify(note));
        
        let info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        info.push(note);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(info));
        console.log("Note added.")
        
        report.JSON(info);
    });
}