import { useContext } from "react";
import { UserContext } from "../../context/Context";
import "./topbar.css";
import { Link } from "react-router-dom";

const TopBar = () => {

  const { user, dispatch } = useContext(UserContext);
  const PF = "http://localhost:8080/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa fa-facebook-square"></i>
        <i className="topIcon fa fa-twitter-square"></i>
        <i className="topIcon fa fa-pinterest-square"></i>
        <i className="topIcon fa fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topItemList">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topItemList">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topItemList">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topItemList">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topItemList">
            <Link className="link" to="/" onClick={handleLogout}>
              { user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        { user ? (
          <ul className="topList">
            <li className="topItemList">
              <Link className="link" to="/settings">
                <img src={PF+user.profilePic} alt="" className="topImg" />
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="topList">
            <li className="topItemList">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topItemList">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        ) }
      </div>
    </div>
  );
}

export default TopBar;