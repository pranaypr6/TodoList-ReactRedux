import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
//redux
import { connect } from "react-redux";
import { removeTodo } from "../actions/todo";
import { toast } from "react-toastify";

const Todo = ({ todos, markComplete }) => {
  return (
    <div className="neo">
      <ListGroup className="mt-5 mb-2">
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                markComplete(todo.id);
                toast("Todo removed", {
                  type: "warning",
                });
              }}
              className="float-right"
            >
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
