import React, { useEffect } from "react";
import useStore from "../useStore";

// useFriendsPostsReactor is a custom hook, that keep an eye on the changes
// of friends & posts and return a postsFromFriends proprety of the useStore.

const useFriendsPostsReactor = () => {
  const friends = useStore((state) => state.friends);
  const posts = useStore((state) => state.posts);
  const postsFromFriends = useStore((state) => state.postsFromFriends);
  const filterPostsByFriends = useStore((state) => state.filterPostsByFriends);

  useEffect(() => {
    filterPostsByFriends();
  }, [filterPostsByFriends, friends, posts]);

  return postsFromFriends;
};

export default useFriendsPostsReactor;
