const model = require("../model/sportModel");


exports.deleteClass = async (req, res) => {
    try {
      const { sportname, ageclass, time} = req.body;
      console.log(req.body)


      await model.findOneAndDelete({sportname, ageclass, "classes.$":time},
      {$set:{classes:{time:time}}}).exec().then(res.send("Class has been deleted"))

    }
    catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    };
  };
export {};