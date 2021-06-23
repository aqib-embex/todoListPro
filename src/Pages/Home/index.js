import { useEffect, useState } from "react";
import firebase from "firebase";
import { db, fire } from "../../firebase_config";
import TodoList from "../../Component/TodoList/TodoList";
import Logo from "../../images/logo.png";
import { connect } from "react-redux";
import { getTodo } from "../../store/TodoList/actions";

const Home = (props) => {
    const { onGetTodo } = props;
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    useEffect(() => {
        getTodo();
    }, [])

    useEffect(() => {
        onGetTodo(todos);
    })

    const getTodo = () => {
        db.collection("todos").onSnapshot(function (querySnapShot) {
            setTodos(
                querySnapShot.docs.map((doc) =>
                ({
                    id: doc.id,
                    todo: doc.data().todos,
                    edit: doc.data().edit
                }))
            );
        })
    }

    const addTodo = () => {
        if (todoInput === "") {
            alert("Empty field!")
        } else {
            db.collection("todos").add({
                edit: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                todos: todoInput,
            })
            setTodoInput("")
        }
    }

    const keyDown = (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    }

    const logOut = () => {
        fire.auth().signOut()
    }

    return (
        <div>
            <header>
                <img src={Logo} alt="" />
                <button className="logOut" onClick={() => logOut()}>Log Out</button>
            </header>
            <div className="main">
                <div>
                    <h1>TODO LIST</h1>
                </div>
                <div className="inp">
                    <input id="todo-item" type="text" placeholder="Enter Todo" onChange={(e) => setTodoInput(e.target.value)} value={todoInput} onKeyDown={(e) => keyDown(e)} />
                    <hr />
                </div>
                <div>
                    <button onClick={() => addTodo()} className="btnTodo">ADD ITEM</button>
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    onGetTodo: (data) => dispatch(getTodo(data))
})

export default connect(null, mapDispatchToProps)(Home);