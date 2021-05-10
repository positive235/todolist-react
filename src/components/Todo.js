import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faEdit, faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ addedTasks, setAddedTasks, filteredTasks, setFilteredTasks })  => {

  const [filterName, setFilterName] = useState('');
  const [editedTask, setEditedTask] = useState({});
  
  const filterToDo = (e) => {
    e.preventDefault();
    setFilterName(e.target.name);
    filterFunction(e.target.name);
  }

  const filterFunction = (filterName) => {
    switch (filterName) {
      case "all":
        setFilteredTasks(addedTasks);
        break;
      case "active":
        setFilteredTasks(addedTasks.filter(task => task.checked === false));
        break;
      case "done":
        setFilteredTasks(addedTasks.filter(task => task.checked === true));
        break;
      default:
        setFilteredTasks(addedTasks.filter(task => task.checked === false));
        break;
    }
  }

  const isCheckedToDo = (e) => {
    e.preventDefault();
    addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].checked = !addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].checked
    setAddedTasks(prev => [...prev]);
    filterFunction(filterName);
  };

  const editToDo = (e) => {
    e.preventDefault();
    addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].edited = true;
    setAddedTasks(prev => [...prev]);
    filterFunction(filterName);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const editChecked = addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].checked;
    setEditedTask({name: e.currentTarget.value, checked: editChecked, edited: false, id: Number(e.currentTarget.name)});
  }

  const handleDone = (e) => {
    e.preventDefault();
    addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].name = editedTask.name;
    addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].edited = editedTask.edited;
    setAddedTasks(prev => [...prev]);
    filterFunction(filterName);
    setEditedTask({});
  }

  const handleCancel = (e) => {
    e.preventDefault();
    addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].edited = false;
    setAddedTasks(prev => [...prev]);
    filterFunction(filterName);
  }

  const deleteToDo = (e) => {
      e.preventDefault();
      addedTasks = addedTasks.filter(task => task.id !== Number(e.currentTarget.name));
      setAddedTasks(addedTasks);
      filterFunction(filterName);
  };

  return (
    <div className="toDoOuterBlock">
      <div className="filterButtons">
        <button className="allButton" name="all" onClick={filterToDo}>All</button><button className="activeButton" name="active" onClick={filterToDo}>Active</button><button className="completedButton" name="done" onClick={filterToDo}>Done</button>
      </div>
      {filteredTasks.map((task, index) => (
          <div className="toDoBlock">
            {task.edited ? (<div></div>) : (<button className="toDoButton checkButton" onClick={isCheckedToDo} name={task.id}><FontAwesomeIcon icon={faCheck} /></button>)}
            {task.edited ? (<input type="text" className="editToDoBar" name={task.id} placeholder={task.name} onChange={handleEdit}/>) : (<h3 className={task.checked ? "isChecked" : "notChecked"}>{task.name}</h3>)}
            {task.edited ? (<div></div>) : (<button className="toDoButton deleteButton" name={task.id} id={index} onClick={deleteToDo}><FontAwesomeIcon name={task.id} icon={faTrashAlt} /></button>)}
            {task.edited ? (<div><button className="doneButton" name={task.id} onClick={handleDone}><FontAwesomeIcon icon={faCheckCircle} /></button><button className="cancelButton" name={task.id} onClick={handleCancel}><FontAwesomeIcon name={task.id} icon={faWindowClose} /></button></div>) : (<button className="toDoButton editButton" name={task.id} onClick={editToDo}><FontAwesomeIcon name={task.id} icon={faEdit} /></button>)}
          </div>
      ))}
    </div>
  );
}

export default Todo;