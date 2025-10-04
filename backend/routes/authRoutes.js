const express = require('express');
const router = express.Router();
const { RegistrationForm , LoginForm, AdminLogin, LogoutUser, getTotalMembers, getActiveMembers } = require('../controllers/authController');



router.post('/signup', RegistrationForm);
router.post('/login', LoginForm);
router.post('/logout', LogoutUser);

router.post('/adminlogin', AdminLogin);
router.get('/total-members', getTotalMembers);
router.get('/active-members', getActiveMembers);


module.exports = router;