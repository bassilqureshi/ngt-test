import React from "react";
import Navbar from "./layout/header";
import Footer from "./layout/footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
