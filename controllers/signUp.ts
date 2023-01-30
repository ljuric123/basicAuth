const model = require("../model/userModel");
const bcrypt = require("bcrypt");
const mailConfiguration = require("../middleware/emailConfiguration")


exports.signUp = async (req, res) => {
    try {
      const { password, email, isAdmin } = req.body;

      let user = await model.findOne({ email });

      if (user)
        return res.status(400).send("User already registered.");
      

      const uniqueString = mailConfiguration.randString();
      const isValid = false;

      user = new model({ password, email, isAdmin, uniqueString, isValid });
      
      user.password = await bcrypt.hash(user.password, 10);

      await user.save();

      mailConfiguration.sendMail(email)

      res.send("Please confirm your email address!");


    }
    catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    };
  };

  export {};
