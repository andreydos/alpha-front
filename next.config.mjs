import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CURRENT_DOMAIN: process.env.CURRENT_DOMAIN,
        COOKIE_SAME_SITE_MODE: process.env.COOKIE_SAME_SITE_MODE,
        API_URL: process.env.API_URL
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd17zai2v3rbvry.cloudfront.net',
                port: '',
                pathname: '/**',
            },
        ],
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.API_URL}/:path*`, // Use your API_URL from environment variables
            },
        ];
    },
};
export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

org: "sentry",
project: "javascript-nextjs",
sentryUrl: "http://193.22.147.125:8085/",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Automatically annotate React components to show their full name in breadcrumbs and session replay
reactComponentAnnotation: {
enabled: true,
},

// Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
// tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});