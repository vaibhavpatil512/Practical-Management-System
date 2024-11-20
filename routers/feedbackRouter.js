import {createAdmin,createTeacher,createStudent,getAllUsers,getAllTeacher,getAllStudent, getAllAdmin} from "../controller/Usercontroller.js";
import { createSubject,getAllSubject } from "../controller/SubjectController.js";
import { createPractical,getAllPractical} from "../controller/PracticalController.js";
import { enrollStudent } from "../controller/EnrollController.js";
import { isAdmin,isAdminOrTeacher,isTeacher } from "../middleware/Middleware.js";
import express from "express";

const router  = express.Router();

router.post("/admin/create",createAdmin);
router.post("/teacher/create",createTeacher);
router.post("/student/create",createStudent);
router.get("/userall/get",isAdmin,getAllUsers);
router.get("/admin/get",isAdmin,getAllAdmin);
router.get("/AllTeacher/get",isAdmin,getAllTeacher);
router.get("/AllStudent/get",isAdminOrTeacher,getAllStudent);
router.post("/subject/create",isAdmin,createSubject);
router.post("/practical/create",isTeacher,createPractical);

router.get("/subject/get",getAllSubject);
router.post("/enroll/student",enrollStudent);
router.get("/pratical/get",getAllPractical);

export default router;



