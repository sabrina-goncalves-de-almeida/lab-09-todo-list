import {useList} from '../context/TaskContext';
import styles from '../styles/TaskList.module.css';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

const TaskList = () => {
    const listConsume = useList();

    return(
        <>
            <div id="cotainer-tasks">
                <ul>
                    {listConsume.list.map((item, index) => (
                        <li key={index}>
                            <TaskItem taskName={item}/>
                        </li>
                    ))}
                </ul>
                <AddTask item={"Teste"} textButton={"Adicionar Tarefa"}></AddTask>
            </div>
        </>
    );
}

export default TaskList;