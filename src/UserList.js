import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function UserList() {
  // useState hook to save the fetched data.
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook: fetch the users once when the component mounts.
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setListOfUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="status">Loading users...</p>;
  }

  if (error) {
    return <p className="status status--error">{error}</p>;
  }

  // Map listOfUser to display each user on the screen.
  return (
    <ul className="user-list">
      {listOfUser.map((user) => (
        <li className="user-card" key={user.id}>
          <h2 className="user-card__name">{user.name}</h2>
          <p className="user-card__username">@{user.username}</p>
          <p className="user-card__detail">
            <span className="label">Email:</span> {user.email}
          </p>
          <p className="user-card__detail">
            <span className="label">Phone:</span> {user.phone}
          </p>
          <p className="user-card__detail">
            <span className="label">Website:</span> {user.website}
          </p>
          <p className="user-card__detail">
            <span className="label">Company:</span> {user.company.name}
          </p>
          <p className="user-card__detail">
            <span className="label">City:</span> {user.address.city}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
