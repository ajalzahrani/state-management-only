import React, { useEffect } from "react";
import useFriendsPostsReactor from "../store/reactors/useFriendsPostsReactor";
import useStore from "../store/useStore";

const Posts = () => {
  const posts = useFriendsPostsReactor();
  const fetchPosts = useStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h3>Posts ({posts.length})</h3>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
