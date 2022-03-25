exports.homeRoute = (req,res)=>{
    res.render('index');
}

exports.addUserRoute = (req,res)=>{
    res.render('add_user');
}

exports.updateUserRout = (req,res)=>{
    res.render('update_user');
}