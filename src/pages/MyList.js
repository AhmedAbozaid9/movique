import React, { useState } from "react";
import Select from "react-select";

import { collectionRef } from "../firebase";
import { getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import ItemCard from "../components/ItemCard";
import styles from "../style/components/largeList.module.css";
import Separator from "../components/Separator";
import { UserAuth } from "../context/authContext";

function MyList() {
  const { user } = UserAuth();
  console.log(user);
  const [filterBy, setFilterBy] = useState("");
  const options = [
    { value: "", label: "All" },
    { value: "movie", label: "Movies" },
    { value: "tv", label: "Tv shows" },
  ];
  const { data, refetch } = useQuery(
    [`userData`],
    () => getDocs(collectionRef),
    {
      select: (data) => data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    }
  );
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      color: "white",
      backgroundColor: "transparent",
      border: "2px solid white",
      padding: "10px",
      width: "200px",
      margin: "1rem",
      marginBottom: "2rem",
    }),
    option: (styles, state) => {
      return {
        ...styles,
        backgroundColor: state.isSelected ? "white" : "#1C1C1CFF",
        color: state.isSelected ? "black" : "#FFF",
        margin: "0",
        cursor: "pointer",
        width: "200px",
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        width: "200px",
        backgroundColor: "transparent",
        margin: "0 1rem",
      };
    },
    menuList: (provided, state) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    singleValue: (styles) => {
      return {
        ...styles,
        color: "white",
        fontsize: "24px",
      };
    },
  };
  if (user) {
    return (
      <>
        <Select
          options={options}
          value={filterBy}
          styles={colourStyles}
          onChange={(option) => {
            setFilterBy(option.value);
          }}
        />
        <Separator />
        <div className={styles.largeList}>
          {data
            ?.filter((item) => item.type === filterBy || filterBy === "")
            .map((item) => (
              <React.Fragment key={item.id}>
                <ItemCard
                  refetch={refetch}
                  result={item?.data}
                  type={item?.type}
                  id={item.id}
                  actionType="delete"
                  link={item.type === "movie" ? "/movies" : "/tvShows"}
                />
              </React.Fragment>
            ))}
        </div>
      </>
    );
  } else {
    return (
      <h3 className={styles.notSignedIn}>
        Sign in to be able to save your favourite movies and tv shows.
      </h3>
    );
  }
}

export default MyList;
