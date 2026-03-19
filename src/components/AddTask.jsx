import {useList} from '../context/TaskContext';
import styles from '../styles/AddTask.module.css'


function AddTask({textButton}){
    const listConsume = useList();

    return(
        <>
            <input 
                value={listConsume.item}
                onChange={(e) => listConsume.setItem(e.target.value)}
                placeholder="Digite um item"
                className={styles.containerAddTask}
            />
            <button onClick={listConsume.addTask}>{textButton}</button>
        </>
    );
}

export default AddTask;
