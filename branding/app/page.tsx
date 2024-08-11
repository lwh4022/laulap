"use client";
import LangSetter from "./hook/lang-provider";
import { BradingHeader } from "./_component/header/header";

import GoogleMap from "./_component/map/google-map";

import Title from "antd/es/typography/Title";
import { Button } from "antd";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Category } from "./_component/badges/badge";
import { OverAll } from "./info/overall";

export default function Home() {
  return (
    <LangSetter>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <BradingHeader />
        <div className="w-full flex justify-center p-5">
          <div className="w-[1025px] text-black flex flex-col items-center justify-center">
            <Title>Hãy tìm địa điểm Việt Nam gần nhất</Title>
            <Title level={4}>
              Dịch vụ có sẵn bằng tiếng Việt sẽ được hiển thị trên bản đồ
            </Title>

            <div className="flex">
              <Button
                className="bg-slate-600 text-white"
                icon={<FaGooglePlay />}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/1DIu6Zj_oxES0qUhS-eZe-MKDEmlp94vOGULnyS0RQbY",
                    "_blank"
                  )
                }
              >
                Tải xuống Android
              </Button>
              <Button
                className="bg-slate-600 text-white"
                icon={<FaApple />}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/1DIu6Zj_oxES0qUhS-eZe-MKDEmlp94vOGULnyS0RQbY",
                    "_blank"
                  )
                }
              >
                Tải xuống Apple
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 w-full flex justify-center h-[400px] p-5 relative">
          <GoogleMap />
          <Category />
        </div>

        <div className="bg-yellow-50 w-full flex justify-center h-[600px] p-5">
          <OverAll />
        </div>
      </main>
    </LangSetter>
  );
}
