import { useContext } from "react"
import { AuthContext } from "../../App"

export default function AddToDo({ setToDoItems }) {

    const { user } = useContext(AuthContext);

    const addNewItem = (e) => {
        e.preventDefault();
        const newToDoItem = {
            uid: user.uid,
            title: e.target.todo.value,
        }
        fetch(`https://chekov-api-dl.web.app/tasks/${user.uid}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newToDoItem),
        })
            .then(res => res.json())
            .then((data) => {
                setToDoItems(data);
                e.target.todo.value = "";
            })
            .catch(alert)
    }


    return (
        <section>
            <form onSubmit={addNewItem}>
                <input type="text" name="todo" placeholder="New ToDo Item" />
                <input type="submit" value="Add" />
            </form>
        </section>
    )
}