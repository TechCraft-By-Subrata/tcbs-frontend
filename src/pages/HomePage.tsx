"use client";
import React from "react";
import CodeBlock from "../components/CodeBlock";
import FeatureCard from "../components/FeatureCard";

export interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => (
  <main className="min-h-screen pt-16 pb-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
        <span className="block text-indigo-600">Stop Rebuilding.</span>
        <span className="block text-gray-800 mt-2">Start Creating.</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        The ultimate scaffolding tool for full-stack developers. Get production-ready, opinionated boilerplates for Mobile, Backend, and Web projects instantly.
      </p>
      <h2 className="text-lg font-semibold text-gray-600 mb-4">Quick Start Installation:</h2>
      <CodeBlock command copyText="npx tcbs new">
        {`$ npx tcbs new 
      ? What is the name of your new project? my-pro-app
      ? Which kind of project would you like to create? (my-pro-app)
      ❯ React Native (Mobile)
        Node.js Server (Backend)
        React App (Frontend)
        Next.js App (Full-Stack/Frontend)

        
      🎉 Project created successfully!`}
      </CodeBlock>
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

export default HomePage;
