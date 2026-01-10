import express from "express";
import { createProfileInfo, deleteProfileInfo, getAllUserProfileInfo, getSingleUserProfileInfo, updateProfileInfo } from '../../controllers/profile/profileController.js';


const router = express.Router();


router.get("/allproducts", getAllUserProfileInfo);

router.get("/singleProduct/:id", getSingleUserProfileInfo);

router.post("/createProduct", createProfileInfo);

router.put("/updateProduct/:id", updateProfileInfo);

router.delete("/deleteProduct/:id", deleteProfileInfo);



export default router;