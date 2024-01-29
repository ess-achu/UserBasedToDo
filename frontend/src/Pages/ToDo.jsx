import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToDoComponent from "./Components/ToDoComponent";
import './Styles/Todo.css'

const ToDo = () => {
  const { guid } = useParams();
  const [todos, setTodos] = useState([]);
  const todoApiCall = async (guid) => {
    await axios
      .post("http://localhost:3000/todo/get", {
        guid: guid,
      })
      .then((response) => {
        if (response.statusText == "OK") {
          setTodos(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };
  useEffect(() => {
    todoApiCall(guid);
  }, []);

  return (
    <div className="main">
      <div className="todos">
        <h2>Tasks</h2>
        {todos.map((todo, key) => {
          return <ToDoComponent key={key} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default ToDo;
