import React from "react";

function UserCard({ user }) {
  return (
    <div>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <div>
        <p>
          {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p>{user.email}</p>
        <p>{user.gender}</p>
      </div>
    </div>
  );
}

export default UserCard;
