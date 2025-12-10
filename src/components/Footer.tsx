"use client";
import React from "react";
import { colors } from "../styles/colors";

const Footer: React.FC = () => (
  <footer style={{ background: colors.text, color: colors.lightText }} className="py-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} TechCraft By Subrata. All rights reserved.
      </div>
      <div style={{ color: colors.background }} className="mt-2 text-xs">
        Open Source Project - MIT License
      </div>
    </div>
  </footer>
);

export default Footer;
