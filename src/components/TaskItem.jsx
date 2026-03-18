function TaskItem({taskName}){
    return(
        <>
            <label htmlFor={"taskCompleted"}>{taskName}</label>
            <input type="checkbox" name="taskCompleted" id={"taskCompleted"} />
        </>
    );
}

export default TaskItem;