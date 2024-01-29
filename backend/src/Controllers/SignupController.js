const mongoose = require("../Database/dbConnect");
const AppError = require("../Exceptions/AppError");
const User = require("../Models/UserModel");
const { v4: uuidv4 } = require("uuid");
const { encrypt, decrypt } = require("../utils/crypto");

exports.signup = async (req, res, next) => {
  try {
    const { name, username, password } = req.body;

    //Check for empty username, name or password
    if (
      checkEmptyField(name) ||
      checkEmptyField(username) ||
      checkEmptyField(password)
    ) {
      return res
        .status(401)
        .json({ errorcode: 401, message: "Fields cannot be empty" });
    }

    let exists = await checkUsernameAlreadyExist(username).catch((err) => {
      throw new Error();
    });
    if (exists) {
      return res
        .status(401)
        .json({ errorcode: 401, message: "Username already exists" });
    }

    // Generate a new UUID (v4)
    const guid = uuidv4();

    //encrypt password
    const passwordHash = encrypt(password);

    //Create user
    const user = await User.create({
      name: name,
      username: username,
      passwordHash: passwordHash,
      Guid: guid,
    });

    //reponse
    user.passwordHash = undefined;

    res.status(200).json({
      status: "Success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ errorcode: 500, message: "Internal server error", error: err });
  }
};

const checkEmptyField = (stringInput) => {
  if (stringInput == "" || stringInput.length === 0) {
    return true;
  }
  return false;
};

const checkUsernameAlreadyExist = async (userName) => {
  const user = await User.findOne({ username: userName });
  if (user !== null) {
    return true;
  }
  return false;
};
