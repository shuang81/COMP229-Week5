import { Router } from "express";

const router = Router();

//Display Login Page
router.get('/login', DisplayLoginPage);
//Process Login Page
router.post('/login', ProcessLoginPage);


//Display Registration Page
router.get('/register', DisplayRegisterPage);
//Process Registration Page
router.post('/register', ProcessRegisterPage);

// Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;