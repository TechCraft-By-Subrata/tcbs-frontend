import React from "react";
import CodeBlock from "../components/CodeBlock";

const FeatureDetail: React.FC = () => (
  <main className="min-h-screen pt-16 pb-20 bg-gray-50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">@tcbs/react-native-mazic-ui</h1>
      <p className="text-lg text-gray-700 mb-8">
        A powerful React Native component library for rapid UI development. Includes ready-to-use components, theming, and utility hooks.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Installation</h2>
      <CodeBlock copyText="npm install @tcbs/react-native-mazic-ui">
        {`npm install @tcbs/react-native-mazic-ui`}
      </CodeBlock>
      <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Usage Example</h2>
      <CodeBlock copyText={`import { MazicButton } from '@tcbs/react-native-mazic-ui';

<MazicButton title="Click Me" onPress={() => alert('Hello!')} />`}>
        {`import { MazicButton } from '@tcbs/react-native-mazic-ui';

<MazicButton title="Click Me" onPress={() => alert('Hello!')} />`}
      </CodeBlock>
      <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Documentation</h2>
      <p className="text-gray-700 mb-4">See below for more code snippets and usage patterns. Add your full documentation here.</p>
      {/* Add more detailed docs and examples as needed */}
    </div>
  </main>
);

export default FeatureDetail;
