import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import InputForm from 'components/InputForm';
import Title from 'components/Title';
import TodoList from 'components/TodoList';
import Notifications from 'utils/Notifications';

const App = () => {
  return (
    <div className="todo-app">
      <Title />
	  <h1> My Todo</h1>
      <InputForm />
      <TodoList />
      <Notifications />
    </div>
  );
};

export default App;
