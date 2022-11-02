import React from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { itemId } = useParams();
  return <div>{itemId}</div>;
}

export default Movie;
