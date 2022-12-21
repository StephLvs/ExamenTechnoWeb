// importe les classes
let User = require('../models/userModel');
let Reservation = require('../models/reservationModel');

var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'reservation'

});

// Affiche home page
exports.userReservation = function(req, res){
    
    res.render('home.ejs');
}

exports.userConnect=function(req,res)
{
    req.session.login=req.body.destination;
    let user = {"Destination":req.session.login,"Passangers": 2};
    console.log(req.session.login);
    connection.query("INSERT INTO reservations SET ? ", user,function(error, result){
        if(error) console.log(error);
        res.redirect('/');
});
}

// Encodage des voyageurs
exports.userFormAdd = function(req, res){
    res.render('person.ejs');
}

// Validation des réservations et enregistré dans base des données
exports.userNew = function(req, res){
    connection.query("SELECT * from reservations;", function(error, result){
        if(error) console(error);
        res.render('validation.ejs',{reservation: result}); 
    });
}

// Confirmation du bon enregistrement
exports.userFinal = function(req, res){
   
    res.render('confirmation.ejs');   
}



