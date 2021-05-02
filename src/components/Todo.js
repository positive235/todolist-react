import React, { useState } from 'react';

const Todo = ({ addedTasks, setAddedTasks })  => {

  const [editedTask, setEditedTask] = useState({});

  const isCheckedToDo = (e) => {
    e.preventDefault();
    addedTasks[e.target.name].checked = !addedTasks[e.target.name].checked;
    setAddedTasks(prev => [...prev]);
  };

  const editToDo = (e) => {
    e.preventDefault();
    addedTasks[e.target.name].edited = true;
    setAddedTasks(prev => [...prev]);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setEditedTask({"name":e.target.value,"checked":false,"edited":false});
  }

  const handleDone = (e) => {
    e.preventDefault();
    addedTasks.splice(e.target.name, 1, editedTask);
    setAddedTasks(prev => [...prev]);
    setEditedTask({});
  }

  const handleCancel = (e) => {
    e.preventDefault();
    addedTasks[e.target.name].edited = false;
    setAddedTasks(prev => [...prev]);
  }

  const deleteToDo = (e) => {
      e.preventDefault();
      addedTasks.splice(e.target.name, 1);
      setAddedTasks(prev => [...prev]);
  };

  return (
    <div className="toDoOuterBlock">
      {addedTasks.map((addedTask, index) => (
          <div className="toDoBlock">
            <button className="toDoButton checkButton" name={index} onClick={isCheckedToDo}> V </button>
            {addedTask.edited ? (<input type="text" className="editToDoBar" name={index} placeholder={addedTask.name} onChange={handleEdit}/>) : (<h3 className={addedTask.checked ? "isChecked" : "notChecked"}>{addedTask.name}</h3>)}
            <button className="toDoButton deleteButton" name={index} onClick={deleteToDo}> X </button>
            {addedTask.edited ? (<div><button className="doneButton" name={index} onClick={handleDone}>Done</button><button className="cancelButton" name={index} onClick={handleCancel}>Cancel</button></div>) : (<button className="toDoButton editButton" name={index} onClick={editToDo}>Edit</button>)}
          </div>
      ))}
    </div>
  );
}

export default Todo;