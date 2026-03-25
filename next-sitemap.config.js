/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.bodybalanceks.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      "https://www.bodybalanceks.com/server-sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    // Boost priority for high-value pages
    const highPriority = ["/", "/services/hormone-therapy", "/services/weight-management"];
    const medPriority = [
      "/services",
      "/services/lab-testing",
      "/services/sexual-health",
      "/contact",
    ];
    let priority = config.priority;
    if (highPriority.includes(path)) priority = 1.0;
    else if (medPriority.includes(path)) priority = 0.85;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
