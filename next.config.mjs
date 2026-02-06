/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // Optimize CSS processing
    experimental: {
        // optimizeCss: true, // Temporarily disabled due to critters issues
        // Enable modern React features
        optimizePackageImports: ['swiper'],
    },

    // Configure asset optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.pollinations.ai',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            }
            // أضف أي نطاقات صور أخرى تحتاجها
        ],
        formats: ['image/webp', 'image/avif'],
        // Enable image caching
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Enable CSS optimization
    webpack: (config, { dev, isServer }) => {
        // Optimize CSS in production
        if (!dev && !isServer) {
            config.optimization.splitChunks.cacheGroups.styles = {
                name: 'styles',
                test: /\.(css|scss)$/,
                chunks: 'all',
                enforce: true,
            };
        }

        return config;
    },

    // Cache configuration for Next.js 15
    generateBuildId: async () => {
        return 'build-' + Date.now();
    },

    // Enable compression
    compress: true,

    // Configure headers for caching
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, s-maxage=3600, stale-while-revalidate=7200',
                    },
                ],
            },
            {
                source: '/assets/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

// Bundle analyzer configuration
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
