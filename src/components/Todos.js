import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('');
    const deleteTodos = indexToDelete => {
        console.log(indexToDelete);
        setTodos(prevTodos => {
            return prevTodos.filter((value, index) => {
                return indexToDelete !== index;
            })
        })
    }
    return (
        <div className="YOLO">
            <h1 className="Type">My To-Do List</h1>
            
            <div className="Zay input-group">
                <input type="text" className="form-control" name={inputValue} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter New To-Do" aria-label="Enter New To-Do" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" onClick={() => {
                        setTodos(prevTodos => [
                            ...prevTodos, inputValue
                        ])
                        setInputValue('')
                    }
                    }
                    > Add</button>
                </div>
            </div>

            <ul className="list-group">
                {todos.map((value, index) => {
                    return <li className="Abby list-group-item d-flex justify-content-between align-items-center" key={index}>{value}
                        <span type="button" onClick={() => {
                            deleteTodos(index);
                        }}
                        >x</span>
                    </li>
                })}
                <li className="pain list-group-item d-flex justify-content-between align-items-center">
                    {todos.length} items
                 </li>
            </ul>
        </div>
    )
}

export default Todos;