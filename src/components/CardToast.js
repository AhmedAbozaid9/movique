import React from "react";
import { motion } from "framer-motion";

import styles from "../style/components/itemCard.module.css";

function CardToast() {
  return (
    <motion.div
      className={styles.cardToast}
      animate={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
      Item is added
    </motion.div>
  );
}

export default CardToast;
