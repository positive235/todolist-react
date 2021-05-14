import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faEdit, faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

    const checkedTask = addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0];
    
    if (checkedTask.checked === true) {
      // if a task is unchecked (true -> false), move the task to the last of the unchecked tasks.
      addedTasks.filter(task => task.id === Number(e.currentTarget.name))[0].checked = false;
      const checkedFalse = addedTasks.filter(task => task.checked === false);
      const checkedTrue = addedTasks.filter(task => task.checked === true);
      addedTasks = [...checkedFalse, ...checkedTrue];

    } else {
      // if a task is checked (false -> true), move the task to the last
      checkedTask.checked = true;
      addedTasks = addedTasks.filter(task => task.id !== Number(e.currentTarget.name));
      addedTasks = [...addedTasks, checkedTask];
    }
    
    setAddedTasks(addedTasks);
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

  const reorder = (taskList, startIndex, endIndex) => {
    // credit: react beautiful dnd doc examples - https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/examples.md
    const [removed] = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, removed);
    return taskList;
  };
  
  const onDragEnd = (e) => {    
    // credit: react beautiful dnd doc examples - https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/examples.md

    // dropped outside the list
    if (!e.destination) {
      return;
    }
    
    const checkedFalse = addedTasks.filter(task => task.checked === false);
    const checkedFalseLen = checkedFalse.length;

    if (e.destination.index >= checkedFalseLen) {
      addedTasks = reorder(addedTasks, e.source.index, checkedFalseLen - 1);
    } else {
      addedTasks = reorder(addedTasks, e.source.index, e.destination.index);
    }
    setAddedTasks(addedTasks);
    filterFunction(filterName);
  }

  return (
    <div className="toDoOuterBlock">
      <div className="filterButtons">
        <button className="allButton" name="all" onClick={filterToDo}>All</button><button className="activeButton" name="active" onClick={filterToDo}>Active</button><button className="completedButton" name="done" onClick={filterToDo}>Done</button>
      </div>
      
      <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          
          <div>
            {filteredTasks.map((task, index) => (
                <Draggable 
                  key={task.id} draggableId={task.name} index={index} 
                  isDragDisabled={task.checked ? true : false}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="toDoBlock">
                          {task.edited ? (<div></div>) : (<button className="toDoButton checkButton" onClick={isCheckedToDo} name={task.id}><FontAwesomeIcon icon={faCheck} /></button>)}
                          {task.edited ? (<input type="text" className="editToDoBar" name={task.id} placeholder={task.name} onChange={handleEdit}/>) : (<h3 className={task.checked ? "isChecked" : "notChecked"}>{task.name}</h3>)}
                          {task.edited ? (<div></div>) : (<button className="toDoButton deleteButton" name={task.id} id={index} onClick={deleteToDo}><FontAwesomeIcon name={task.id} icon={faTrashAlt} /></button>)}
                          {task.edited ? (<div><button className="doneButton" name={task.id} onClick={handleDone}><FontAwesomeIcon icon={faCheckCircle} /></button><button className="cancelButton" name={task.id} onClick={handleCancel}><FontAwesomeIcon name={task.id} icon={faWindowClose} /></button></div>) : (<button className="toDoButton editButton" name={task.id} onClick={editToDo}><FontAwesomeIcon name={task.id} icon={faEdit} /></button>)}
                        </div>
                      </div>
                    )}
                </Draggable>
            ))}
          </div>

          {provided.placeholder}
        </div>
      )} 
      </Droppable> 
      </DragDropContext>
    </div>
  );
}

export default Todo;