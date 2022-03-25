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
exports.find = (req,res)=>{
    Userdb.find()
    .then(user =>{
        res.send(user);
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "Error Ocurd While Finding data"});
    });
}


// // update user
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Update Cannot be empity"});
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body)
    .then(data =>{
        if(!data){
            res.status(404).send(`User by id ${id} not Found`);
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send(`Error While Updating User Data Information`);
    });

}


// // delete user
exports.delete = (req,res)=>{
    const id = req.params.id;
        Userdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:`User by id ${id} is not found`});
            }else{
                res.status(200).send({message:`user is Deleted Sucssuccfully`});
            }
        })
        .catch(err =>{
            res.status(500).send({message:`user not found`});
        });
}