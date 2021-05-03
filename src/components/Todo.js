import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faEdit, faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ addedTasks, setAddedTasks })  => {

  const [editedTask, setEditedTask] = useState({});

  const isCheckedToDo = (e) => {
    e.preventDefault();
    addedTasks[e.currentTarget.name].checked = !addedTasks[e.currentTarget.name].checked;
    setAddedTasks(prev => [...prev]);
  };

  const editToDo = (e) => {
    e.preventDefault();
    addedTasks[e.currentTarget.name].edited = true;
    setAddedTasks(prev => [...prev]);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setEditedTask({"name":e.currentTarget.value,"checked":false,"edited":false});
  }

  const handleDone = (e) => {
    e.preventDefault();
    addedTasks.splice(e.currentTarget.name, 1, editedTask);
    setAddedTasks(prev => [...prev]);
    setEditedTask({});
  }

  const handleCancel = (e) => {
    e.preventDefault();
    addedTasks[e.currentTarget.name].edited = false;
    setAddedTasks(prev => [...prev]);
  }

  const deleteToDo = (e) => {
      e.preventDefault();
      addedTasks.splice(e.currentTarget.name, 1);
      setAddedTasks(prev => [...prev]);
  };

  return (
    <div className="toDoOuterBlock">
      {addedTasks.map((addedTask, index) => (
          <div className="toDoBlock">
            {addedTask.edited ? (<div></div>) : (<button className="toDoButton checkButton" onClick={isCheckedToDo} name={index}><FontAwesomeIcon icon={faCheck} /></button>)}
            {addedTask.edited ? (<input type="text" className="editToDoBar" name={index} placeholder={addedTask.name} onChange={handleEdit}/>) : (<h3 className={addedTask.checked ? "isChecked" : "notChecked"}>{addedTask.name}</h3>)}
            {addedTask.edited ? (<div></div>) : (<button className="toDoButton deleteButton" name={index} onClick={deleteToDo}><FontAwesomeIcon name={index} icon={faTrashAlt} /></button>)}
            {addedTask.edited ? (<div><button className="doneButton" name={index} onClick={handleDone}><FontAwesomeIcon icon={faCheckCircle} /></button><button className="cancelButton" name={index} onClick={handleCancel}><FontAwesomeIcon name={index} icon={faWindowClose} /></button></div>) : (<button className="toDoButton editButton" name={index} onClick={editToDo}><FontAwesomeIcon name={index} icon={faEdit} /></button>)}
          </div>
      ))}
    </div>
  );
}

export default Todo;