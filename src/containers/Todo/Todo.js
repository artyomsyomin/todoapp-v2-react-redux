import React, { Component } from 'react';

import ToDoInput from '../../components/Input/Input';
import ToDoList from '../../components/TodoList/TodoList';
import Footer from '../../components/Footer/Footer';

import './Todo.css';

const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];

class ToDo extends Component {

  state = {
    activeFilter: 'all',
  }

  render() {
    const { activeFilter } = this.state;
    const tasksList = TASKS;
    const isTasksExist = tasksList && tasksList.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput />
        {isTasksExist && <ToDoList tasksList={tasksList} />}
        {isTasksExist && <Footer 
        amount={tasksList.length} 
        activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default ToDo;