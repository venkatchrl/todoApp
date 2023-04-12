import Todo from "./Todo"

function TodoContainer({todoList, completeTask, deleteTask}){
    return(
        <div className="todoListContainer">
            <ul className="todo-list" style={{ listStyle: 'none' }}>
                {todoList.map((todo) => {
                return(
                    <Todo key={todo.id}
                        todo={todo}
                        completeTask ={completeTask}
                        deleteTask ={deleteTask}
                    />
                )
                })}
            </ul>
        </div>
    )
}

export default  TodoContainer;

