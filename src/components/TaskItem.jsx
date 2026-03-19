import {useList} from '../context/TaskContext';
import styles from '../styles/TaskItem.module.css'

function TaskItem({taskName, taskId }){
    const listConsume = useList();
    
    return(
        <div className={styles.taskContainer}>
            <input className={styles.inputStyles} type="checkbox" name={`task${taskId}`} id={taskId} onChange={listConsume.handleCheckboxChange}/>
            <label className={styles.labelStyles} htmlFor={taskId} title={taskName}>{taskName}</label>
        </div>
    );
}

export default TaskItem;
