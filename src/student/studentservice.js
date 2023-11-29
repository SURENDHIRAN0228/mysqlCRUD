var studentModel = require('./studentmodel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService =(studentDetails) => {


    return new Promise(function myFn(resolve, reject) {
        
        var studentModelData = new studentModel();

        studentModelData.name = studentDetails.name;
        studentModelData.email = studentDetails.email;
        studentModelData.password = studentDetails.password;
        var encrypted = encryptor.encrypt(studentDetails.password);
        studentModelData.password = encrypted;

        studentModelData.save(function resultHandle(error, result) {

            if (error) {
                reject(false);
            }else {
                resolve(true);
            }
        });

    });

}

module.exports.loginStudentDBService = (studentDetails) =>  {
    return new Promise(function myFn(resolve, reject)
    
    {
        studentModel.findOne({ email: studentDetails.email},function getresult(errorvalue, result)
        {
            if(errorvalue)
            {
                reject({status: false, msg: "Invalid Data"});
            }
            else
            {
                if(result !=undefined && result !=null)
                {
                   var decrypted = encryptor. decrypt(result.password);

                   if(decrypted== studentDetails.password)
                    { 
                        resolve({status: true, msg: "Student Validated Successfully"});
                    }
                    else
                    {
                        reject({status: false,msg: "Student validated failed"});
                    }
                }
                else
                {
                    reject({status: false,msg: "Student Error Detailssss"});
                }    
            }
        });
    });
}
