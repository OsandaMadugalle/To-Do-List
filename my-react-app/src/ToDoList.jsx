import React, {useState} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTasks.trim().length > 0){
            setTasks([...tasks, newTasks]);
            setNewTasks("");
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i!== index));
    }

    function moveTaskUp(index){
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
            setTasks(newTasks);
        }        
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const newTasks = [...tasks];
            [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
            setTasks(newTasks);
        }
    }


    
    return( 
        <div>
            <h3>TO-DO-LIST</h3>

            <div className='input-container'>
                <input type='text' value={newTasks} onChange={handleInputChange}/>
                <button className='add-task-button' onClick={addTask}>Add Task</button>
            </div>

            <div className='task-list'>
                <ol>
                    {tasks.map((task, index) => 
                    <li key={index} className="task-item">
                    <div className="col col-task">{task}</div>
                    <div className="col"><button className="delete-button" onClick={() => deleteTask(index)}>Delete</button></div>
                    <div className="col"><button className="up-button" onClick={() => moveTaskUp(index)}>👆</button></div>
                    <div className="col"><button className="down-button" onClick={() => moveTaskDown(index)}>👇</button></div>
                    </li>)}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList