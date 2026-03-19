import styles from '../styles/Header.module.css';
import {useList} from '../context/TaskContext';

function Header(){
    const listConsume = useList();;
    return(
        <>
            <div className={styles.containerHeader}>
                <span className={styles.quantTask}>Quantidade de Tarefas: {listConsume.numberOfTasks}</span>
                <span className={styles.quantTask}>Quantidade de Tarefas Concluídas: {listConsume.count}</span>
            </div>
        </>
    );
}


export default Header;
