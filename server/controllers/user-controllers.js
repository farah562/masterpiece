const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");
const pool = require("../db");
const secretKey = "ZhQrZ951";

const registerUser = async (req, res, next) => {
  try {
    const username = req.body.username;
    const phone = req.body.phonenumber;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    const checkEmail = await pool.query(
      "SELECT email FROM users where email = $1",
      [email]
    );

    if (checkEmail.rows.length == 0) {
      let hashedPassword;
      try {
        hashedPassword = await bcrypt.hash(password, 12);
      } catch (err) {
        const error = new HttpError(
          "Could not create account, please try again.",
          500
        );
        return next(error);
      }

      const all_records = await pool.query(
        "INSERT INTO users (username, email, password, phonenumber, role) VALUES($1, $2, $3 , $4 , $5) RETURNING *",
        [username, email, hashedPassword, phone, role]
      );

      //Add JWT token
      let token;
      try {
        token = jwt.sign({ username: username, email: email }, secretKey, {
          expiresIn: "1h",
        });
      } catch (err) {
        const error = new HttpError(
          "Signing up failed, please try again.",
          500
        );
        return next(error);
      }

      all_records.rows[0].token = token;

      res.json(all_records.rows);
    } else {
      const error = new HttpError(
        "Email exist already, please login instead.",
        422
      );
      return next(error);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const userLogin = async (req, res, next) => {
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

exports.registerUser = registerUser;
exports.userLogin = userLogin;
