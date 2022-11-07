import React from "react";

import SignInForm from "../components/SignIn/SignInForm";
import styles from "../style/components/signIn.module.css";

function SignIn() {
  return (
    <div className={styles.signInPage}>
      <SignInForm />
    </div>
  );
}

export default SignIn;
