import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <div>page4</div>
      <div>{t("description")}</div>
    </div>
  );
}
