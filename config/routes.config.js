const router = require('express').Router();
const miscController = require('../controllers/misc.controller');
const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/users.controller');
const dogController = require('../controllers/dog.controller');

const authMiddleware = require('../middlewares/auth.middleware');
const upload = require('./multer.config');


router.get('/', miscController.getHome);

  

/* Auth */

router.get('/register', authMiddleware.isUnauthenticated, authController.register);
router.post('/register', authMiddleware.isUnauthenticated,upload.array('avatar'), authController.doRegister);

// router.get(/);

router.get('/login', authMiddleware.isUnauthenticated, authController.login);
router.post('/login', authMiddleware.isUnauthenticated, authController.doLogin);

router.get('/logout', authMiddleware.isAuthenticated, authController.logout);

router.get('/login/google', authMiddleware.isUnauthenticated, authController.loginGoogle);
router.get('/authenticate/google/cb', authMiddleware.isUnauthenticated, authController.doLoginGoogle);

/* User */
router.get('/profile', authMiddleware.isAuthenticated, usersController.profile);

/* Dog */
router.get('/addDog', authMiddleware.isAuthenticated, dogController.create);
router.post('/addDog', authMiddleware.isAuthenticated, upload.array('avatar'), dogController.doCreate);




module.exports = router;