// search by mail - id?
const model = require("../model/userModel");
const bcrypt = require("bcrypt");

exports.updateUser = async (req, res) => {

        try {

          const { email, isAdmin, newmail, newpass} = req.body;
          let user = await model.findOne({ email });

          // new mail/password
        
          user.mail = newmail;
          user.password = await bcrypt.hash(newpass, 10);
          user.isAdmin = isAdmin;
          await user.save();
        
          res.send(user);

        
        } 
        catch (err) {
          console.log(err);
          res.status(500).send("Something went wrong");
        }
      };
      export {};