import React, { useState, useEffect } from 'react'
import axios from "axios"

/**
 * fetching all todos from db to 'todos' state
 * if fetched data length > 0, then settodos to the fetched data
 * render whole list of fetched data('todos' state )
 */

const AllTodos = ({ todo, settasks }) => {
    const [todos, settodos] = useState(null)
    const fetchUserData = async () => {
        const resp = await axios.get('/todo/getalltodos')
        if (!resp) {
            throw new Error("Todos fetching failed")
        }
        if (resp.data.allTodos.length > 0) {
            settodos(resp.data.allTodos)
        }
    }

    const handleDelete = async (e) => {
        /**
         * cannot do like onClick={handleDelete(todo._id)}, because it executes as soon as loaded
         * So have to set it as an attribute and access it as follows
         * In order to re-render the 'aallTodos' component 'handleDelete' should change 'todos' state
         * {_id: '637fb32ae6bcb558516b9706', title: 'hello', tasks: Array(0), __v: 0}1:
         * {_id: '637fb3c5e6bcb558516b970e', title: 'one', tasks: Array(0), __v: 0}2:
         * {_id: '637fb3c8e6bcb558516b9714', title: 'two', tasks: Array(0), __v: 0}3:
         * {_id: '637fb3cae6bcb558516b971c', title: 'three', tasks: Array(0), __v: 0}
         * find the key which was deleted
         * search for the todo in the preloaded todos
         * delete that todo
         * and set new todos array as todos
         */
        const todoid = e.currentTarget.getAttribute("todoid")
        // this line delete the todo from database
        const resp = await axios.delete(`/todo/deletetodo${todoid}`)
        console.log(resp)
        // removing deleted todo from list
        const newTodos = todos.filter(todo => (
            todo._id !== todoid
        ))
        // settodos(todos)
        settodos(newTodos)
    }

    const handleEdit = async (e) => {
        const todoid = e.currentTarget.getAttribute("todoid")
        const todoTitle = prompt("Enter todo title")
        if (!todoTitle) {
            alert(" Given field is required")
        } else {
            const resp = await axios.put(`/todo/edittodo${todoid}`, todoTitle)
            console.log(resp)
        }
    }

    const handleShowTasks = async (e) => {
        const todoid = e.currentTarget.getAttribute("todoid")
        const resp = await axios.get(`/todo/task/getalltasks${todoid}`)
        if (!resp) {
            throw new Error("Todos fetching failed")
        }
        if (resp.data.tasks.length >= 0) {
            settasks(resp.data)
        }
        console.log(resp.data)
    }

    const handleCreateTask = async (e) => {
        const todoid = e.currentTarget.getAttribute("todoid")
        const task = prompt("Enter Task")
        const resp = await axios.post(`/todo/task/createtask${todoid}`, {
            text: task
        })
        console.log(resp)
    }

    // executes fetchUserData() whenever todos or todo got updated
    useEffect(() => {
        fetchUserData()
    }, [todo, todos])

    return (
        <div className='aside w-[30vw] border-2 border-cyan-200 tracking-wider'>
            <h3 className="text-center text-3xl font-semibold text-cyan-600">TODOS</h3>
            {todos && todos.map((todo) => (
                <div key={todo._id} todoid={todo._id} onClick={handleShowTasks} className=" border-0 shadow-gray-400 shadow-xl hover:shadow-cyan-500/50 outline-0 my-2 p-2 cursor-pointer">
                    <p className="text-center text-xl font-semibold text-cyan-500/50 my-3">{todo.title}</p>
                    <div className="buttons flex justify-evenly flex-row items-center">
                        <button onClick={handleEdit} todoid={todo._id} className="bg-cyan-500 shadow-xl hover:shadow-cyan-500/50 text-white p-2 outline-0">Edit</button>
                        <button onClick={handleDelete} todoid={todo._id} className="bg-red-600 shadow-xl hover:shadow-red-600/50 text-white p-2 outline-0">Delete</button>
                        <button onClick={handleCreateTask} todoid={todo._id} className="bg-green-500 shadow-xl hover:shadow-green-500/50 text-white p-2 outline-0">Create Task</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllTodos