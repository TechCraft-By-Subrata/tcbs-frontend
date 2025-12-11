export const metadata = {
  title: "Contribute to TCBS-CLI | TechCraft By Subrata",
  description: "Join the TCBS-CLI community and help improve production-ready boilerplates for full-stack development. Learn how to contribute and connect.",
  openGraph: {
    title: "Contribute to TCBS-CLI | TechCraft By Subrata",
    description: "Join the TCBS-CLI community and help improve production-ready boilerplates for full-stack development. Learn how to contribute and connect.",
    url: "https://tcbs-cli.com/contribute",
    siteName: "TCBS-CLI",
    images: [
      {
        url: "/TCBS.png",
        width: 1200,
        height: 630,
        alt: "Contribute to TCBS-CLI"
      }
    ]
  }
};

import ContributeClient from "../../components/ContributeClient";

export default function ContributePage() {
  return <ContributeClient />;
}
