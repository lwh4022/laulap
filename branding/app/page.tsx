"use client";
import LangSetter from "./hook/lang-provider";
import { Header } from "./_component/header/header";

export default function Home() {
  return (
    <LangSetter>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
      </main>
    </LangSetter>
  );
}
