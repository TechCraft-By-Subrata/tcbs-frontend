"use client";
import React from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, cta, onClick }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-[1.01] transition duration-300 ease-in-out">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button 
        onClick={onClick}
        className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150 ease-in-out"
    >
        {cta} &rarr;
    </button>
  </div>
);

export default FeatureCard;
