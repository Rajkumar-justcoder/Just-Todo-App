/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';

let globalID = 0;

const app_name = "Todo-app";

const getlocal = () => {
    let localitem = localStorage.getItem(app_name)
    if (localitem) {
        console.log(JSON.parse(localitem).length);


        globalID = JSON.parse(localitem).length + 1
        // globalID = JSON.parse(localitem).length === 0 ? JSON.parse(localitem).length + 1 : JSON.parse(localitem).length;
        console.log(globalID);
        return JSON.parse(localitem);
    } else {
        globalID = 0;
        return []
    }
}



function todo() {

    const [task, settask] = useState('')
    const [todos, settodos] = useState(getlocal())


    function createtodo(event) {
        event.preventDefault()
        settodos(old => {
            settask('')
            let data
            data = [...old, { todo: task, id: JSON.parse(localStorage.getItem(app_name)).length }]
            return data;
        })

        // globalID++;u
    }


    function itemremove(itemID) {
        settodos(oldtodo => oldtodo.filter(items => items.id !== itemID))
    }

    useEffect(() => {
        localStorage.setItem(app_name, JSON.stringify(todos))
    }, [todos])


    return <div>
        <div className='main-sec d-flex flex-column align-items-sm-center justify-content-sm-center'>
            <h1>Best to do app Ever</h1>
            <form onSubmit={createtodo}>
                <div className="input-group ">
                    <div className="custom-file p-2">
                        <input
                            className='form-control'
                            placeholder='Add Todo Items'
                            type='text' value={task}
                            onChange={event => {
                                settask(event.target.value)
                            }}
                            required />
                    </div>
                    <div className="input-group-append p-2">
                        <button type='submit' className='btn btn-outline-secondary'>CreateTodo</button>
                    </div>
                </div>
            </form>
            <ul className='d-flex list-unstyled w-100 flex-column align-items-center justify-content-center'>
                {todos.map((item, index) => {
                    return <div className='d-flex justify-content-center w-75 p-1' key={index}>
                        <div className='w-50 d-flex justify-content-around'>
                            <li className='m-2  text-decoration-none'>{index + 1}</li>
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
