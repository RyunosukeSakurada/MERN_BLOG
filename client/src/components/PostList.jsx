import Post from "./Post"


const PostList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-8">
      <Post />
      <Post />
      <Post />
    </div>
  )
}
export default PostList