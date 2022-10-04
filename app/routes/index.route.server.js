import { Router } from "express";
import { displayHomePage, 
        displayAboutPage, 
        displayContactPage, 
        displayProjectsPage, 
        displayServicesPage } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/services', displayServicesPage);
router.get('/projects', displayProjectsPage);
router.get('/contact', displayContactPage);

export default router;