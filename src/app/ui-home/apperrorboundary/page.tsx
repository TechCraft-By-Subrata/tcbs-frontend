"use client";
import React from "react";
import Link from "next/link";
import CodeBlock from "../../../components/CodeBlock";
import { colors } from "../../../styles/colors";

const importExample = `import { AppErrorBoundary } from './src/components/error/AppErrorBoundary';

export default function App() {
  return (
    <AppErrorBoundary>
      <MainAppComponents />
    </AppErrorBoundary>
  );
}`;

const customFallbackExample = `<AppErrorBoundary
  fallbackDev={({ error, errorInfo, reset }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DEV: Oops! Something went wrong.</Text>
      <Text>{error?.message}</Text>
      <Text onPress={reset} style={{ color: 'blue', marginTop: 16 }}>Try Again</Text>
    </View>
  )}
  fallbackProd={({ error, errorInfo, reset }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PROD: Something went wrong. Please try again later.</Text>
      <Text onPress={reset} style={{ color: 'blue', marginTop: 16 }}>Try Again</Text>
    </View>
  )}
>
  <YourAppComponents />
</AppErrorBoundary>`;

const elementFallbackExample = `<AppErrorBoundary
  fallbackDev={<Text>DEV: Something went wrong.</Text>}
  fallbackProd={<Text>PROD: Something went wrong.</Text>}
>
  <YourAppComponents />
</AppErrorBoundary>`;

const wrapScreenExample = `<AppErrorBoundary>
  <ProfileScreen />
</AppErrorBoundary>`;

const customDevProdExample = `<AppErrorBoundary
  fallbackDev={({ error, reset }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DEV: Something went wrong.</Text>
      <Text>{error?.message}</Text>
      <Text onPress={reset} style={{ color: 'blue', marginTop: 16 }}>Try Again</Text>
    </View>
  )}
  fallbackProd={<Text>PROD: Something went wrong. Please try again later.</Text>}
>
  <SettingsScreen />
</AppErrorBoundary>`;

const AppErrorBoundaryPage: React.FC = () => (
  <main className="min-h-screen flex items-center justify-center bg-gray-50" style={{ background: colors.background }}>
    <div className="max-w-2xl w-full p-10 rounded-xl shadow-lg bg-white" style={{ background: colors.background }}>
      <Link href="/ui-home" className="text-indigo-600 hover:underline mb-6 inline-block">← Back to UI Home</Link>
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">Handling Errors Gracefully with AppErrorBoundary</h1>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Introduction</h3>
        <p className="text-gray-700 mb-4">In any robust React Native application, handling unexpected errors is crucial for delivering a smooth user experience. <b>AppErrorBoundary</b> is a custom error boundary component that catches JavaScript errors in its child component tree, logs them, and displays a fallback UI instead of crashing the whole app.</p>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">What is AppErrorBoundary?</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Catches render errors in child components</li>
          <li>Displays a customizable fallback UI</li>
          <li>Works in both development and production</li>
          <li>Supports custom fallback via props</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Why Use AppErrorBoundary?</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Prevents the whole app from crashing due to a single component error</li>
          <li>Shows user-friendly error messages</li>
          <li>Logs errors for debugging and analytics</li>
          <li>Improves developer and user experience</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Basic Usage</h3>
        <CodeBlock command copyText={importExample}>{importExample}</CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Custom Fallback UI (DEV & PROD)</h3>
        <CodeBlock command copyText={customFallbackExample}>{customFallbackExample}</CodeBlock>
        <p className="text-gray-700 mt-4 mb-2">You can also pass a React element directly:</p>
        <CodeBlock command copyText={elementFallbackExample}>{elementFallbackExample}</CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Default Fallback UI</h3>
        <p className="text-gray-700 mb-4">If you do not provide a <code>fallbackDev</code> or <code>fallbackProd</code> prop, <b>AppErrorBoundary</b> will display a helpful default error screen in development and a simple message in production.</p>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">How It Works</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Catches errors in rendering, lifecycle methods, and constructors of child components</li>
          <li>Updates its state to indicate an error has occurred</li>
          <li>Renders the fallback UI instead of the crashed subtree</li>
          <li>Logs error details to the console for debugging</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Best Practices</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Place <b>AppErrorBoundary</b> high in your component tree (e.g., around your navigation or main app component)</li>
          <li>Use custom fallback UIs for a branded error experience</li>
          <li>Log errors to an external service for production monitoring</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Example: Wrapping a Screen</h3>
        <CodeBlock command copyText={wrapScreenExample}>{wrapScreenExample}</CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Example: With Custom Fallbacks for DEV and PROD</h3>
        <CodeBlock command copyText={customDevProdExample}>{customDevProdExample}</CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Summary</h3>
        <p className="text-gray-700">Using <b>AppErrorBoundary</b> in your React Native app ensures that unexpected errors do not ruin the user experience. By catching and handling errors gracefully, you can provide helpful feedback to users and maintain a stable application.<br/>For more advanced error handling, consider integrating global exception handlers and logging services as shown in the rest of this library.</p>
      </section>
    </div>
  </main>
);

export default AppErrorBoundaryPage;