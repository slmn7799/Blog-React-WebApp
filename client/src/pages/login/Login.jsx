import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Context";

const Login = () => {

  const navigate = useNavigate();

  const [ username, setUsername] = useState("");
  const [ password, setPassword] = useState("");
  const [ error, setError] = useState(false);

  const { isFetching, dispatch} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    setError(false);
    try{
      const res = await axios.post("http://localhost:8080/api/auth/login" , {
        username,
        password
      });
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
      navigate("/");
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
      setError(true);
    }
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter username" onChange={e => {setUsername(e.target.value)}}/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter password" onChange={e => {setPassword(e.target.value)}}/>
        <button className="loginButton" type="submit" disabled={isFetching} >Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register" >Register</Link>
      </button>
    </div>
  )
}

export default Login
