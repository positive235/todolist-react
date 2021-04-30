import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {

  const [newTask, setNewTask] = useState('');
  const [addedTasks, setAddedTasks] = useState([]);
  
  const newToDo = (e) => {
    setNewTask(e.target.value);
  }

  const addToDo = (e) => {
    e.preventDefault();
    setAddedTasks(prev => [...prev, {name: newTask, checked: false}]);
    setNewTask('');
    
  }

  return (
    <div>
      <form>
        <input value={newTask} onChange={newToDo} type="text" className="addToDoBar" placeholder="Add To-Do" />
        <button onClick={addToDo}>Add</button>
        
        {addedTasks.map((addedTask, index) => (
            <Todo 
                key={index}
                name={addedTask.name}
                checked={addedTask.checked}
                id={index + 1}
            />
        ))}
      </form>
    </div>
  );
}

export default TodoList;
