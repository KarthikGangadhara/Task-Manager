const taskModel = require('../model/taskmodel');

exports.createTask = (request,response) =>{
    const body=request.body;
    try{
        taskModel.createTask(body,(err,result) =>{
            if(err){
                response.send({
                    "code":"400",
                    "message":err
                })
            }
            else{
                response.send({
                    "code":"200",
                    "message":"Task Created Successfully",
                    "data":result
                })
            }
        })
    }
    catch(e){
        console.log(e);
    }
}

exports.getTasks = (request,response) =>{
    try{
        taskModel.getTasks((err,result) =>{
            if(err){
                response.send({
                    "code":"400",
                    "message":err
                })
            }
            else{
                response.send({
                    "code":"200",
                    "message":"Task Fetched Successfully",
                    "data":result
                })
            }
        })
    }
    catch(e){
        console.log(e);
    }
}
exports.updateTask = (request,response) =>{
    const body=request.body;
    const id = request.params.id;
    try{
        taskModel.updateTask(body,(err,result) =>{
            if(err){
                response.send({
                    "code":"400",
                    "message":err
                })
            }
            else{
                response.send({
                    "code":"200",
                    "message":"Task Updated Successfully",
                    "data":result
                })
            }
        })
    }
    catch(e){
        console.log(e);
    }
}