import { useContext, useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/Context";

const Register = () => {

  const navigate = useNavigate();

  const { isFetching, dispatch } = useContext(UserContext);

  const [ username, setUsername] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({type:"REGISTER_START"});
    try{
      const res = await axios.post("http://localhost:8080/api/auth/register", {
        username,
        email,
        password
      });
      // res.data && window.location.replace("/login");
      dispatch({type:"REGISTER_SUCCESS", payload: res.data});
      navigate("/");
    }catch(err){
      dispatch({type:"REGISTER_FAILURE"});
      setError(true);
    }
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username" onChange={e => {setUsername(e.target.value)}} />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your email" onChange={e => {setEmail(e.target.value)}} />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password" onChange={e => {setPassword(e.target.value)}} />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}

export default Register
