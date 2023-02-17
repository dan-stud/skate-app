import React from "react";
import "../styles/globals.css";

const LandingPage = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
export default LandingPage;
