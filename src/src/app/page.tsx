import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold">{siteConfig.hero.heading}</h1>
      <p className="mb-8 text-lg text-gray-600">{siteConfig.hero.subheading}</p>
      <div className="flex justify-center gap-4">
        <Link
          href="/projects"
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {siteConfig.hero.ctaProjects}
        </Link>
        <Link
          href="/contact"
          className="rounded border border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-50"
        >
          {siteConfig.hero.ctaContact}
        </Link>
      </div>
    </section>
  );
}

