import { useState, useEffect } from "react";
import User from "./User";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState();
  const [filter, setFilter] = useState("");

  const baseUrl = "https://randomuser.me/api/";
  let url = baseUrl;
  useEffect(() => {
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

  useEffect(() => {
    if (filter) {
      url = `${baseUrl}${filter}${amount}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, [filter]);

  function handleAllFilter() {
    setFilter("");
  }

  function handleFemaleFilter() {
    setFilter("?gender=female");
  }

  function handleMaleFilter() {
    setFilter("?gender=male");
  }

  function renderUsers() {
    return users.map((user) => (
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
