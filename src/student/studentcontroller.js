var studentService = require('./studentservice');

var createStudentControllerFn = async (req, res) =>
{
    try
    {
    console.log(req.body);
    var status = await studentService.createStudentDBService(req.body);
    console.log(status);

    if(status) {
        res.send({"status":true, "message":"User created successfully"});
    } else {
        res.send({"status":false, "message":"Error creating user"});
    } 
}
catch(err)   
{
    console.log(err);
} 
}   

var loginStudentControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await studentService.loginStudentDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg});
        } else {
            res.send({ "status": false, "message": result.msg});
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false,"message": error.msg});
    }    
}    


module.exports = {createStudentControllerFn, loginStudentControllerFn};