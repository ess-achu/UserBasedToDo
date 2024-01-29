const mongoose = require("../Database/dbConnect");
const User = require("../Models/UserModel");
const Todo = require("../Models/ToDoModel");

//Create todo
exports.CreateTodo = async (req, res, next) => {
  try {
    const { task, guid } = req.body;
    if (checkEmptyField(task) || checkEmptyField(guid)) {
      return res
        .status(401)
        .json({ errorcode: 401, message: "Fields cannot be empty" });
    }

    const user = await User.findOne({ Guid: guid });
    if (user === null) {
      return res
        .status(403)
        .json({ errorCode: 403, message: "Username doesnot exist" });
    }

    const todo = await Todo.create({
      task: task,
      guid: user.Guid,
    });

    return res.status(200).json({
      status: "Success",
      data: todo,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ errorcode: 500, message: "Internal server error", error: err });
  }
};

//Get all todos
exports.getUserTodos = async (req, res, next) => {
  try {
    const guid = req.body.guid
    if (checkEmptyField(guid)) {
      return res
        .status(400)
        .json({ errorcode: 400, message: "Fields cannot be empty" });
    }

    var todos = null;
    await Todo.find({ guid: guid })
      .exec()
      .then((documents) => {
        todos = documents;
      })
      .catch((err) => {
        console.error("Error:", err);
        return res
          .status(500)
          .json({
            errorcode: 500,
            message: "Internal server error",
            error: err,
          });
      });

    return res.status(200).json({ status: "Success", data: todos });
  } 
  catch (err) {
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
