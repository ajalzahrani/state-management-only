import React, { useCallback, useEffect } from "react";
import useStore from "../store/useStore";

const Users = () => {
  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);

  // diffrent options of useStore to add friend (look for implementation)
  const addFriendv1 = useStore((state) => state.addFriendv1);
  const addFriendv2 = useStore((state) => state.addFriendv2);
  const addUniqueFriend = useStore((state) => state.addUniqueFriend);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h5>Users</h5>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} onClick={() => addUniqueFriend(user)}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
