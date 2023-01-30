const model = require("../model/sportModel")

exports.listAllClasses = async function(req, res) {

    let sport = req.query.sport;
    let age = req.query.age;
    
    await model.find({sport, age}, (err, user) => {
        if (err)
            res.send(err);
            console.log(err);
        res.json(user[0].classes);
    }).clone();
};

export {};