const createUserSlice = (set, get) => ({
  users: [],
  friends: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res = await fetch("../../../Users.json");
    set({ users: await res.json() });
  },
  addFriendv1: (user) =>
    set({
      friends:
        // update the array of friends new pattern
        [
          ...get().friends, // this time useing get() method to get current state
          user,
        ],
    }),
  addFriendv2: (user) =>
    set((state) => ({ friends: [...state.friends, user] })),

  addUniqueFriend: (user) =>
    set({
      // add unique object to array new pattern
      friends: [...new Set([...get().friends, user])],
    }),

  removeFriend: (id) =>
    set({
      friends: get().friends.filter((friend) => friend.id !== id),
    }),
});

export default createUserSlice;
