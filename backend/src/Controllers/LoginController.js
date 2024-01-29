const mongoose = require("../Database/dbConnect");
const User = require("../Models/UserModel");
const { encrypt, decrypt } = require("../utils/crypto");

exports.login = async (req, res, next) => {
  try{
    const { username, password } = req.body;

  //Initial checks
  if (username === "" || username===undefined || password==="" || password === undefined) {
    return res
      .status(400)
      .json({ errorcode: 400, message: "Fields cannot be empty" });
  }

  const user = await User.findOne({ username: username });
  if (user === null) {
    return res
      .status(404)
      .json({ errorCode: 404, message: "Username doesnot exist" });
  }

  //Validate user
  const isValid = await validateUser(password, user.passwordHash);
  if (isValid) {
    user.passwordHash = undefined;
    return res.status(200).json({
      status: "Success",
      data: {
        user,
      },
    });
  } else {
    return res
      .status(401)
      .json({ errorCode: 401, message: "Invalid credentials" });
  }
  }catch(err){
    return res
      .status(500)
      .json({ errorCode: 500, message: "Unknown error occured" });
  }
};


const validateUser = async (password, passwordHash) => {
  const decryptedPassword = decrypt(passwordHash);
  return password === decryptedPassword;
};
