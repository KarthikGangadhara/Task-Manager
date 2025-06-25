const db = require('../config/db');

exports.createTask = (taskObject,result) =>{
    taskName=taskObject.task_name;
    lastDate=taskObject.last_date;
    assignedTo=taskObject.assigned_to;
    taskDesc=taskObject.task_description;


    const sqlStatement = `INSERT INTO tasks (task_name, last_date, assigned_to, task_description) VALUES (?, ?, ?, ?)`;

    const values = [taskName, lastDate, assignedTo, taskDesc];

    db.query(sqlStatement, values, (err, resp) => {
    if (err) {
        console.error('Insert error:', err);
        return result(err,null);
    } 

        console.log('Task inserted successfully:', resp);
        return result(null,resp);
    });
}
exports.updateTask = (taskObject,result) =>{
taskName=taskObject.task_name;
    lastDate=taskObject.last_date;
    assignedTo=taskObject.assigned_to;
    taskDesc=taskObject.task_description;
    taskId=taskObject.id;
    taskstatus=taskObject.status;


    const sqlStatement = `
    UPDATE tasks
    SET task_name = ?, last_date = ?, assigned_to = ?, task_description = ? , status = ?
    WHERE id = ?
    `;

    const values = [taskName, lastDate, assignedTo, taskDesc, taskstatus , taskId]; 

    db.query(sqlStatement, values, (err, resp) => {
    if (err) {
        console.error('Update error:', err);
        return result(err,null)
    } 
    return result(null,resp);
    });
}

exports.getTasks = (result) =>{
    const sqlStatement = `select * from tasks`;

    db.query(sqlStatement, (err, resp) => {
    if (err) {
        console.error('Update error:', err);
        return result(err,null)
    } 
    return result(null,resp);
    });
}

