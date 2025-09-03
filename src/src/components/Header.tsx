import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="bg-gray-100 shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold">
          {siteConfig.name}
        </Link>
        <ul className="flex space-x-4">
          {siteConfig.nav.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

