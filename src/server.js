import environment from "./config/env.js";
import app from "./app.js";
import connectDB from './config/db.js';


/******** PORT Define *******/
const PORT = process.env.PROFILE_SERVICE_PORT || 5002;


/********** Connect to Database Here **********/
connectDB();




/*********** Start The Server ***********/
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port: ${PORT} in ${environment} mode`);
  });