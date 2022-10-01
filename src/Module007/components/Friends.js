import React from "react";
import useStore from "../store/useStore";

const Friends = () => {
  const friends = useStore((state) => state.friends);
  const removeFriend = useStore((state) => state.removeFriend);

  return (
    <div>
      <h5>Friends ({friends.length})</h5>
      <table>
        {friends.map((friend) => (
          <tr>
            <td>{friend.name}</td>
            <td>
              <button onClick={() => removeFriend(friend.id)}>X</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Friends;
