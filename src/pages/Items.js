import React, { useEffect } from "react";
import LargeList from "../components/LargeList";
import { Outlet } from "react-router";
import getData from "../components/api/getData";
import { useInfiniteQuery } from "react-query";

function Items({ type }) {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    `${type} page`,
    ({ pageParam = 1 }) => getData(type, pageParam),
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
      <LargeList data={data} />
      <Outlet />
    </>
  );
}

export default Items;
