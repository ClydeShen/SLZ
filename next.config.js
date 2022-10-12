/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = async (phase) => {
  const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    compress: false,
    optimizeFonts: true,
    // When the productionBrowserSourceMaps option is enabled,
    // the source maps will be output in the same directory as the JavaScript files.
    // Next.js will automatically serve these files when requested.
    productionBrowserSourceMaps: false,
    webpack: (config) => {
      const newConfig = config
      newConfig.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      return newConfig
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true
    },
    images: {
      domains: ['slz.vercel.app'],
      loader: 'imgix',
      path: 'https://slz.vercel.app/',
      minimumCacheTTL: 86400
    }
  }
  return withBundleAnalyzer(nextConfig)
}
