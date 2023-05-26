import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { formatISO9075 } from "date-fns";
import { UserContext } from "../context/UserContext";

const PostDetail = () => {
  const [postInfo, setPostInfo] = useState(null)
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`).then(res => {
      res.json().then(postInfo => {
        setPostInfo(postInfo)
      })
    })
  }, [])

  const handleDelete = () => {
    fetch(`http://localhost:5000/post/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message); // Post deleted successfully
        navigate('/'); // Redirect to home page or any other desired route
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  if (!postInfo) {
    return <div>Loading...</div>; // ローディングスピナーなどの表示
  }

  return (
    <div className="w-full md:flex mt-8 gap-5 mb-10">
      <div className="md:w-3/4">
        <img
          src={`http://localhost:5000/${postInfo.cover}`}
          alt=""
          className="w-full h-[300px] object-cover mb-3"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="text-sm">{formatISO9075(new Date(postInfo.createdAt))}</span>
            <p className="text-sm">by <span className="font-semibold">{postInfo.author.username}</span></p>
          </div>
          {userInfo && userInfo.id === postInfo.author._id && (
            <div>
              <Link to={`/edit/${postInfo._id}`}>
                <button className="border px-4 py-1 rounded bg-amber-500 text-white hover:bg-amber-600 cursor-pointer">Edit</button>
              </Link>
              <button
                className="border px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600 cursor-pointer ml-2"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <h1 className="my-5 font-extrabold text-2xl">{postInfo.title}</h1>
        <div
          className="break-words"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
      </div>
      <div className="md:w-1/4 p-2 border">
        Comment
      </div>
    </div>
  )
}

export default PostDetail
