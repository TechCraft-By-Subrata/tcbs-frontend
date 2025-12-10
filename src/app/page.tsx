"use client";
import React, { useState, useCallback, useEffect } from 'react';

// Tailwind configuration (assumed to be loaded, but defining colors here for reference)
const colors = {
  primary: '#4f46e5', // Indigo-600
  accent: '#06b6d4',  // Cyan-500
  background: '#f8fafc', // Slate-50 for light mode background
  text: '#1e293b', // Slate-800
  lightText: '#e2e8f0', // Slate-200
  codeBg: '#1e293b', // Slate-800 for code blocks
};

// --- Custom Components ---

/**
 * Global Header Component with Navigation
 */
interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Features', path: 'features' },
    { name: 'Contribute', path: 'contribute' },
  ];

  interface NavLinkProps {
    name: string;
    path: string;
  }
  const NavLink: React.FC<NavLinkProps> = ({ name, path }) => (
    <button
      onClick={() => setCurrentPage(path)}
      className={`
        px-3 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out
        ${currentPage === path 
          ? 'text-white bg-indigo-600 shadow-md hover:bg-indigo-700' 
          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
        }
      `}
    >
      {name}
    </button>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-extrabold tracking-tight text-gray-900">
              <span className="text-indigo-600">TCBS</span>-CLI
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden sm:ml-6 sm:flex sm:space-x-4">
            {navItems.map(item => (
              <NavLink key={item.path} {...item} />
            ))}
            <a 
              href="https://github.com/TechCraft-By-Subrata/tcbs-cli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out border border-gray-300"
            >
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Repository
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

/**
 * Reusable Code Block component
 */
interface CodeBlockProps {
  children: React.ReactNode;
  command?: boolean;
  copyText?: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({ children, command = false, copyText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    // This is the standard method for copying text in the simulated environment
    const textToCopy = copyText || (children ? children.toString() : "");
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [children, copyText]);

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${command ? 'rounded-xl shadow-2xl bg-slate-900' : 'rounded-lg bg-gray-50 border border-gray-200'}`}>
      {command && (
        <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="text-sm font-mono text-gray-400 ml-2">tcbs-cli</span>
        </div>
      )}
      <pre className={`p-4 text-sm overflow-x-auto ${command ? 'text-gray-100 font-mono' : 'text-gray-800 font-mono'}`}>
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white transition duration-150"
        title="Copy to clipboard"
      >
        {copied ? (
          // Check icon (fixed SVG)
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        ) : (
          // Clipboard icon (fixed SVG)
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2m-2 0h2m-2 0h2m-2 0h2m-2 0h2"></path></svg>
        )}
      </button>
    </div>
  );
};

// --- Page Components ---

/**
 * Home Page: Value Proposition and Quick Start
 */
interface HomePageProps {
  setCurrentPage: (page: string) => void;
}
const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => (
  <main className="min-h-screen pt-16 pb-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Hero Section */}
      <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
        <span className="block text-indigo-600">Stop Rebuilding.</span>
        <span className="block text-gray-800 mt-2">Start Creating.</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        The ultimate scaffolding tool for full-stack developers. Get production-ready, opinionated boilerplates for Mobile, Backend, and Web projects instantly.
      </p>

      {/* Quick Start Command */}
      <h2 className="text-lg font-semibold text-gray-600 mb-4">Quick Start Installation:</h2>
      <CodeBlock command copyText="npx tcbs new">
        $ npx tcbs new
        ? What is the name of your new project? my-pro-app
        ? Which kind of project would you like to create? (my-pro-app)
        ❯ React Native (Mobile)
          Node.js Server (Backend)
          Next.js App (Full-Stack/Frontend)
        
        🎉 Project created successfully!
      </CodeBlock>
      
      <p className="mt-10 text-lg text-gray-700">
        Already know your project type? Use direct commands: 
        <span className="font-mono text-indigo-600 font-semibold ml-2">npx tcbs new rn</span>, 
        <span className="font-mono text-indigo-600 font-semibold ml-2">new server</span>, etc.
      </p>

      {/* Feature Section Preview */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Four Ecosystems. One CLI.</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <FeatureCard 
            title="React Native (Mobile)"
            description="Production-ready boilerplate with integrated Redux/MobX, navigation setup, and a full component library."
            icon="📱"
            cta="See Details"
            onClick={() => setCurrentPage('features')}
          />
          <FeatureCard 
            title="Node.js Server (Backend)"
            description="Scaffold Express/NestJS APIs with pre-configured authentication, logging, and database connections (TS Ready)."
            icon="⚙️"
            cta="See Details"
            onClick={() => setCurrentPage('features')}
          />
          <FeatureCard 
            title="Next.js App (Full-Stack)"
            description="High-performance web apps with TypeScript, Tailwind CSS, professional component structure, and automatic routing."
            icon="🌐"
            cta="See Details"
            onClick={() => setCurrentPage('features')}
          />
          <FeatureCard 
            title="React App (Frontend)"
            description="A modern frontend starter kit built on React + Vite, ideal for static sites, dashboards, and client-side applications."
            icon="⚛️"
            cta="See Details"
            onClick={() => setCurrentPage('features')}
          />
        </div>
      </section>
    </div>
  </main>
);

interface FeatureCardProps {
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


/**
 * Features Page: Detailed Breakdowns
 */
const FeaturesPage = () => (
  <main className="min-h-screen pt-12 pb-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">Project Features Overview</h1>
      <p className="text-lg text-gray-600 mb-10">
        Each boilerplate is designed by a full-stack expert to minimize initial friction and enforce scalable, maintainable patterns from day one.
      </p>

      {/* Feature Details */}
      <div className="space-y-12">
        {/* React Native - UPDATED WITH DETAILED STRUCTURE */}
        <FeatureDetail 
          title="React Native (Mobile) - Production Ready"
          icon="📱"
          stack={['React Native CLI', 'TypeScript', 'Zustand Store', 'React Navigation', 'i18n', 'MMKV Storage']}
          description="The React Native boilerplate provides an exhaustive, production-ready architecture designed for scalability, performance, and deep native control (via CLI). It includes structured navigation, consistent theming, and internationalization out of the box."
          example={
            <CodeBlock copyText={""}>
              {`src/
├── assets/ (Fonts, Images)
├── components/ (Reusable UI: Button, TextField, etc.)
├── i18n/ (Locales, initI18next)
├── navigation/ (Root, App, Stack Navigators)
├── screens/ (Screen component + dedicated styles)
├── storage/ (MMKV setup)
├── store/ (Zustand useStore)
└── theme/ (Colors, Metrics, ThemeProvider)`}
            </CodeBlock>
          }
        />

        {/* Node.js Server */}
        <FeatureDetail 
          title="Node.js Server (Backend)"
          icon="⚙️"
          stack={['Express/NestJS', 'TypeScript', 'Prisma/TypeORM', 'JWT Authentication', 'Docker ready']}
          description="The backend boilerplate focuses on building clean, RESTful or GraphQL APIs. It integrates database connection, standard error handling middleware, and includes Docker setup for easy containerization."
          example={
            <CodeBlock copyText={""}>
              {`// tcbs new server --ts
// Terminal Prompt: 
? Select Database: [PostgreSQL, MongoDB]
? Add Authentication: (Yes/No)`}
            </CodeBlock>
          }
        />

        {/* Next.js App */}
        <FeatureDetail 
          title="Next.js App (Full-Stack/Frontend)"
          icon="🌐"
          stack={['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI (Headless)', 'ESLint/Prettier']}
          description="Professional, high-conversion web frontends. Styled with a custom Tailwind theme and organized for scalable routing and data fetching, ready for modern server-side rendering (SSR) or static site generation (SSG)."
          example={
            <CodeBlock copyText={""}>
              {`// Example Next.js component generator
plop component Button --with-test --with-stories`}
            </CodeBlock>
          }
        />
      </div>
    </div>
  </main>
);

interface FeatureDetailProps {
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


/**
 * Contribute Page: Calls to Action for Collaboration
 */
const ContributePage = () => (
  <main className="min-h-screen pt-12 pb-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">Contribute to TCBS-CLI</h1>
      <p className="text-lg text-gray-600 mb-8">
        This tool is a community effort. We're actively seeking full-stack developers to help build out the high-quality boilerplates for our web and backend stacks.
      </p>

      {/* Contribution Status */}
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mb-10">
        <h2 className="text-2xl font-bold text-indigo-800 mb-3">Current Contribution Focus:</h2>
        <ul className="list-disc list-inside space-y-2 text-indigo-700">
          <li>**React Native:** (Production Ready) - Seeking maintenance support only.</li>
          <li>**Node.js Server:** (High Priority) - Need initial scaffolding, generator logic, and auth setup.</li>
          <li>**Next.js App:** (High Priority) - Need template design refinements and page/component generators.</li>
          <li>**React App:** (Mid Priority) - Need core boilerplate and feature parity with Next.js template.</li>
        </ul>
      </div>

      {/* Contribution Guide */}
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
        code={`cd tcbs-cli
npm install
npm link`}
        copyText="cd tcbs-cli && npm install && npm link"
      />

      <StepCard 
        step="3. Develop and Test a Template"
        description="Make changes inside the templates/ folder. Test your changes by running the new command from a *different* directory to ensure successful project creation."
        code={`# From an outside folder
tcbs new [project-name]`}
        copyText="tcbs new [project-name]"
      />
      
      <div className="mt-12 text-center">
        <a 
          href="https://www.linkedin.com/in/subraatakumar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-accent rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Connect with Subrata on LinkedIn
        </a>
      </div>
    </div>
  </main>
);

interface StepCardProps {
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


/**
 * Main Application Component
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'features':
        return <FeaturesPage />;
      case 'contribute':
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

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-gray-800 text-lightText py-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} TechCraft By Subrata. All rights reserved.
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Open Source Project - MIT License
      </div>
    </div>
  </footer>
);

export default App;