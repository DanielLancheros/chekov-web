import { useState } from "react"
import ToDoList from "./ToDoList";
import AddToDo from "./signup/AddToDo";

export default function ToDo () {
    const [ToDoItems, setToDoItems] = useState();
    return (
        <main>
            <h1> Chekov ToDo List</h1>
            <AddToDo setToDoItems={setToDoItems} />
            <ToDoList ToDoItems={ToDoItems} setToDoItems={setToDoItems}/>
        </main>
    )
}