import {AiOutlineComment, AiOutlineHeart, AiOutlineUser} from "react-icons/ai"

const Post = () => {
  return (
    <div className="shadow-md p-4 rounded">
      <img 
        src="https://techcrunch.com/wp-content/uploads/2021/04/electric-battery-getty.jpg?w=430&h=230&crop=1" 
        alt="" 
        className="rounded w-full h-[200px] object-cover"
      />
      <div className="mt-3 flex justify-between">
        <div className="flex items-center gap-x-1">
          <AiOutlineUser size={20}/>
          <a 
            href="" 
            className="text-sm hover:text-amber-500 cursor-pointer"
          >
            Ron
          </a>
        </div>
        <span className="text-sm">2023-05-23</span>
      </div>
      <h2 className="text-lg font-semibold my-3">
        California urges EPA to approve ban on new gas-powered car sales by 2035
      </h2>
      <p className="text-sm text-zinc-500">
        California is urging the Biden administration to grant approval for its proposal that mandates all new vehicles sold within the state by 2035 to be exclusively electric, hydrogen-powered or plug-in...
      </p>
      <div className="flex justify-between border-t border-gray-300 mt-4 pt-2">
        <div className="flex gap-x-1 items-center">
          <AiOutlineHeart />
          <span className="text-sm text-zinc-500">: 5 likes</span>
        </div>
        <div className="flex gap-x-1 items-center">
          <AiOutlineComment />
          <span className="text-sm text-zinc-500">: 6 comments</span>
        </div>
      </div>
    </div>
  )
}
export default Post