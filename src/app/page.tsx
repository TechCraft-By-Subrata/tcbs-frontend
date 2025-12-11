"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import ContributePage from "../pages/ContributePage";
import FeatureDetail from "../pages/FeatureDetail";

const App = () => {
  const pathname = usePathname();
  let pageContent;
  if (pathname === "/features") {
    pageContent = <FeaturesPage />;
  } else if (pathname === "/contribute") {
    pageContent = <ContributePage />;
  } else {
    pageContent = <HomePage setCurrentPage={() => {}} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header currentPage={pathname.replace("/","") || "home"} setCurrentPage={() => {}} />
      {pageContent}
      <Footer />
    </div>
  );
};

export default App;