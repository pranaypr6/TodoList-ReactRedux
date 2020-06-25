import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { Container } from "reactstrap";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
};

export default App;
