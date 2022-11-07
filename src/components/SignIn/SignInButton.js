import React from "react";

import styles from "../../style/components/signIn.module.css";

function SignInButton({ text, icon }) {
  return (
    <button className={styles.signInButton}>
      <span> {icon}</span> {text}
    </button>
  );
}

export default SignInButton;
