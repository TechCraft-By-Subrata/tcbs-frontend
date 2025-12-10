"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import ContributePage from "../pages/ContributePage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "features":
        return <FeaturesPage />;
      case "contribute":
        return <ContributePage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;