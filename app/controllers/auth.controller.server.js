import  express  from "express";
import passport from "passport";

//Need to include the User Model for authentication
import User from '../models/user.js';

//Import DisplayName Utility method
import { UserDisplayName } from '../utils.js';

//Display functions
export function DisPlayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', title: 'Login')
    }
}