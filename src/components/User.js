import "./User.css";
function User({ gender, firstName, lastName, image }) {
  let classForGender;
  if (gender === "female") {
    classForGender = "female";
  } else {
    classForGender = "not-female";
  }
  return (
    <div className={`user-info ${classForGender}`}>
      <h3>
        {firstName}
        {lastName}
      </h3>
      <img src={image} alt="user avatar" />
      <h6>{gender}</h6>
    </div>
  );
}

export default User;
