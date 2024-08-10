import {useState} from "react";
import '../css/LoginPage.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <section className="loginBox">
        <h2>Login</h2>
        <input name="username" type="text" value={username} onChange={event => setUsername(event.target.value)} placeholder="Username"/> 
        <input name="password" type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password"/>
        <a href="/dashboard"><button onClick={() => localStorage.setItem("username", username)}>Login</button></a>
      </section>
    </>
  );
};

export default Login;