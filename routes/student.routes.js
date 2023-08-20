import express from "express";
const studentRouter = express.Router();
  
import studentController from "../controllers/studentcontrollers.js"

//get all the students
studentRouter.get("/", studentController.findAll)

//find by ID
studentRouter.get("/students/:id", studentController.findById)

//add a student
studentRouter.post("/students", studentController.add)

//update a student by id 
studentRouter.put("/students/:id", studentController.update)

//delete a student by id 
studentRouter.delete("/students/:id", studentController.delete) 

export default studentRouter;