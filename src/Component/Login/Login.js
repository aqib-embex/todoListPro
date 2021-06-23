import { useState } from "react";
import { fire } from "../../firebase_config";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    const signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    return (
        <div>
            <form>
                <h1>Sign Up/Login</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter email address"
                    onChange={(e) => handleChange(e)}
                    value={email}
                    className="inpuField"
                />
                <input
                    name="password"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    id="password"
                    placeholder="enter password"
                    value={password}
                    className="inpuField"
                />
                <button onClick={(e) => login(e)} className="btnTodo">Login</button>
                <button onClick={(e) => signup(e)} className="btnTodo">Signup</button>
            </form>

        </div>
    )
}


export default Login;