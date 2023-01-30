import { userInfo } from "os";

const model = require("../model/sportModel");


exports.createClass = async (req, res) => {
    try {
      const { sportname, ageclass, time, agelevel, duration, description} = req.body;

      console.log(req.body)

      let sport = await model.findOne({sportname, ageclass})

      if (sport){
        
        await model.findOneAndUpdate({sportname, ageclass},
          {$push:{classes:{time:time}}},{new:true}).exec().then(res.send("Class has been created"));
    
      }
      else{
        console.log(sportname, ageclass, time, agelevel, duration, description)
        sport = new model({sportname, ageclass, agelevel, duration, description});

        await sport.save();

        res.send("Collection for " + sportname + " has been created")

      }


      }
    catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    };
  };
export {};