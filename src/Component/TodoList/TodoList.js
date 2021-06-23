import { useState } from "react";
import { db } from "../../firebase_config";
import { connect } from "react-redux";

const TodoList = (props) => {

    const { todoList } = props;
    const [update, setUpdate] = useState("");
    
    const edit_todo = (data) => {
        db.collection("todos").doc(data.id).update({
            edit: true
        })
    }

    const update_todo = (data) => {
        db.collection("todos").doc(data.id).update({
            edit: false,
            todos: update
        })
    }

    const deleteTodo = (id) => {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div>
            <ul>
                {
                    todoList.map((data, index) => {
                        return (
                            <>
                                <li key={index}>
                                    {
                                        data.edit ?
                                            <input defaultValue={data.todo} type="text" onChange={(e) => setUpdate(e.target.value)} />
                                            :
                                            data.todo
                                    }
                                </li>
                                {
                                    data.edit ?
                                        <button className="liBtn" onClick={() => update_todo(data)}>UPDATE</button>
                                        :
                                        <button onClick={() => edit_todo(data, index)} className="liBtn">EDIT</button>
                                }
                                <button onClick={() => deleteTodo(data.id)} className="liBtn">Delete</button>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({ TodoList }) => ({
    todoList: TodoList.TodoList
})

export default connect(mapStateToProps, null)(TodoList);