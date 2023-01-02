import axios from "axios"

const CreateTodoForm = ({ todo, settodo }) => {
    const submitData = async () => {
        try {
            const data = {
                title: todo
            }
            await axios.post('/todo/createtodo', data)
        } catch (error) {
            throw new Error(error.message)
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        submitData()
        settodo("")
    }
    return (
        <div className="header p-5 flex justify-center items-center shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-row justify-center w-[60%]">
                <label htmlFor="todo"></label>
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    value={todo}
                    onChange={(event) => settodo(event.target.value)}
                    className=" border-0 shadow-gray-400 mx-5 shadow-xl hover:shadow-cyan-500/50 outline-0" />
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