import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section className="py-16">
      <h1 className="mb-4 text-3xl font-bold">{siteConfig.about.heading}</h1>
      <p className="mb-2 text-gray-700">{siteConfig.about.description}</p>
    </section>
  );
}

