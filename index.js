// IMPORT EXPRESS & INITALIZE APP
let express = require('express');
let app= express();

app.use(express.urlencoded({extended:true}));

let router=require('./mesroutes');
app.use('/',router);

app.listen(3000,function()
{
    console.log("Server is running on port 3000")
});