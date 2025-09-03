import { siteConfig } from "@/config/site";

export default function Projects() {
  return (
    <section className="py-16">
      <h1 className="mb-4 text-3xl font-bold">{siteConfig.projects.heading}</h1>
      <p className="text-gray-700">{siteConfig.projects.description}</p>
    </section>
  );
}

