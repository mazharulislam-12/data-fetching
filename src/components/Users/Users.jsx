"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Total Users: {users.length} </h2>
      {users.map((user) => (
        <div
          key={user.id}
          className="mx-auto mb-10 card bg-gray-100 w-[70%] shadow-xl"
        >
          <div className="card-body text-center ">
            <h2 className="card-title mx-auto"> User:  {user.name}</h2>
            <p> User Name: {user.username}</p>
            <p> Email: {user.email}</p>
            <p> Address: {user.address.street}</p>
            <div className="card-actions justify-center">
              <Link href={`/`}>
                <button className="btn btn-success">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
