import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    path: "/",
    localPatterns: [
      {
        pathname: "/cars/**",
        search: "",
      },
      {
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
