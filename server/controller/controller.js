var Userdb = require('../model/model');

// create and save user
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"content cannot be empity"});
        return;
    }

    // new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    // save the user in the database
    user
    .save(user)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "Some Error Ocured While Creating User"});
    });
}
// //  find all user
// exports.find = (req,res)=>{

// }


// // update user
// exports.update = (req,res)=>{

// }


// // delete user
// exports.delete = (req,res)=>{

// }