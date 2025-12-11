

"use client";
import React from "react";
import Link from "next/link";
import { colors } from "../../styles/colors";

const UiHomeMain: React.FC = () => (
  <main className="min-h-screen flex items-center justify-center bg-gray-50" style={{ background: colors.background }}>
    <div className="max-w-lg w-full p-10 rounded-xl shadow-lg bg-white" style={{ background: colors.background }}>
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">@tcbs/react-native-mazic-ui</h1>
      <ul className="space-y-6">
        <li>
          <Link href="/ui-home/theme" className="block px-6 py-4 rounded-lg border border-indigo-200 bg-indigo-50 text-indigo-700 font-semibold text-lg hover:bg-indigo-100 transition">
            1. How to use your app theme in this UI
          </Link>
        </li>
        <li>
          <Link href="/ui-home/tcbsbutton" className="block px-6 py-4 rounded-lg border border-indigo-200 bg-indigo-50 text-indigo-700 font-semibold text-lg hover:bg-indigo-100 transition">
            2. How to use TcbsButton
          </Link>
        </li>
        <li>
          <Link href="/" className="block px-6 py-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 font-semibold text-lg hover:bg-gray-100 transition">
            ← Go to Website Home
          </Link>
        </li>
      </ul>
    </div>
  </main>
);

export default UiHomeMain;
