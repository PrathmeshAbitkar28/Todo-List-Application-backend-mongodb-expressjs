//server created
const express= require("express");
const app = express();


//load config form env file
// we need port here to listen
require("dotenv").config();
//if port not come then use 4000 port 
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})



 
//middleware to parse req body...............................
app.use(express.json());




//define route......................................
//import route for todo API
//create todo route
const todoRoutes=require("./routes/todos")
//mount the todo API routes
//for versioning
app.use("/api/v1",todoRoutes);




// database connection.................................
const dbConnect=require("./config/database");
dbConnect();





//default route........................................
app.get("/", (req,res)=>{
    res.send(`<h1>this is homepage body</h1>`);
})