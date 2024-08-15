/** @type {import('next').NextConfig} */

import Dotenv from "dotenv-webpack";
// const Dotenv = require("dotenv-webpack");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
};

export default nextConfig;
