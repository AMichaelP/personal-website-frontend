import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.footer}
      </div>
    </footer>
  );
}

