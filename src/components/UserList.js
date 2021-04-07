import { useState, useEffect } from "react";
import User from "./User";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const baseUrl = "https://randomuser.me/api/";
    let url = baseUrl;
    if (amount) {
      url = `${baseUrl}${amount}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, [amount]);

  function handleAmountOfUsersDisplayed(event) {
    event.preventDefault();
    let input = event.target;
    setAmount(`?results=${input.value}`);
  }

  function handleAllFilter() {
    setFilter("");
  }

  function handleFemaleFilter() {
    setFilter("female");
  }

  function handleMaleFilter() {
    setFilter("male");
  }

  function renderUsers() {
    let filteredUsers;
    if (filter === "female") {
      filteredUsers = users.filter((user) => user.gender === "female");
    } else if (filter === "male") {
      filteredUsers = users.filter((user) => user.gender === "male");
    } else {
      filteredUsers = users;
    }
    return filteredUsers.map((user) => (
      <User
        gender={user.gender}
        firstName={user.name.first}
        lastName={user.name.last}
        image={user.picture.medium}
      />
    ));
  }

  return (
    <section>
      <h1>Random Users</h1>
      <input
        type="text"
        placeholder="how many results would you like to see?"
        onChange={handleAmountOfUsersDisplayed}
        class="input"
      />
      <button class="all" onClick={handleAllFilter}>
        All
      </button>
      <button class="females" onClick={handleFemaleFilter}>
        Female
      </button>
      <button class="males" onClick={handleMaleFilter}>
        Male
      </button>
      {renderUsers()}
    </section>
  );
}

export default UserList;
