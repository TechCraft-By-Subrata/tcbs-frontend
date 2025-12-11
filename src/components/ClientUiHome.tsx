"use client";
import React, { useState } from "react";
import CodeBlock from "./CodeBlock";

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

const buttonDoc = `import { TcbsButton } from '@tcbs/react-native-mazic-ui';

<TcbsButton
  title="Submit"
  onPress={() => console.log('Pressed')}
/>

// Size Variations
<TcbsButton title="Large" size="large" onPress={...} />
<TcbsButton title="Medium" size="medium" onPress={...} />
<TcbsButton title="Small" size="small" onPress={...} />

// Variant Styles
<TcbsButton title="Primary" variant="primary" onPress={...} />
<TcbsButton title="Secondary" variant="secondary" onPress={...} />
<TcbsButton title="No Border" variant="no_border" onPress={...} />

// Icon Groups
<TcbsButton title="AntDesign" iconName="check" iconGroup="AntDesign" iconPosition="left" onPress={...} />
<TcbsButton title="Feather" iconName="arrow-right" iconGroup="Feather" iconPosition="right" onPress={...} />
<TcbsButton title="Top Icon" iconName="star" iconGroup="FontAwesome" iconPosition="top" onPress={...} />

// Custom Colors & Styles
<TcbsButton title="Custom" style={{ backgroundColor: '#222' }} textStyle={{ color: '#FFD700' }} onPress={...} />

// Accessibility
<TcbsButton title="Accessible" accessibilityLabel="Submit button" accessibilityHint="Submits the form" accessibilityRole="button" onPress={...} />

// Disabled State
<TcbsButton title="Disabled" disabled onPress={...} />`;


import Link from "next/link";

const ClientUiHome = ({ colors }: { colors: any }) => {
  return (
    <main
      className="min-h-screen flex bg-gray-50"
      style={{ background: colors.background }}
    >
      {/* Sidebar */}
      <aside
        className="w-64 p-8 border-r border-gray-200 bg-white flex flex-col gap-6"
        style={{ background: colors.background }}
      >
        <h2 className="text-xl font-bold mb-4 text-indigo-700">Mazic UI Docs</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/ui-home/theme" className="text-indigo-700 hover:underline text-lg font-medium">Theme Setup</Link>
          <Link href="/ui-home/tcbsbutton" className="text-indigo-700 hover:underline text-lg font-medium">TcbsButton</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
          @tcbs/react-native-mazic-ui
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          A customizable React Native UI component library. Professionally themed for rapid development.
        </p>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Installation</h3>
          <CodeBlock copyText="npm install @tcbs/react-native-mazic-ui">
            {`npm install @tcbs/react-native-mazic-ui`}
          </CodeBlock>
        </div>

        <ul className="list-disc pl-6 text-gray-700 text-lg mt-20">
          <li>
            <Link href="/ui-home/theme" className="text-indigo-700 hover:underline">Theme Setup Example</Link>
          </li>
          <li>
            <Link href="/ui-home/tcbsbutton" className="text-indigo-700 hover:underline">TcbsButton Component Usage</Link>
          </li>
        </ul>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">License</h3>
          <p className="text-gray-700">MIT &copy; TechCraft By Subrata</p>
        </div>
      </section>
    </main>
  );
};

export default ClientUiHome;
