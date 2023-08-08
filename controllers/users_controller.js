const User = require('../models/user');


module.exports.profile = (req, res)=>{
    return res.render('user',{
        title:"user"
       });
}


// render the signUp page
module.exports.signUp = (req, res)=>{
    return res.render('user_sign_up',{
        title: "Codeial | SignUp"
    })
}


// renders the signIn page
module.exports.sigIn = (req, res)=>{
    return res.render('user_sign_in',{
        title: "Codeial | SignIN"
    })
}

// getting the form
module.exports.creat = (req, res)=>{
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email})

    .then(user =>{
        if (user) {
            return res.redirect('back');
        } else {
            return User.create(req.body)
                .then(user => {
                    return res.redirect('/users/sign-in');
                })
                .catch(err => {
                    console.log("error in adding the user to DB on sign-up page", err);
                    return res.redirect('back');
                });
        }
    })

    .catch(err =>{
        console.log("error in finding the user on sign up page");
        
        
    })


        
    
}

// sign in pagr
module.exports.creatSession = (req, res)=>{

}