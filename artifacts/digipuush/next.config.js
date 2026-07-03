/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/our-team', destination: '/about', permanent: true },
      { source: '/services/brand-strategy', destination: '/services/branding-creative', permanent: true },
      { source: '/services/digital-marketing', destination: '/services', permanent: true },
      { source: '/website-design', destination: '/services/website-development', permanent: true },
      { source: '/website', destination: '/services/website-development', permanent: true },
      { source: '/website-landing-page', destination: '/services/website-development', permanent: true },
      { source: '/search-engine-optimization', destination: '/services/seo', permanent: true },
      { source: '/social-media-marketing', destination: '/services/social-media-marketing', permanent: true },
      { source: '/social-media-marketing-services', destination: '/services/social-media-marketing', permanent: true },
      { source: '/influencer-marketing', destination: '/services/social-media-marketing', permanent: true },
      { source: '/performance-marketing', destination: '/services/paid-marketing', permanent: true },
      { source: '/ppc-services-pay-per-click', destination: '/services/paid-marketing', permanent: true },
      { source: '/lead-generation-services', destination: '/services/paid-marketing', permanent: true },
      { source: '/content-marketing', destination: '/services/geo-services', permanent: true },
      { source: '/creative', destination: '/services/branding-creative', permanent: true },
      { source: '/video-animation', destination: '/services/branding-creative', permanent: true },
      { source: '/work', destination: '/case-studies', permanent: true },
      { source: '/thank-you-web-development', destination: '/thank-you', permanent: true },
      { source: '/test', destination: '/', permanent: true },
      { source: '/home-2', destination: '/', permanent: true },
      { source: '/blog-2', destination: '/blog', permanent: true },
      { source: '/services-2', destination: '/services', permanent: true },
      { source: '/facebook-ads-advertising-promotion-cost-india', destination: '/blog/facebook-ads-cost-india', permanent: true },
      { source: '/what-is-digital-media-marketing', destination: '/blog/what-is-digital-marketing', permanent: true },
      { source: '/online-reputation-management-services-orm-services', destination: '/blog/online-reputation-management-services', permanent: true },
      { source: '/advantages-and-disadvantages-of-social-media', destination: '/blog', permanent: true },
      { source: '/grow-your-business-with-digital-marketing', destination: '/blog', permanent: true },
      { source: '/virtual-reality-companies-in-india', destination: '/blog', permanent: true },
      { source: '/category/digital-marketing', destination: '/blog', permanent: true },
      { source: '/nproject-category/:slug', destination: '/case-studies', permanent: true },
    ];
  },
};

export default nextConfig;
