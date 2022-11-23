import React, { useState } from 'react'
import axios from "axios"

const CreateTodoForm = () => {
    const [todo, settodo] = useState("")
    const submitData = async () => {
        try {
            const data = {
                title: todo
            }
            const res = await axios.post('/todo/create', data)
            console.log(res)
        } catch (error) {
            console.log('failed to upload')
            console.log(error)
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        submitData()
        settodo("")
    }
    return (
        <div className="header p-5 flex justify-center items-center border-2 shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-row justify-center w-[60%]">
                {/* Input Field */}
                <label htmlFor="todo"></label>
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    value={todo}
                    onChange={(event) => settodo(event.target.value)}
                    className=" border-0 shadow-gray-400 mx-5 shadow-xl hover:shadow-cyan-500/50 outline-0" />
                {/* Button */}
                <button
                    type='submit'
                    className="bg-cyan-500 shadow-xl hover:shadow-cyan-500/50 text-white p-3 outline-0">
                    Create New Todo
                </button>
            </form>
        </div >
    )
}

export default CreateTodoForm