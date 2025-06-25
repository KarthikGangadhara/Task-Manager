const userModel = require('../model/usermodel');

exports.loginController = (request,response) =>{
    const user_name=request.body.userName;
    console.log(user_name);
    const password = request.body.password;
    try{
        userModel.loginuser(user_name,password,(err,result) =>{
            if(err){
                response.send({
                    "code":"400",
                    "message":err
                })
            }
            else if(result.length==0){
                response.send({
                    "code":"401",
                    "message":"User Data Not Found"
                })
            }
            else{
                response.send({
                    "code":"200",
                    "message":"Login Successfull",
                    "data":result
                })
            }
        })
    }
    catch(e){
        console.log(e);
    }
}

exports.registerUser = (request,response) =>{
    const user_name=request.body.userName;
    console.log(user_name);
    const password = request.body.password;
    try{
        userModel.registerUser(user_name,password,(err,result) =>{
            if(err){
                response.send({
                    "code":"400",
                    "message":err
                })
            }
            else{
                response.send({
                    "code":"200",
                    "message":"User Registered Successfully",
                    "data":result
                })
            }
        })
    }
    catch(e){
        console.log(e);
    }
}