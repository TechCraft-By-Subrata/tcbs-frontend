"use client";
import React from "react";
import Link from "next/link";
import CodeBlock from "../../../components/CodeBlock";
import { colors } from "../../../styles/colors";

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

const TcbsButtonPage: React.FC = () => (
  <main className="min-h-screen flex items-center justify-center bg-gray-50" style={{ background: colors.background }}>
    <div className="max-w-2xl w-full p-10 rounded-xl shadow-lg bg-white" style={{ background: colors.background }}>
      <Link href="/ui-home" className="text-indigo-600 hover:underline mb-6 inline-block">← Back to UI Home</Link>
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">How to use TcbsButton</h1>
      <div className="mb-6">
          <CodeBlock command copyText="npm install @tcbs/react-native-mazic-ui">
          {`npm install @tcbs/react-native-mazic-ui`}
        </CodeBlock>
      </div>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Introduction</h3>
        <p className="text-gray-700 mb-4">The <code>TcbsButton</code> component from <code>@tcbs/react-native-mazic-ui</code> is a versatile, customizable button designed for modern React Native applications. It supports multiple sizes, variants, icon groups, accessibility features, and custom styles, making it an essential building block for interactive UIs.</p>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Basic Usage</h3>
          <CodeBlock command copyText={`import { TcbsButton } from '@tcbs/react-native-mazic-ui';\n\n<TcbsButton\n  title=\"Submit\"\n  onPress={() => console.log('Pressed')}\n/>`}>
          {`import { TcbsButton } from '@tcbs/react-native-mazic-ui';

<TcbsButton
  title="Submit"
  onPress={() => console.log('Pressed')}
/>`}
        </CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Size Variations</h3>
          <CodeBlock command copyText={`<TcbsButton title=\"Large\" size=\"large\" onPress={...} />\n<TcbsButton title=\"Medium\" size=\"medium\" onPress={...} />\n<TcbsButton title=\"Small\" size=\"small\" onPress={...} />`}>
          {`<TcbsButton title="Large" size="large" onPress={...} />
<TcbsButton title="Medium" size="medium" onPress={...} />
<TcbsButton title="Small" size="small" onPress={...} />`}
        </CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Variant Styles</h3>
          <CodeBlock command copyText={`<TcbsButton title=\"Primary\" variant=\"primary\" onPress={...} />\n<TcbsButton title=\"Secondary\" variant=\"secondary\" onPress={...} />\n<TcbsButton title=\"No Border\" variant=\"no_border\" onPress={...} />`}>
          {`<TcbsButton title="Primary" variant="primary" onPress={...} />
<TcbsButton title="Secondary" variant="secondary" onPress={...} />
<TcbsButton title="No Border" variant="no_border" onPress={...} />`}
        </CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Icon Integration</h3>
          <CodeBlock command copyText={`<TcbsButton\n  title=\"AntDesign\"\n  iconName=\"check\"\n  iconGroup=\"AntDesign\"\n  iconPosition=\"left\"\n  onPress={...}\n/>\n<TcbsButton\n  title=\"Feather\"\n  iconName=\"arrow-right\"\n  iconGroup=\"Feather\"\n  iconPosition=\"right\"\n  onPress={...}\n/>\n<TcbsButton\n  title=\"Top Icon\"\n  iconName=\"star\"\n  iconGroup=\"FontAwesome\"\n  iconPosition=\"top\"\n  onPress={...}\n/>`}>
          {`<TcbsButton
  title="AntDesign"
  iconName="check"
  iconGroup="AntDesign"
  iconPosition="left"
  onPress={...}
/>
<TcbsButton
  title="Feather"
  iconName="arrow-right"
  iconGroup="Feather"
  iconPosition="right"
  onPress={...}
/>
<TcbsButton
  title="Top Icon"
  iconName="star"
  iconGroup="FontAwesome"
  iconPosition="top"
  onPress={...}
/>`}
        </CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Custom Colors and Styles</h3>
          <CodeBlock command copyText={`<TcbsButton\n  title=\"Custom\"\n  style={{ backgroundColor: '#222' }}\n  textStyle={{ color: '#FFD700' }}\n  onPress={...}\n/>`}>
          {`<TcbsButton
  title="Custom"
  style={{ backgroundColor: '#222' }}
  textStyle={{ color: '#FFD700' }}
  onPress={...}
/>`}
        </CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Accessibility</h3>
          <CodeBlock command copyText={`<TcbsButton\n  title=\"Accessible\"\n  accessibilityLabel=\"Submit button\"\n  accessibilityHint=\"Submits the form\"\n  accessibilityRole=\"button\"\n  onPress={...}\n/>`}>
          {`<TcbsButton
  title="Accessible"
  accessibilityLabel="Submit button"
  accessibilityHint="Submits the form"
  accessibilityRole="button"
  onPress={...}
/>`}
        </CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Disabled State</h3>
          <CodeBlock command copyText={`<TcbsButton\n  title=\"Disabled\"\n  disabled\n  onPress={...}\n/>`}>
          {`<TcbsButton
  title="Disabled"
  disabled
  onPress={...}
/>`}
        </CodeBlock>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Summary</h3>
        <p className="text-gray-700">TcbsButton is a robust, flexible component for building interactive, accessible, and visually appealing buttons in React Native. By leveraging its variants, sizes, icon support, and customization options, you can create a consistent and professional user experience across your application.<br/>For a full list of props, refer to the exported <code>TcbsButtonProps</code> type in the package documentation.</p>
      </section>
    </div>
  </main>
);

export default TcbsButtonPage;
