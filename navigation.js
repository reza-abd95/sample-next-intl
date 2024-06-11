import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales, localePrefix } from "./config.js";

export const { Link, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
