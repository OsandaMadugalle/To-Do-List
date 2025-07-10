import React, {useState} from 'react';

function MyComponent() {

    const [tasks, setTasks] = useState(["A","B","C"]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTasks.trim(newTasks.length > 0)){
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
            <input type='text' value={newTasks} onChange={handleInputChange}/>
            <button onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    {task}
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    <button onClick={() => moveTaskUp(index)}>👆</button>
                    <button onClick={() => moveTaskDown(index)}>👇</button>
                </li>)}
            </ol>
        </div>
    );
}

export default MyComponent