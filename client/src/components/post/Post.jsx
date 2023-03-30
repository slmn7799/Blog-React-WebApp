import { useEffect } from "react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({post}) => {
  console.log(post)

  const PF = "http://localhost:8080/images/"; 

  return (
    <div className="post">
      {post?.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => {
            <span className="postCat">{cat?.name}</span>
          })}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString}</span>
      </div>
      <div className="postDesc">{post.desc}</div>

      {/* {post?.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">music</span>
          
        </div>
        <Link className="link">
          <span className="postTitle">titleeee</span>
        </Link>
        <hr />
        <span className="postDate">4hr</span>
      </div>
      <div className="postDesc">dessssssx</div> */}
    </div>
  )
}

export default Post
