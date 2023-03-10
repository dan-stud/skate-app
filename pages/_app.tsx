import React from "react";
import "../styles/globals.css";
import localFont from "next/font/local";

const painterz = localFont({
  src: "../fonts/Painterz.woff2",
  variable: "--font-painterz",
});

const LandingPage = ({ Component, pageProps }) => {
  return (
    <main className={`${painterz.variable} font-painterz`}>
      <Component {...pageProps} />
    </main>
  );
};
export default LandingPage;
