import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

import ItemCard from "./ItemCard";
import styles from "../style/components/smallList.module.css";
import { Link } from "react-router-dom";
import Separator from "./Separator";

function SmallList({ data, title, link }) {
  return (
    <div className={styles.smallList}>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <Link to={link}>See more</Link>
      </div>
      <Separator />
      <Splide options={{ autoWidth: true, pagination: false }}>
        {data &&
          data.map((result) => (
            <SplideSlide key={result.id}>
              <ItemCard result={result} link={link} />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}

export default SmallList;
