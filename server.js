//dependencies
const path = require('path');
const fs = require('fs');
const express = require('express');

//setup express
const app = express();
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/htmlroutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function(){
    console.log(`Using PORT: ${PORT}`);
})