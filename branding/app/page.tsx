"use client";
import LangSetter from "./hook/lang-provider";
import { BradingHeader } from "./_component/header/header";

import BrandImage from "./_component/main/brand-image";

export default function Home() {
  return (
    <LangSetter>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <BradingHeader />
        <div className="bg-orange-50 w-full flex justify-center">
          <div className="w-[1025px] text-black flex flex-row items-center justify-center">
            <BrandImage />
          </div>
        </div>
      </main>
    </LangSetter>
  );
}
