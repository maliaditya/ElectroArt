import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/about.html", destination: "/about" },
      { source: "/contact-us.html", destination: "/contact-us" },
      { source: "/product.html", destination: "/product" },
      { source: "/gallary.html", destination: "/gallary" },
      { source: "/Download.html", destination: "/download" },
      { source: "/enquiry.php", destination: "/enquiry" },
      { source: "/:slug.html", destination: "/:slug" },
    ];
  },
};

export default nextConfig;
