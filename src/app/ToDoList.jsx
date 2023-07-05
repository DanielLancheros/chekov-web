import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../App";

export default function ToDoList() {
    const { user } = useContext(AuthContext);
    const [toDoItems, setToDoItems] = useState();

    useEffect( () => {
        if(user) {
            fetch(`https://chekov-api-dl.web.app/tasks/${user.uid}`)
                .then(res => res.json())
                .then(setToDoItems)
                .catch(alert);
        }
    }, [user]);

    if(!toDoItems) return <h2>Loading...</h2>

    return(
<section>
    {toDoItems.map(item => (
        <p key={item.id}>{item.title}</p>
    ))}
</section>
    )
}