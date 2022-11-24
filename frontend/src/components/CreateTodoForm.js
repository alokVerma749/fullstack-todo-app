import axios from "axios"
/**
 * NOTES FOR MYSELF
 * whenever a todo is created 'todo' state is changed
 * whenever a 'todo' state changes 'allTodos' component need a reload
 * So make [todo,settodo] states global so that 'todo' state can be send to 'AllTodos' component via props
 * put 'todo' in dependency array of 'AllTodos' component
 */
const CreateTodoForm = ({ todo, settodo }) => {
    const submitData = async () => {
        try {
            const data = {
                title: todo
            }
            const res = await axios.post('/todo/createtodo', data)
            console.log(res)
        } catch (error) {
            console.log('failed to upload todo')
            console.log(error.message)
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