// bismillah al-rahman al-rahim

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <h2>{t("description")}</h2>
    </div>
  );
}
