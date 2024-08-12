//controller for get todos

//import model
const Todo=require("../models/Todo");
 

//getTodo controller  
exports.getTodo= async(req,res)=>
{ 
    try{
        //fetch all todo items from database
        const todos= await Todo.find({ });
        //response update
        res.status(200)
        .json({
                success:true,
                data:todos,
                message:"entire Todo data is fetched ",
        })
    }
    catch(err)
    { 
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        })
    }
}






//get Single Todo controller
//fetch by id

exports.getTodoById = async (req, res) => {
    try{
        //extract todo item by id
        //get parameter by parameters .params
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        //data for given id not found
        if(!todo)
        {   //404 not found error
            return res.status(404).json({
                success:false,
                message:"No data found with given id",
            })
        }
        //data for given id found
        // 200 success
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            success:false,
            data:todo,
            message:"server error",
        });
    }
}
