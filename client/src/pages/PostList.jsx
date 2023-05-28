import { useEffect, useState } from "react";
import Post from "../components/Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://mern-blog-backend-nu.vercel.app/post')
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-8">
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post.id} {...post} />
        ))
      ) : (
        <div className="">There is no post yet...😫</div>
      )}
    </div>
  );
};

export default PostList;

