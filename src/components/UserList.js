import { useState, useEffect } from "react";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  });

  function renderUsers() {
    return users.map((user) => {
      <User
        gender={user.results.gender}
        firstName={user.results.name.first}
        lastName={user.results.name.last}
        image={user.results.picture.medium}
      />;
    });
  }

  return <section>{renderUsers}</section>;
}

export default UserList;
