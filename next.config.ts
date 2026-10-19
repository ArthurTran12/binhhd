import type { NextConfig } from "next";

// Khi deploy lên GitHub Pages (arthurtran12.github.io/binhhd) workflow sẽ đặt NEXT_PUBLIC_BASE_PATH=/binhhd.
// Chạy local thì để trống.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages là host tĩnh, không có server tối ưu ảnh
    unoptimized: true,
  },
};

export default nextConfig;
