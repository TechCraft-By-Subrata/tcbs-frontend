"use client";
import React from "react";
import StepCard from "./StepCard";
import Header from "./Header";
import Footer from "./Footer";

const ContributeClient: React.FC = () => (
  <>
    <Header currentPage="contribute" setCurrentPage={() => {}} />
    <main className="min-h-screen pt-12 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">Contribute to TCBS-CLI</h1>
        <p className="text-lg text-gray-600 mb-8">
          This tool is a community effort. We're actively seeking full-stack developers to help build out the high-quality boilerplates for our web and backend stacks.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mb-10">
          <h2 className="text-2xl font-bold text-indigo-800 mb-3">Current Contribution Focus:</h2>
          <ul className="list-disc list-inside space-y-2 text-indigo-700">
            <li>**React Native:** (Production Ready) - Seeking maintenance support only.</li>
            <li>**Node.js Server:** (High Priority) - Need initial scaffolding, generator logic, and auth setup.</li>
            <li>**Next.js App:** (High Priority) - Need template design refinements and page/component generators.</li>
            <li>**React App:** (Mid Priority) - Need core boilerplate and feature parity with Next.js template.</li>
          </ul>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">How to Get Started</h2>
        <StepCard 
          step="1. Clone the CLI Repository"
          description="Fork and clone the main CLI repository. This project contains all the scaffolding logic and templates."
          code="git clone https://github.com/TechCraft-By-Subrata/tcbs-cli.git"
          copyText="git clone https://github.com/TechCraft-By-Subrata/tcbs-cli.git"
        />
        <StepCard 
          step="2. Link the Local Command"
          description="Use npm link to install your local version globally, allowing you to run your changes as the live 'tcbs' command."
          code={`cd tcbs-cli\nnpm install\nnpm link`}
          copyText="cd tcbs-cli && npm install && npm link"
        />
        <StepCard 
          step="3. Develop and Test a Template"
          description="Make changes inside the templates/ folder. Test your changes by running the new command from a *different* directory to ensure successful project creation."
          code={`# From an outside folder\ntcbs new [project-name]`}
          copyText="tcbs new [project-name]"
        />
        <div className="mt-12 text-center">
          <a 
            href="https://www.linkedin.com/in/subraatakumar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-lg font-semibold hover:text-white bg-accent rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300"
          >
            Connect with Subrata on LinkedIn
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ContributeClient;