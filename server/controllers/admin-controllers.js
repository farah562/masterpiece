const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");
const pool = require("../db");
const secretKey = "ZhQrZ951";

const adminLogin = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let checkEmail;

  try {
    checkEmail = await pool.query("SELECT * FROM users where email = $1", [
      email,
    ]);

    if (checkEmail.rows.length == 0) {
      const error = new HttpError(
        "Invalid credentials, could not log you in.",
        403
      );
      return next(error);
    }

    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(
        password,
        checkEmail.rows[0].password
      );
    } catch (err) {
      const error = new HttpError(
        "Could not log you in, please check your credentials and try again....",
        500
      );
      return next(error);
    }
  } catch (err) {
    if (!isValidPassword) {
      const error = new HttpError(
        "Invalid credentials, could not log you in.",
        403
      );
      return next(error);
    }
  }

  //Add JWT token
  let token;
  try {
    token = jwt.sign({ email: email }, secretKey, {
      expiresIn: "1h",
    });
  } catch (err) {
    const error = new HttpError("Logging in failed, please try again.", 500);
    return next(error);
  }

  checkEmail.rows[0].token = token;
  res.json(checkEmail.rows);
};

const getUsers = async (req, res, next) => {
  try {
    const all_records = await pool.query("SELECT * FROM users");
    res.json(all_records.rows);
  } catch (err) {
    const error = new HttpError(
      "Could not fetch users list, please try again.",
      500
    );
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  let userId = req.params.userId;
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [
      userId,
    ]);

    if (result) res.json({ userDeleted: true });
  } catch (err) {
    const error = new HttpError(
      "Could not delete user, please try again.",
      500
    );
    return next(error);
  }
};

const updateUserRole = async (req, res, next) => {
  let userId = req.params.userId;
  let newRole = req.body.role;

  try {
    const result = await pool.query(
      "UPDATE users SET role = $1 WHERE id = $2",
      [newRole, userId]
    );
    if (result) res.json({ roleUpdated: true });
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Could not update user role, please try again.",
      500
    );
    return next(error);
  }
};

exports.adminLogin = adminLogin;
exports.getUsers = getUsers;
exports.updateUserRole = updateUserRole;
exports.deleteUser = deleteUser;
