import React from "react";
import ClientUiHome from "../../components/ClientUiHome";
import { colors } from "../../styles/colors";

export const metadata = {
  title: "Mazic UI Showcase | TCBS-CLI",
  description: "Showcase and documentation for @tcbs/react-native-mazic-ui, including theme setup and TcbsButton usage.",
  openGraph: {
    title: "Mazic UI Showcase | TCBS-CLI",
    description: "Showcase and documentation for @tcbs/react-native-mazic-ui, including theme setup and TcbsButton usage.",
    url: "https://tcbs-cli.com/ui-home",
    siteName: "TCBS-CLI",
    images: [
      {
        url: "/TCBS.png",
        width: 1200,
        height: 630,
        alt: "Mazic UI Showcase"
      }
    ]
  }
};

export default function UiHomePage() {
  return <ClientUiHome colors={colors} />;
}
