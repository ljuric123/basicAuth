const model = require("../model/userModel")

exports.listAllUsers = async function(req, res) {

    await model.find({}, (err, user) => {
        if (err)
        // send error
            res.send(err);
            console.log(err);
        // user json
        res.json(user);
    }).clone();
};
export {};