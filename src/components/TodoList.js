import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Todo from './Todo';

const TodoList = () => {

  const [newTask, setNewTask] = useState('');
  const [addedTasks, setAddedTasks] = useState([]);
  
  useEffect(() => {
    const storedToDo = JSON.parse(localStorage.getItem('toDoLists'));
    if (storedToDo) setAddedTasks(storedToDo);
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoLists', JSON.stringify(addedTasks));
  }, [addedTasks]);


  const newToDo = (e) => {
    setNewTask(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    if (newTask !== "") {
        setAddedTasks(prev => [...prev, {name: newTask, checked: false, edited: false}]);
    }
    setNewTask('');
  };

  return (
    <div>
      <form>
        <div className="addBarButtonStyle">
          <input value={newTask} onChange={newToDo} type="text" className="addToDoBar" placeholder="Add To-Do" />
          <button onClick={addToDo} className="addButton"><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <Todo addedTasks={addedTasks} setAddedTasks={setAddedTasks} />
      </form>
    </div>
  );
}

export default TodoList;
