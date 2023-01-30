//var jwt = require("jsonwebtoken");
const model = require("../model/userModel");
const bcrypt = require("bcrypt")

exports.authenticate = async function(req, res) {
try{
    await model.findOne({email: req.body.email}, function(err, user) {

        if (!user) {

            res.json({
                type: false,
                data: "Incorrect email"
            });
        }

        else {
            if (bcrypt.compareSync(req.body.password, user.password) && user.isAdmin == false && user.isValid == true) {

               res.json("Welcome User!"); 

            }
            else if(bcrypt.compareSync(req.body.password, user.password) && user.isAdmin == true && user.isValid == true){

                req.session.admin = true;
                res.json("Welcome Admin!"); 

            }
            else {

                res.json({
                    type: false,
                    data: "Incorrect password"
                });    
            }
        };
    }).clone();
}

catch(err){
    console.log(err);
    res.status(500).send("Something went wrong");
}

};
export {};