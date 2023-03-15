import React, { useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";

const Filter = () => {
  const [data, setData] = useState(MOCK_DATA);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleGenderFilter = (gender) => {
    if (
      document.getElementById("male").checked ||
      document.getElementById("female").checked
    ) {
      const filteredData = MOCK_DATA.filter((mydata) =>
        mydata.gender.includes(gender)
      );
      setData(filteredData);
    }
  };

  const handleOtherFilter = (searchValue, toBeFiltered) => {
    const filteredData = MOCK_DATA.filter((mydata) =>
      mydata[toBeFiltered].toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <p>
        Filter by Gender:
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          onClick={(e) => handleGenderFilter(e.target.value)}
        />
        Male
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          onClick={(e) => handleGenderFilter(e.target.value)}
        />
        Female
      </p>
      <p>
        Filter by First Name:
        <input
          type="input"
          value={firstName}
          onChange={(e) => {
            handleOtherFilter(e.target.value, "first_name");
            setFirstName(e.target.value);
          }}
        />
      </p>
      <p>
        Filter by Last Name:
        <input
          type="input"
          value={lastName}
          onChange={(e) => {
            handleOtherFilter(e.target.value, "last_name");
            setLastName(e.target.value);
          }}
        />
      </p>
      <p>
        Filter by Email:
        <input
          type="input"
          value={email}
          onChange={(e) => {
            handleOtherFilter(e.target.value, "email");
            setEmail(e.target.value);
          }}
        />
      </p>
      {data.map((mydata, index) => {
        return (
          <div key={index}>
            <hr />
            <h5>ID: {mydata.id}</h5>
            <h5>FIRST_NAME: {mydata.first_name}</h5>
            <h5>LAST_NAME: {mydata.last_name}</h5>
            <h5>EMAIL: {mydata.email}</h5>
            <h5>GENDER: {mydata.gender}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
