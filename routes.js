let express = require('express');

let router = express.Router();

let userController = require('./controllers/userController');

//list des routes vers les contrôlleurs




router.get('/user/add', userController.userFormAdd);

router.get('/', userController.userReservation);
router.post('/',userController.userConnect);
router.post('/persons', userController.userNew);
router.get('/confirmation', userController.userFinal);







module.exports = router;
