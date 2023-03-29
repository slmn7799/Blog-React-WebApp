import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import { useState } from "react";

const Home = () => {

  const [ posts, setPosts] = useState([]);
  return (
    <>
    <Header />
    <div className="home">
      <Posts posts={posts}/>
      <SideBar />
    </div>
    </>
  )
}

export default Home
