const usermodel = require("../model/userModel");
const sportmodel = require("../model/sportModel")
const mongoose = require("mongoose");


exports.enroll= async (req, res) => {
    try {
      const { classOne, classTwo, email } = req.body;

        await usermodel.findOneAndUpdate({ email },
            {$push:{classOne:classOne, classTwo:classTwo}}).exec();
      
            //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        await sportmodel.findOneAndUpdate({"_id": mongoose.Types.ObjectId("63bba430b5ed6b581de586c4"), "classes._id":mongoose.Types.ObjectId("63bbcc0578b72db3123db04e")},
              {$push:{"users":email}}).then(res.send("a"));

    }
    
    catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    };
  };

  export {};
