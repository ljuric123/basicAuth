const express = require("express");
const createuser = require("../controllers/signUp");
const deleteuser = require("../controllers/deleteUser");
const updateuser = require("../controllers/updateUser");
const listallusers = require("../controllers/listAllUsers")
const authenticate = require("../controllers/authenticate")
const createclass = require("../controllers/createClass")
const listallclasses = require("../controllers/listAllClasses")
const listallinfo = require("../controllers/listAllInfo")
const updateclass = require("../controllers/updateClass")
const deleteclass = require("../controllers/deleteClass")
const middleware = require("../middleware/middleware")
const mail = require("../middleware/emailConfiguration")
const enrollment = require("../controllers/enrollment")



const router = express.Router();

router.get("/admin/all",middleware.auth, listallusers.listAllUsers); 

router.post("/authenticate", authenticate.authenticate); 

router.post("/signup", createuser.signUp); 

router.get("/verify/:uniqueString", mail.conf);

router.post("/admin/delete",middleware.auth, deleteuser.deleteUser); 

router.post("/admin/update",middleware.auth, updateuser.updateUser); 

router.get("/classes", listallclasses.listAllClasses); 

router.get("/classes/:sport", listallinfo.listAllInfo); 

router.post("/admin/createClass",middleware.auth, createclass.createClass);

router.post("/admin/updateClass",middleware.auth, updateclass.updateClass); 

router.post("/admin/deleteClass",middleware.auth, deleteclass.deleteClass); 

router.post("/enroll", enrollment.enroll)

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
    });






module.exports = router;
export {};