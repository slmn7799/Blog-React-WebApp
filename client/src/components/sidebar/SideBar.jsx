import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SideBar = () => {

  const [ cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:8080/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt="" className="sideBarImg" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          { cats.map((c) => {
            <li className="sideBarListItem">
              <Link className="link" to={`http://localhost:8080/api/?cat=${c.name}`}>
              {c.name}
              </Link>
            </li>
          })}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Follow Us</span>
        <div className="sideBarSocial">
          <i className="sidebarIcon fa fa-facebook-square"></i>
          <i className="sidebarIcon fa fa-twitter-square"></i>
          <i className="sidebarIcon fa fa-pinterest-square"></i>
          <i className="sidebarIcon fa fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar
