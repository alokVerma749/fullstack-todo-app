import React, { useState, useEffect } from 'react'
import axios from "axios"

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
        try {
            const todoid = e.currentTarget.getAttribute("todoid")
            await axios.delete(`/todo/deletetodo${todoid}`)
            const newTodos = todos.filter(todo => (
                todo._id !== todoid
            ))
            settasks('')
            settodos(newTodos)
        } catch (error) {
            throw new Error(error.message)
        }

    }

    const handleEdit = async (e) => {
        const todoid = e.currentTarget.getAttribute("todoid")
        const todoTitle = prompt("Enter todo title")
        if (!todoTitle) {
            alert(" Given field is required")
        } else {
            await axios.put(`/todo/edittodo${todoid}`, todoTitle)
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
    }

    const handleCreateTask = async (e) => {
        const todoid = e.currentTarget.getAttribute("todoid")
        const task = prompt("Enter Task")
        const resp = await axios.post(`/todo/task/createtask${todoid}`, {
            text: task
        })
        handleShowTasks()
        console.log(resp)
    }

    useEffect(() => {
        fetchUserData()
    }, [todo])

    return (
        <div className='aside w-[30vw] tracking-wider'>
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