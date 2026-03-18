import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  function addTask(textTask) {
    if (item !== '') {
      setLista([...list, item]); 
      setItem(textTask);
      console.log(textTask);
    }
  };

  return (
    <TaskContext.Provider value={{ list, setList, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useList = () => useContext(TaskContext);

// export const TaskContext = React.createContext({
//   taskList: ['Sou uma tarefa'],
//   addTask: 0,
//   alternateState: 0,
// });