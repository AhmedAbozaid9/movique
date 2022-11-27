import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { SkeletonTheme } from "react-loading-skeleton";

const LoadingListSkeleton = ({ count = 1, width, height }) => {
  const createList = (number) => {
    let result = [];
    for (let i = 0; i < number; i++) {
      result.push(
        <div style={{ margin: "0 10px" }}>
          <Skeleton width={width} height={height} />
        </div>
      );
    }
    return result;
  };
  return (
    <SkeletonTheme baseColor="#232323" highlightColor="#525252">
      {createList(count)}
    </SkeletonTheme>
  );
};

export default LoadingListSkeleton;
