import React from "react";
import LargeList from "../components/LargeList";
import { Outlet } from "react-router";
import getData from "../components/api/getData";
import { useQuery } from "react-query";

function Items({ type }) {
  const { data, isLoading } = useQuery([`${type}`], () => getData(type));
  return (
    <>
      <LargeList data={isLoading ? [] : data.data.results} />
      <Outlet />
    </>
  );
}

export default Items;
