import styles from '../styles/Header.module.css';

function Header(){
    return(
        <>
            <div className={styles.containerHeader}>
                <span className={styles.quantTask}>Quantidade de Tarefas</span>
                <span className={styles.quantTask}>Quantidade de Tarefas Concluídas</span>
            </div>
        </>
    );
}

export default Header;