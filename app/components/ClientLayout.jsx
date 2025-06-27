"use client";
import { useState, useEffect } from "react";
import Preloader from "./PreLoader";
import NavBar from "./nav-bar";
import Footer from "./shared/footer";

function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500); // Show Preloader for 3.5 seconds
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default ClientLayout;
