import "./post.css";

const Post = ({post}) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src="" alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => {
            <span className="postCat">{cat.name}</span>
          })}
        </div>
        <Link className="link" to={`/post/${post.Id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString}</span>
      </div>
      <div className="postDesc">{post.desc}</div>
    </div>
  )
}

export default Post
