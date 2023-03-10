import React from "react";
import "../styles/globals.css";
import localFont from "@next/font/local";

const graffiti = localFont({
  src: "../fonts/Painterz.woff2",
  variable: "--font-graffiti",
});

const LandingPage = ({ Component, pageProps }) => {
  return (
    <main className={`${graffiti.variable} font-graffiti`}>
      <Component {...pageProps} />
    </main>
  );
};
export default LandingPage;
