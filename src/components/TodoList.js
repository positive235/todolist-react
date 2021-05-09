import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Todo from './Todo';

const TodoList = () => {

  const [newTask, setNewTask] = useState('');
  const [addedTasks, setAddedTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(addedTasks);

  useEffect(() => {
    const storedToDo = JSON.parse(localStorage.getItem('toDoLists'));
    if (storedToDo) setAddedTasks(storedToDo);
    if (storedToDo) setFilteredTasks(storedToDo.filter(task => task.checked === false));
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoLists', JSON.stringify(addedTasks));
  }, [addedTasks]);


  const newToDo = (e) => {
    setNewTask(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    const id = Math.random() * 100
    if (newTask !== "") {
        setAddedTasks(prev => [...prev, {name: newTask, checked: false, edited: false, id: id}]);
        setFilteredTasks(prev => [...prev, {name: newTask, checked: false, edited: false, id: id}]);
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
        <Todo addedTasks={addedTasks} setAddedTasks={setAddedTasks} filteredTasks={filteredTasks} setFilteredTasks={setFilteredTasks} />
      </form>
    </div>
  );
}

export default TodoList;
