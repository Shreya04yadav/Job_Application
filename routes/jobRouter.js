import express from "express";
import { getAllJobs, getMyJobs, updateJob ,postJob, deleteJob} from "../controller/jobcontroller.js";
import {isAuthenticated} from "../middlewares/auth.js";
const router = express.Router();
router.get("/getall",getAllJobs)
router.post("/post",isAuthenticated,postJob);
router.get("/getmyjobs",isAuthenticated,getMyJobs);
router.put("/update/:id",isAuthenticated,updateJob);
router.delete("/delete/:id",isAuthenticated,deleteJob);
export default router;