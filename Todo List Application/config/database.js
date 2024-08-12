//connection of express and mongo using mongoose
//npm i mongoose
 
const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect =()=>
{
mongoose.connect(
        process.env.DATABASE_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then(()=>{
                console.log("successful connection to db")
            })
        .catch((error)=>{
            console.log("issue in db connection");
            console.error(error.message);
            process.exit(1);

        });
 }

 module.exports =dbConnect;
 