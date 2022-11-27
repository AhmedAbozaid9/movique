import React, { useState } from "react";

import styles from "../style/components/searchBar.module.css";

const Search = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchBar} onSubmit={(e) => handleSubmit(e)}>
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        autoFocus
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
