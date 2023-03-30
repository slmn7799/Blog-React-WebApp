import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {

  const [ posts, setPosts] = useState([]);
  const { search } = useLocation();

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8080/api/posts");
    setPosts(res.data);
    // console.log(posts);
  }

  // const displayPosts = () => {
  //   return (
  //     <>
  //     {posts && <Posts posts={posts}/>}
  //     </>
  //   )
  // }
  // useEffect(()=>{
  //   // console.log(posts); // This will log the updated value of posts
  // }, [posts]);

  useEffect(()=>{
    // console.log(search);
    fetchPosts();
    // displayPosts();
  },[]);

  return (
    <>
    <Header />
    <div className="home">
      {posts && <Posts posts={posts}/>}
      {/* {console.log(posts)} */}
      {/* {displayPosts()} */}
      
      {/* <Posts/> */}
      <SideBar />
    </div>
    </>
  )
}

export default Home
