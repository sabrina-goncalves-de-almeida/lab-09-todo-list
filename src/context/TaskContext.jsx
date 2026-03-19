import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const [numberOfTasks, setNumberOfTasks] = useState(0);

  function addTask() {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
      setNumberOfTasks(prevTotal => prevTotal + 1);
    }
  };
  
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked, // Define como true ou false
    });
  };

  // Conta os valores true no objeto
  const count = Object.values(checkedItems).filter(Boolean).length;
  return (
    <TaskContext.Provider value={{ list, item, numberOfTasks, checkedItems, setList, setItem, setNumberOfTasks, setCheckedItems, addTask, handleCheckboxChange, count }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useList = () => useContext(TaskContext);
