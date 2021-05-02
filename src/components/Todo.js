import React from 'react';

const Todo = ({ addedTasks, setAddedTasks })  => {

  const isCheckedToDo = (e) => {
    e.preventDefault();
    addedTasks[e.target.name].checked = !addedTasks[e.target.name].checked;
    setAddedTasks(prev => [...prev]);
  };

  const deleteToDo = (e) => {
      e.preventDefault();
      addedTasks.splice(e.target.name, 1);
      setAddedTasks(prev => [...prev]);
  }

  return (
    <div className="toDoOuterBlock">
      {addedTasks.map((addedTask, index) => (
          <div className="toDoBlock">
            <button className="toDoButton checkButton" name={index} onClick={isCheckedToDo}> V </button>
            <h3 className={addedTask.checked ? "isChecked" : "notChecked"}>{addedTask.name}</h3>
            <button className="toDoButton deleteButton" name={index} onClick={deleteToDo}> X </button>
          </div>
      ))}
    </div>
  );
}

export default Todo;