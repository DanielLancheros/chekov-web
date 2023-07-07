import { useEffect, useContext } from "react";
import { AuthContext } from "../App";

export default function ToDoList({ ToDoItems, setToDoItems }) {
    const { user } = useContext(AuthContext);
    console.log(user.uid)
    useEffect( () => {
        if(user) {
            fetch(`https://chekov-api-dl.web.app/tasks/${user.uid}`)
                .then(res => res.json())
                .then(setToDoItems)
                .catch(alert);
        }
    }, [user]);

    if(!ToDoItems) return <h2>Loading...</h2>

    return(
<section>
    {ToDoItems.map(item => (
        <p key={item.id}>{item.title}</p>
    ))}
</section>
    )
}