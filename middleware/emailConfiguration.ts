const model = require("../model/userModel");

const nodemailer = require("nodemailer")

const randString = () => {

    const len = 8
    let randStr = ""
    for(let i = 0; i<len; i++){

        const random = Math.floor((Math.random()*10) + 1)
        randStr += random
    }

    return randStr
}

const sendMail = (email, uniqueString) => {
    var Transport = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:"user@gmail.com",
            pass:"password"
        }
    });

    var mailOptions;
    let sender = "VM";
    mailOptions = {

        from: sender,
        to:email,
        subject: "Email confirmation",
        html: `Press <a href=http://localhost:3000/verify/${uniqueString}> here </a> to verify your email. Thank you!`
    };

    Transport.sendMail(mailOptions, function(err, response){
        if (err){
            console.log(err);
        }
        else{
            console.log("message sent")
        }

    });

}

var conf = async(req, res) =>{
    
    const {uniqueString} = req.params

    const mail = await model.findOne({uniqueString: uniqueString})
    if (mail){

      mail.isValid = true

      await mail.save();

      res.send("Thank you for the confirmation!")
     // res.redirect("/authenticate")


    }
    else{
      res.send("User not found")
    }

    

}


module.exports = {
    sendMail,
    randString,
    conf
};