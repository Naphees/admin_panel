import AuthController from "../controllers/auth.controller.js";

import express from "express";

const router = express.Router();

// All auth routes 
// register route
router.post('/register',AuthController.registerController);
// login route
router.post('/login',AuthController.loginController);
// logout route
router.post('/logout',AuthController.logoutController);

// forget-password route
router.post('/forget-password',AuthController.forgetPasswordController);

// reset - password route
router.post('/reset-password',AuthController.resetPasswordController);



//export router
export default router;