import React from "react";
import useData from "../hooks/useData";
import LargeList from "../components/LargeList";
import { Outlet } from "react-router";

function Items({ type }) {
  const { results } = useData(type, 1);
  return (
    <>
      <LargeList data={results} />
      <Outlet />
    </>
  );
}

export default Items;
