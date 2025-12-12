"use client";
import React from "react";
import Link from "next/link";
import CodeBlock from "../../../components/CodeBlock";
import { colors } from "../../../styles/colors";

const themeDoc = `import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const { setTcbsColor } = useTcbsColorStore();

React.useEffect(() => {
  setTcbsColor({
    light: {
      btnColor: '#007AFF',
      btnBorderColor: '#007AFF',
      btnIconColor: '#16a62bff',
      themeColor: '#007AFF',
      btnTextColor: '#FFFFFF',
    },
    dark: {
      btnColor: '#222222',
      btnBorderColor: '#222222',
      btnIconColor: '#FFFFFF',
      themeColor: '#222222',
      btnTextColor: '#FFFFFF',
    },
  });
}, []);`;

const ThemePage: React.FC = () => (
  <main className="min-h-screen flex items-center justify-center bg-gray-50" style={{ background: colors.background }}>
    <div className="max-w-2xl w-full p-10 rounded-xl shadow-lg bg-white" style={{ background: colors.background }}>
      <Link href="/ui-home" className="text-indigo-600 hover:underline mb-6 inline-block">← Back to UI Home</Link>
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">How to use your app theme in this UI</h1>
      <div className="mb-6">
          <CodeBlock command copyText="npm install @tcbs/react-native-mazic-ui">
          {`npm install @tcbs/react-native-mazic-ui`}
        </CodeBlock>
      </div>
      <p className="text-gray-700 mb-6">You can easily set up your app's theme using <code>useTcbsColorStore</code> from <code>@tcbs/react-native-mazic-ui</code>. Below is a sample implementation for both light and dark modes:</p>
        <CodeBlock command copyText={themeDoc}>{themeDoc}</CodeBlock>
      <ul className="mt-6 mb-8 list-disc pl-6 text-gray-700">
        <li>Supports light and dark themes</li>
        <li>Customizable button, icon, and text colors</li>
        <li>Easy integration with <code>useTcbsColorStore</code></li>
      </ul>
    </div>
  </main>
);

export default ThemePage;
