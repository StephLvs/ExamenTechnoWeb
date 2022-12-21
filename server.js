let express = require('express');
let app = express();

let session=require('express-session');
app.use(session(
    {
        secret:'my secret',
        resave: false,
        saveUninitialized:true
    }
))

app.use(express.urlencoded({extended:true}));

let router = require('./routes');

app.use(express.static('public'));

app.use('/', router);

app.listen(8000, function(){
    console.log('server is running on port 8000')
});

