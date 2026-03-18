// import { useContext } from "react";
// import { TimerContext } from "../context/TaskContext";
import {useList} from '../context/TaskContext';



function AddTask({textButton, item}){
    console.log(useList());
    return(
        <>
            <input 
                value={item}
                onChange={(e) => useList().setItem(e.target.value)} 
                placeholder="Digite um item"
            />
            <button onClick={useList().addTask("Teste")}>{textButton}</button>
        </>
    );
}

export default AddTask;