import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {formatISO9075} from "date-fns";

const PostDetail = () => {
  const [postInfo, setPostInfo] = useState(null)
  const {id} = useParams();

  useEffect(()=> {
    fetch(`http://localhost:5000/post/${id}`).then(res=>{
      res.json().then(postInfo => {
        setPostInfo(postInfo)
      })
    })
  },[])

  if(!postInfo) return '';

  return (
    <div className="w-full md:flex mt-8 gap-5">
      <div className="md:w-3/4">
        <img 
          src={`http://localhost:5000/${postInfo.cover}`} 
          alt=""
          className="w-full h-[300px] object-cover mb-3"
        />
        <div className="flex items-center gap-x-2">
          <span className="text-sm">{formatISO9075(new Date(postInfo.createdAt))}</span>
          <p className="text-sm">by <span className="font-semibold">{postInfo.author.username}</span></p>
        </div>
        <h1 className="my-5 font-extrabold text-2xl">{postInfo.title}</h1>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
      </div>
      <div className="md:w-1/4 p-2 border">
        Comment
      </div>
    </div>
  )
}
export default PostDetail