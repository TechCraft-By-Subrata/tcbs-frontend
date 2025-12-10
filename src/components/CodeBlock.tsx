"use client";
import React, { useState, useCallback } from "react";
import { colors } from "../styles/colors";

export interface CodeBlockProps {
  children: React.ReactNode;
  command?: boolean;
  copyText?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, command = false, copyText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const textToCopy = copyText || (children ? children.toString() : "");
    const tempElement = document.createElement("textarea");
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [children, copyText]);

  return (
    <div
      className={`relative w-full max-w-2xl mx-auto ${command ? "rounded-xl shadow-2xl" : "rounded-lg border border-gray-200"}`}
      style={command ? { background: colors.codeBg } : { background: colors.background }}
    >
      {command && (
        <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="text-sm font-mono text-gray-400 ml-2">tcbs-cli</span>
        </div>
      )}
      <pre
        className={`p-4 text-sm overflow-x-auto font-mono`}
        style={command ? { color: colors.lightText, background: colors.codeBg } : { color: colors.text, background: colors.background }}
      >
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white transition duration-150"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2m-2 0h2m-2 0h2m-2 0h2m-2 0h2"></path></svg>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
