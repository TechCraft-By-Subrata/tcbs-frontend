// "use client";
import FeaturesClient from "../../components/FeaturesClient";

export const metadata = {
  title: "TCBS-CLI Features | TechCraft By Subrata",
  description: "Explore all the production-ready features and boilerplates available in TCBS-CLI for React Native, Node.js, Next.js, and more.",
  openGraph: {
    title: "TCBS-CLI Features | TechCraft By Subrata",
    description: "Explore all the production-ready features and boilerplates available in TCBS-CLI for React Native, Node.js, Next.js, and more.",
    url: "https://tcbs-cli.com/features",
    siteName: "TCBS-CLI",
    images: [
      {
        url: "/TCBS.png",
        width: 1200,
        height: 630,
        alt: "TCBS-CLI Features Overview"
      }
    ]
  }
};

// ...existing code...
export default function FeaturesPage() {
  return <FeaturesClient />;
}

// In CodeBlock component, ensure <pre> uses 'overflow-x-auto' and 'break-words' for mobile friendliness.
