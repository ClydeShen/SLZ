/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

const nextConfigFunction = (phase, { defaultConfig }) => {
  console.log('phase', phase, defaultConfig)
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    compress: true,
    optimizeFonts: true,
    // Enable etags to allow caches to be more efficient and saves bandwidth
    // https://en.wikipedia.org/wiki/HTTP_ETag
    generateEtags: true,
    // When the productionBrowserSourceMaps option is enabled,
    // the source maps will be output in the same directory as the JavaScript files.
    // Next.js will automatically serve these files when requested.
    productionBrowserSourceMaps: true,
    // default configs
    useFileSystemPublicRoutes: true,
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    onDemandEntries: { maxInactiveAge: 60000, pagesBufferLength: 5 },
    httpAgentOptions: { keepAlive: true },
    experimental: {
      optimizePackageImports: [
        //@mui/icons-material, @mui/material, lodash are already optimized by default
        '@mui/lab',
        '@mui/styles',
        '@tc/ui-dfe/components',
        '@tc/ui-dfe/hooks',
        '@tc/ui-dfe/icons',
        '@tc/ui-dfe/utils'
      ]
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
      removeConsole:
        phase === PHASE_DEVELOPMENT_SERVER
          ? false
          : {
              exclude: ['error', 'debug']
            }
    },
    images: {
      domains: ['slz.vercel.app'],
      loader: 'imgix',
      path: 'https://slz.vercel.app/',
      minimumCacheTTL: 86400
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin'
            },
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=31536000; includeSubDomains; preload'
            }
          ]
        }
      ]
    }
  }

  return nextConfig
}
export default nextConfigFunction
