/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        if (!options.dev) {
          config.devtool = options.isServer ? true : 'your-custom-devtool'
        }
        return config
      },
};

export default nextConfig;
