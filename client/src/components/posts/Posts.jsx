import "./posts.css";
import Post from "../post/Post"

const Posts = ({posts}) => {
  return (
    <div className="post">
      { posts.map(p => {
        <Post post={p} />
      })}
    </div>
  )
}

export default Posts
