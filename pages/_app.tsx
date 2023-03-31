import React from "react";
import "../styles/globals.css";
import localFont from "next/font/local";
import { Sedgwick_Ave_Display } from "next/font/google";

const sedge = Sedgwick_Ave_Display({
  subsets: ["latin"],
  variable: "--font-sedge",
  weight: "400",
});
const graffiti = localFont({ src: "../fonts/Street.ttf" });

const LandingPage = ({ Component, pageProps }) => {
  return (
    <main className={`${sedge.variable} ${graffiti.className}`}>
      <Component {...pageProps} />
    </main>
  );
};
export default LandingPage;
