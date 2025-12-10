"use client";
import React from "react";
import CodeBlock from "./CodeBlock";

export interface StepCardProps {
  step: string;
  description: string;
  code: string;
  copyText: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, description, code, copyText }) => (
    <div className="mb-6 p-4 border-l-4 border-indigo-600 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{step}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <CodeBlock command copyText={copyText}>
            {code}
        </CodeBlock>
    </div>
);

export default StepCard;
