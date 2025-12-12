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

const mazicColorSectionDoc = `import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const { setMazicColor } = useTcbsColorStore();

React.useEffect(() => {
  setMazicColor('#174143'); // '#CC561E', '#1E3E62', '#089A9A', etc.
}, []);`;


const setThemeModeDoc = `import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const { setTcbsTheme } = useTcbsColorStore();

// Set theme mode to 'light', 'dark', or 'system'
React.useEffect(() => {
  setTcbsTheme('light'); // or 'dark', or 'system'
}, []);`;

const ThemePage: React.FC = () => {
  return (
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
<section className="mt-10">
  <h2 className="text-xl font-semibold text-indigo-700 mb-4">Access Theme State and Colors</h2>
  <p className="text-gray-700 mb-4">
    You can access the current theme value (<code>tcbsTheme</code>), the calculated theme mode (<code>currentThemeMode</code>), and the current colors object (<code>themeColors</code>) from <code>useTcbsColorStore</code>:
  </p>
  <CodeBlock command copyText={`import React from 'react';
import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const MyComponent = () => {
  const { tcbsTheme, currentThemeMode, themeColors } = useTcbsColorStore();

  return (
    <>
      <Text>Theme value: {tcbsTheme}</Text>
      <Text>Calculated mode: {currentThemeMode}</Text>
      <Text>Theme colors: {JSON.stringify(themeColors, null, 2)}</Text>
    </>
  );
};`}>{`import React from 'react';
import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const MyComponent = () => {
  const { tcbsTheme, currentThemeMode, themeColors } = useTcbsColorStore();

  return (
    <>
      <Text>Theme value: {tcbsTheme}</Text>
      <Text>Calculated mode: {currentThemeMode}</Text>
      <Text>Theme colors: {JSON.stringify(themeColors, null, 2)}</Text>
    </>
  );
};`}</CodeBlock>
<div className="mt-4 mb-6">
  <h3 className="font-semibold mb-2">Expected Values</h3>
  <ul className="list-disc pl-6 text-gray-700">
    <li>
      <b>tcbsTheme</b>: <code>&quot;light&quot;</code>, <code>&quot;dark&quot;</code>, or <code>&quot;system&quot;</code>
      <br />
      <span className="text-sm text-gray-500">User’s selected theme mode.</span>
    </li>
    <li>
      <b>currentThemeMode</b>: <code>&quot;light&quot;</code> or <code>&quot;dark&quot;</code>
      <br />
      <span className="text-sm text-gray-500">The effective theme mode (resolved from user or system).</span>
    </li>
    <li>
      <b>themeColors</b>: <code>{`{ btnColor, btnBorderColor, btnIconColor, themeColor, btnTextColor, ... }`}</code>
      <br />
      <span className="text-sm text-gray-500">An object with the current color values for the active theme.</span>
    </li>
  </ul>
</div>
</section>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Set a Single Mazic Color</h2>
          <p className="text-gray-700 mb-4">To quickly set a single Mazic color for your app, use the <code>setMazicColor</code> method as shown below:</p>
          <CodeBlock command copyText={mazicColorSectionDoc}>{mazicColorSectionDoc}</CodeBlock>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Set Theme Mode (Light, Dark, System)</h2>
          <p className="text-gray-700 mb-4">You can set the theme mode to <code>light</code>, <code>dark</code>, or <code>system</code> using <code>setTcbsTheme</code>:</p>
          <CodeBlock command copyText={setThemeModeDoc}>{setThemeModeDoc}</CodeBlock>
        </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Toggle Theme Mode</h2>
            <p className="text-gray-700 mb-4">You can use the <code>toggleTcbsTheme</code> function to quickly switch between theme modes. Here is an example using <code>TcbsButton</code>:</p>
            <CodeBlock command copyText={`import React from 'react';
  import { TcbsButton, useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

  const MyComponent = () => {
    const { tcbsTheme, toggleTcbsTheme } = useTcbsColorStore();

    return (
      <TcbsButton
        title={tcbsTheme}
        variant="primary"
        iconName="heart"
        iconPosition="left"
        onPress={() => toggleTcbsTheme()}
      />
    );
  };`}>{`import React from 'react';
  import { TcbsButton, useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

  const MyComponent = () => {
    const { tcbsTheme, toggleTcbsTheme } = useTcbsColorStore();

    return (
      <TcbsButton
        title={tcbsTheme}
        variant="primary"
        iconName="heart"
        iconPosition="left"
        onPress={() => toggleTcbsTheme()}
      />
    );
  };`}</CodeBlock>
          </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Ready-made Theme Modal</h2>
          <p className="text-gray-700 mb-4">You can use the ready-made <code>ThemeModal</code> component provided by <code>@tcbs/react-native-mazic-ui</code> for a user-friendly theme selection dialog. Here is how to use it:</p>
          <img src="/thememodal.png" alt="Theme Modal Example" className="rounded-lg border mb-4" style={{maxWidth: '250px', height: 'auto'}} />
          <CodeBlock command copyText={`import React from 'react';\nimport { ThemeModal, TcbsButton } from '@tcbs/react-native-mazic-ui';\n\nconst MyComponent = () => {\n  const [themeModalVisible, setThemeModalVisible] = React.useState(false);\n\n  return (\n    <>\n      <TcbsButton\n        title="No Border"\n        variant="no_border"\n        onPress={() => setThemeModalVisible(true)}\n        iconName="home"\n        iconPosition="left"\n      />\n      <ThemeModal\n        visible={themeModalVisible}\n        onClose={() => setThemeModalVisible(false)}\n      />\n    </>\n  );\n};`}>{`import React from 'react';\nimport { ThemeModal, TcbsButton } from '@tcbs/react-native-mazic-ui';\n\nconst MyComponent = () => {\n  const [themeModalVisible, setThemeModalVisible] = React.useState(false);\n\n  return (\n    <>\n      <TcbsButton\n        title="No Border"\n        variant="no_border"\n        onPress={() => setThemeModalVisible(true)}\n        iconName="home"\n        iconPosition="left"\n      />\n      <ThemeModal\n        visible={themeModalVisible}\n        onClose={() => setThemeModalVisible(false)}\n      />\n    </>\n  );\n};`}</CodeBlock>
        </section>

        <ul className="mt-6 mb-8 list-disc pl-6 text-gray-700">
          <li>Supports light and dark themes</li>
          <li>Customizable button, icon, and text colors</li>
          <li>Easy integration with <code>useTcbsColorStore</code></li>
        </ul>
      </div>
    </main>
  );
};

export default ThemePage;
