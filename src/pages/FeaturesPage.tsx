"use client";
import React from "react";
import CodeBlock from "../components/CodeBlock";
import FeatureDetail from "../components/FeatureDetail";

const FeaturesPage: React.FC = () => (
  <main className="min-h-screen pt-12 pb-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">Project Features Overview</h1>
      <p className="text-lg text-gray-600 mb-10">
        Each boilerplate is designed by a full-stack expert to minimize initial friction and enforce scalable, maintainable patterns from day one.
      </p>
      <div className="space-y-12">
        <FeatureDetail 
          title="React Native (Mobile) - Production Ready"
          icon="📱"
          stack={["React Native CLI", "TypeScript", "Zustand Store", "React Navigation", "i18n", "MMKV Storage"]}
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
        <FeatureDetail 
          title="Node.js Server (Backend)"
          icon="⚙️"
          stack={["Express/NestJS", "TypeScript", "Prisma/TypeORM", "JWT Authentication", "Docker ready"]}
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
        <FeatureDetail 
          title="Next.js App (Full-Stack/Frontend)"
          icon="🌐"
          stack={["Next.js", "TypeScript", "Tailwind CSS", "Radix UI (Headless)", "ESLint/Prettier"]}
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

export default FeaturesPage;
