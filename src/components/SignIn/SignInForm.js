import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsGoogle } from "react-icons/bs";

import styles from "../../style/components/signIn.module.css";
import SignInButton from "./SignInButton";

function SignInForm() {
  return (
    <form className={styles.signInForm}>
      <h3>Sign in</h3>
      <p>Use your google or facebook account to sign in.</p>
      <SignInButton
        icon={<BsGoogle size="20px" />}
        text="Sign In using Google"
      />
      <SignInButton
        icon={<GrFacebookOption size="20px" />}
        text="Sign In using Facebook"
      />
    </form>
  );
}

export default SignInForm;
