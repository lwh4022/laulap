import { IntlProvider } from "react-intl";

import { useZustandStore } from "../store/lang-store";

export default function LangSetter({
  children,
}: {
  children: React.ReactNode;
}) {
  const langauge = useZustandStore((state) => state.language);
  return (
    <IntlProvider locale={langauge} defaultLocale="en">
      {children}
    </IntlProvider>
  );
}
