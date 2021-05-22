const appConfig = {
  details: {
    title: "Next.js + Supabase CMS",
    description:
      "A user-friendly cms built with react using next.js and supabase",
    siteUrl: process.env.NEXT_PUBLIC_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    cdnUrl: process.env.NEXT_PUBLIC_CDN_URL,
  },
  routes: {
    home: "/",
    about: "about",
    services: "services",
    contact: "contact",
    api: {
      url: process.env.NEXT_PUBLIC_API_URL,
      endpoints: {
        // include endpoints exposed via client side api routes
      },
    },
  },
  options: {
    toasts: { show: true },
    errors: { show: true, config: { tags: true } },
  },
};

appConfig.scaffold = {
  theme: "default",
};

appConfig.seo = {};

module.exports = appConfig;
