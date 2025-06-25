const db=require('../config/db');

exports.loginuser=(user_name, password, response)=>{
    console.log('model'+user_name+password);
    try{
        const statement=`select * from users where user_name ='${user_name} 'and password = '${password}'`;
        console.log(statement);
        db.query(statement,(err,result)=>{
            console.log(result);
            if(err){
                console.log("Error occured while fetching the user data");
                return response(err,null);
            }
            return response(null,result);

        })
    }
    catch(e){
        console.log(e);
    }
}

exports.registerUser=(user_name, password, result)=>{
    console.log('model'+user_name+password);
    try{

        const statement = `INSERT INTO users (user_name, password, role) VALUES (?, ?, ?)`;

        const values = [user_name, password, 'employee'];

        db.query(statement, values, (err, resp) => {
        if (err) {
            console.error('Insert error:', err);
            return result(err,null);
        } 

            console.log('User Added successfully:', resp);
            return result(null,resp);
        });
    }
    catch(e){
        console.log(e);
    }
}