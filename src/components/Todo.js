import React from 'react';

const Todo = ({name, checked, id})  => {
  return (
    <div>
      <h3>{id}:{name}</h3>
    </div>
  );
}

export default Todo;