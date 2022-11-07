import React from "react";

import styles from "../style/components/tag.module.css";

function Tag({ text }) {
  return <div className={styles.tag}>{text}</div>;
}

export default Tag;
