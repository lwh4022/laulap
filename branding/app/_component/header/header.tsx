import { Layout, Menu } from "antd";
import { FormattedMessage } from "react-intl";

const { Header, Content, Footer } = Layout;

export async function BradingHeader() {
  return (
    <Header className="flex items-center w-full">
      <div className="demo-logo" />
    </Header>
  );
}
