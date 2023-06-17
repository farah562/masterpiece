const express = require("express");
const adminControllers = require("../controllers/admin-controllers");

const router = express.Router();

router.get("/get-users", adminControllers.getUsers);
router.patch("/update-user-role/:userId", adminControllers.updateUserRole);
router.delete("/delete-user/:userId", adminControllers.deleteUser);

module.exports = router;
