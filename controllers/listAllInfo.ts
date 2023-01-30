const model = require("../model/sportModel")

exports.listAllInfo = async function(req, res) {

    let sport = req.params.sports;
    
    await model.find({sport}, (err, user) => {
        if (err)
            res.send(err);
            console.log(err);
        res.json(user);
    }).clone();
};

export {};