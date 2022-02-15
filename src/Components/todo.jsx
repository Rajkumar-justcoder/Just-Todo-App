/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

let globalID = 0;



function todo() {

    const [task, settask] = useState('')
    const [todos, settodos] = useState([])
    // const [currentindex, setcurrentindex] = useState(0);


    function createtodo(event) {
        event.preventDefault()
        settodos(old => {
            settask('')
            let data
            data = [...old, { todo: task, id: globalID }]
            // setcurrentindex((old) => old + 1)
            return data;
        })
        
        globalID++;
    }


    function itemremove(itemID) {
        settodos(oldtodo => oldtodo.filter(items => items.id !== itemID))
    }


    return <div>
        <div className='main-sec d-flex flex-column align-items-sm-center justify-content-sm-center'>
            <h1>Best to do app Ever</h1>
            <form onSubmit={createtodo}>
                <div class="input-group ">
                    <div class="custom-file p-2">
                        <input
                            className='form-control'
                            placeholder='Add Todo Items'
                            type='text' value={task}
                            onChange={event => {
                                settask(event.target.value)
                            }}
                            required />
                    </div>
                    <div class="input-group-append p-2">
                        <button type='submit' className='btn btn-outline-secondary'>CreateTodo</button>
                    </div>
                </div>
            </form>
            <ul className='d-flex list-unstyled w-100 flex-column align-items-center justify-content-center'>
                {todos.map((item) => {
                    return <div className='d-flex justify-content-center w-75 p-1' key={item.id}>
                        <div className='w-50 d-flex justify-content-around'>
                            <li className='m-2  text-decoration-none'>{item.id}</li>
                            <li className='m-2  text-decoration-none'>{item.todo}</li>
                            <button className='btn btn-danger' onClick={() => itemremove(item.id)}>Delete</button>
                        </div>
                    </div>
                })}
            </ul>
        </div>
    </div>
}

export default todo;
