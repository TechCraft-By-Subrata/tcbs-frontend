"use client";
import React from "react";

export interface FeatureDetailProps {
  title: string;
  icon: React.ReactNode;
  stack: string[];
  description: string;
  example: React.ReactNode;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ title, icon, stack, description, example }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100">
    <div className="flex items-start">
      <div className="text-5xl mr-4">{icon}</div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Structure:</h3>
        {example}
      </div>
    </div>
  </div>
);

export default FeatureDetail;
