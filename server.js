//Third-Party Modules
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

//ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Import Mongoose Module
import mongoose, { mongo } from 'mongoose';

//Import Configuration Module
import { MongoURI, Secret } from './config/config.js';

//Import Routes
import indexRouter from './app/routes/index.route.server.js';
import movieRouter from './app/routes/movies.route.server.js'

//Instantiate Express App
const app = express();

//Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo connection Error"));

//Setup Middleware
app.set('views', path.join(__dirname, '../COMP229-WEEK5/app/views'));

//Setup ViewEngine EJS
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

//Use Routes
app.use('/', indexRouter);
app.use('/', movieRouter);

app.listen(3000);