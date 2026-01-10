/****** core modules import here *******/
import express from "express";


/*******internal files import here *******/
import profileRoutes from './routes/profile/profileRoute.js';


/****** express app initilazation here *******/
const app = express();



/********* Body Data Parse **********/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/********** Profile Routes Define Here *********/
app.use("/", profileRoutes);



// health check
app.get("/", (req, res) => {
    res.status(200).json({
        status: "OK",
        service: "profile service",
        uptime: process.uptime(),
    });
});



/******* Export the module ******/
export default app;
