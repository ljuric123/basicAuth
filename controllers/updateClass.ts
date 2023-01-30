import mongoose from "mongoose";
import { json } from "stream/consumers";

const model = require("../model/sportModel");


exports.updateClass = async (req, res) => {
    try {
      const { sportname, ageclass, time, newtime, id} = req.body;
      console.log(req.body)


    //  await model.findOneAndUpdate({sportname, ageclass, "classes.$.time":time},
    //  {$set:{classes:{time:newtime}}}).exec().then(res.send("Class has been updated"))
        
        await model.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)},
        {$set:{time:newtime}}).exec().then(res.send("Class has been updated"))

    }
    catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    };
  };
export {};