import "./posts.css";
import Post from "../post/Post"
import { useEffect, useState } from "react";

const Posts = ({posts}) => {
  console.log(posts)

  return (
    <div className="posts">
      {console.log(posts)}
      { posts && posts.map((post) => {
        return <Post post={post} key={post._id} />
      })}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  )
}

export default Posts
