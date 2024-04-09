import '../css/List.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Todo() {
    const [list, setList] = useState([])
    const params = useParams()
    const[name,setName]=useState()


    useEffect(() => {
        getTodo();
        const name = localStorage.getItem('name')
        setName(name)
        console.log(params.id)
    }, []);

    const getTodo = async () => {
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/todos",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            setList(result)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    function e(item, index) {
        if (item.userId == params.id) {
            return (
                <div className={item.id % 2 != 0 ? "list" : "list list-odd"} key={item.id}>
                    <div className="list-number">{item.id}</div>
                    <div className={item.completed ? 'list-title title-completed' : 'list-title'}>{item.title}</div>
                    <div className="list-status">
                        <div
                            className={item.completed ? 'list-status-indicator status-completed' : 'list-status-indicator status-todo'}
                            onClick={() => toggleTaskStatus(item.id)}
                        >
                            {item.completed ? 'Completed' : 'Todo'}
                        </div>
                    </div>
                </div>
            )
        }
    }

    const toggleTaskStatus = (taskId) => {
        setList(list.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };


    return (
        <div>
            <div className="list-main-container">
                <div className="list-header">
                    <div className="list-number-heading">Task No</div>
                    <div className="list-title-heading">Task</div>
                    <div className="list-status-heading">Status</div>
                </div>
                <div className="list-container">
                    {
                        list.map(e)
                    }
                </div>
            </div>

        </div>
    )
}

export default Todo
