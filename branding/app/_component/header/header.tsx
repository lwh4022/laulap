"use client";
import { Layout } from "antd";
import { FormattedMessage } from "react-intl";

const { Header } = Layout;

export async function BradingHeader() {
  return (
    <Header className="flex items-center w-full">
      <div className="text-white font-bold text-xl">
        <FormattedMessage id={"serviceNme"} defaultMessage={"Laulap"} />
      </div>
    </Header>
  );
}
