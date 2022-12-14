// UTILISE CE QU'ON A EXPORT DE MODELS
let User = require('../models/userModel')

// Liste dico
let userList= [];

// METHODE SUR LE MODELE
exports.userList= function(req,res)
{
    // let user= new User("Reyes","Steph");
    // userList.push(user);

    // PARAMS USERS de userList
    res.render('userList.ejs',{users:userList});
};

exports.userFormAdd =function(req,res) 
{
    res.render('userAdd.ejs',{iduser:'-1', lastname:"", firstname: "" });
};

// Retour au formulaire avec user
exports.userUpdate=function(req,res)
{
    let iduser= req.params.iduser;
    res.render('userAdd.ejs',{iduser:iduser , lastname: userList[iduser]["lastname"], firstname: userList[iduser]["firstname"] });

};

exports.userNew=function(req,res)
{
    let iduser = req.body.iduser;
    let lastname=req.body.lastname;     // body = texte dc declare ds index urlencoded
    let firstname=req.body.firstname;

    //pas -1 = modification
    if(iduser>=0)
    {
        userList[iduser]["lastname"]=lastname;
        userList[iduser]["firstname"]=firstname;
    }
    else {
        
        let user =new User(lastname,firstname);
        userList.push(user);
    }
    

    res.redirect('/user');
};



exports.userShow=function(req,res)
{
    let iduser= req.params.iduser;
    //res.send('Hello '+ iduser);

    //Hello a la valeur de la clé iduser de la liste de dico
    res.send('Hello '+ userList[iduser]["firstname"]); 
}
exports.userRemove=function(req,res)
{
    let iduser=req.params.iduser
    userList.splice(iduser,1);

    res.redirect('/user');
}

