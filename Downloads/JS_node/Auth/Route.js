const express = require("express")
const router = express.Router()
const { register } = require("./Auth")
router.route("/register").post(register)
module.exports = router;

app.use("/api/Auth", require("./Auth/route"))



const { register, login } = require("./Auth");

router.route("/login").post(login);
module.exports = router;

const { register, login, update } = require("./Auth");

router.route("/update").put(update);

const { register, login, update, deleteUser } = require("./Auth");
router.route("/deleteUser").delete(deleteUser);