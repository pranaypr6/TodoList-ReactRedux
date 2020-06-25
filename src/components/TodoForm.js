import React, { useState } from "react";
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
//redux
import { connect } from "react-redux";
import { addTodo } from "../actions/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return toast("Enter Todo", {
        type: "error",
        closeOnClick: true,
      });
    }
    const todo = {
      title,
      id: v4(),
    };
    addTodo(todo);
    toast("Todo added", {
      type: "success",
    });
    setTitle("");
  };
  return (
    <div>
      <ToastContainer position="top-left" />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Your next todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputGroupAddon addonType="prepend">
              <Button color="primary" onClick={handleSubmit}>
                ADD
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
