import { db } from "../database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = (req, res) => {
  //CHECK EXISTING USER
  const registerQuery = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(registerQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(400).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const Login = (req,res) => {
    const loginQuery = "select * from users where username = ? "
    db.query(loginQuery,[req.body.username], (err,data) => {
      if (err) return res.status(400).json(err);   
      if(data.length === 0) return res.status(404).json("Username Not Found") 
      
      const validPasswordCheck = bcrypt.compareSync(req.body.password, data[0].password)
      if(!validPasswordCheck) return res.status(400).json("Wrong username or password")

      const token = jwt.sign({ id: data[0].user_id }, "jwtkey");
      const { password, ...other } = data[0];
      res.cookie("access_token", token, {
          httpOnly: true,
        }).status(200).json(other);
    });
}

export const Logout = (req,res) => {
    res.clearCookie("access_token", {
      sameSite:"none",
      secure:true
    }).status(200).json("User Log Out");
}