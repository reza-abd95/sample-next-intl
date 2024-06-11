"use client";
import { Link } from "@/navigation";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function Header() {
  const router = useRouter();

  const localeHandler = (e) => {
    const nextLocale = e.target.innerText;
    const currentPath = window.location.pathname.split("/");
    currentPath[1] = nextLocale;
    const newPath = currentPath.join("/");
    router.replace(newPath);
  };
  return (
    <header className="flex [&_*]:m-1 items-center">
      <div>header</div>
      <div>choose lang :</div>
      <div
        onClick={localeHandler}
        className="cursor-pointer border border-black rounded-md p-1"
      >
        fa
      </div>
      <div
        onClick={localeHandler}
        className="cursor-pointer border border-black rounded-md p-1"
      >
        en
      </div>

      <ul className="flex">
        <li>
          <Link href="/" locale={useLocale()}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/page2" locale={useLocale()}>
            page2
          </Link>
        </li>
        <li>
          <Link href="/page3/pagenested4" locale={useLocale()}>
            page4
          </Link>
        </li>
      </ul>
    </header>
  );
}
