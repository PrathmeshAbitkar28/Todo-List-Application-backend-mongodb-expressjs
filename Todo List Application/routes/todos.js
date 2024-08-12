const express=require("express");
 
const router = express.Router();
//import controller createTodo
const {createTodo} =require("../controllers/createTodo");
//import comtroller getTodo
// 2 controllers {getTodo,getTodoById}
const { getTodo ,getTodoById } = require("../controllers/getTodo");
//update
const {updateTodo}=require("../controllers/updateTodo");
//delete
const {deleteTodo}=require("../controllers/deleteTodo");




 

//define API routes
//path mapped to controller createTodo
//router.post("/path", controller);
router.post("/createTodo", createTodo);
//map controller with route
router.get("/getTodo",getTodo);
//id will get stored in  (:id).  id of saved todos in datatabase 
router.get("/getTodo/:id",getTodoById);
//update
router.put("/updateTodo/:id",updateTodo);
//delete
router.delete("/deleteTodo/:id",deleteTodo);





module.exports = router;

 