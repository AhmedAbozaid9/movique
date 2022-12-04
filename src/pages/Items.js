import React, { useEffect, useState } from "react";
import LargeList from "../components/LargeList";
import { Outlet } from "react-router";
import getData from "../components/api/getData";
import searchData from "../components/api/searchData";
import { useInfiniteQuery } from "react-query";
import Search from "../components/Search";
import LoadingListSkeleton from "../components/LoadingListSkeleton";

function Items({ type }) {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    `${type} ${searchQuery} page`,
    ({ pageParam = 1 }) =>
      searchQuery
        ? searchData(type, pageParam, searchQuery)
        : getData(type, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.page < lastPage.data["total_pages"]
          ? lastPage.data.page + 1
          : undefined;
      },
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <Search
        placeholder={"Search for anything"}
        setSearchQuery={setSearchQuery}
      />
      <LargeList data={data} type={type} isFetching={isFetching} />
      <Outlet />
    </>
  );
}

export default Items;
