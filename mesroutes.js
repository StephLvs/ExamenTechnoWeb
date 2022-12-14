let express=require('express');
let router=express.Router();


let userController = require('./controllers/userController');

// LISTE DES ROUTES VERS LES CONTROLEURS

router.get('/', (req,res)=>
{
    // on est redirigé vers /user direct
    res.redirect('/user');
});

router.get('/user', userController.userList);
router.get('/user/add', userController.userFormAdd);
router.post('/user/new', userController.userNew);

router.get('/user/show/:iduser', userController.userShow);
router.get('/user/remove/:iduser', userController.userRemove);
router.get('/user/update/:iduser',userController.userUpdate);



module.exports=router;