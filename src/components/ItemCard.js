import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { IoMdRemove } from "react-icons/io";
import { addDoc, getDocs, query, where } from "firebase/firestore";

import styles from "../style/components/itemCard.module.css";
import extractData from "../utils/extractData";
import ImagePlaceholder from "./ImagePlaceholder";
import { UserAuth } from "../context/authContext";
import { collectionRef } from "../firebase";
import CardToast from "./CardToast";

function ItemCard({ result, link, type, actionType }) {
  const { user } = UserAuth();
  const [showToast, setShowToast] = useState(false);

  const { title, image, year } = extractData(result, type);
  const imageComponent =
    image.slice(-4) !== "null" ? (
      <img src={`${image}`} alt={title} />
    ) : (
      <ImagePlaceholder />
    );
  const url = link ? `${link}/${result.id}` : `${result.id}`;

  const handleAdd = () => {
    setShowToast(true);
    setTimeout(() => {
      const q = query(collectionRef, where("id", "==", result.id));
      getDocs(q).then((data) => {
        if (!data.docs.length) {
          addDoc(collectionRef, {
            owner: user.uid,
            type: type || "",
            data: result,
          }).then();
        }
      });
    }, 500);
  };
  return (
    <div className={styles.movieCard}>
      <Link to={url} state={{ itemData: result, itemType: type }}>
        {imageComponent}
        <p>
          {title} ({year})
        </p>
      </Link>
      {actionType === "delete" ? (
        <button className={styles.delete} onClick={handleAdd}>
          <IoMdRemove size={20} />
        </button>
      ) : (
        <button className={styles.add} onClick={handleAdd}>
          <BsPlusLg size={20} />
        </button>
      )}
      {showToast && <CardToast />}
    </div>
  );
}

export default ItemCard;
