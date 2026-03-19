import {useList} from '../context/TaskContext';
import styles from '../styles/TaskList.module.css';
import TaskItem from './TaskItem';

const TaskList = () => {
    const listConsume = useList();

    return(
        <>
            <div id="cotainerTasks">
                <ul>
                    {listConsume.list.map((item, index) => (
                        <li key={index}>
                            <TaskItem taskName={item} taskId={index} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TaskList;
