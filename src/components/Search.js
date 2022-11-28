import React, { useState } from "react";

import styles from "../style/components/searchBar.module.css";

const Search = ({ placeholder, setSearchQuery }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(value);
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
