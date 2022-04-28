// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  liveCodeBlock: {
    playgroundPosition: "bottom",
  },
  navbar: {
    title: "react-square-web-payments-sdk",
    logo: {
      alt: "react-square-web-payments-sdk",
      src: "img/logo.png",
    },
    items: [
      {
        type: "doc",
        docId: "getting-started",
        position: "left",
        label: "Docs",
      },
      { to: "/blog", label: "Blog", position: "left" },
      {
        href: "https://github.com/weareseeed/react-square-web-payments-sdk",
        label: "GitHub",
        position: "right",
      },
    ],
  },
  footer: {
    style: "light",
    links: [
      {
        title: "Docs",
        items: [
          {
            label: "Docs",
            to: "/docs",
          },
        ],
      },
      {
        title: "Company",
        items: [
          {
            label: "GitHub",
            href: "https://github.com/weareseeed",
          },
          {
            label: "About",
            href: "https://seeed.us/team/",
          },
        ],
      },
      {
        title: "Community",
        items: [
          {
            label: "Instagram",
            href: "https://www.instagram.com/seeedsocial/",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/seeedus/",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/seeedsocial",
          },
          {
            label: "Facebook",
            href: "https://www.facebook.com/seeedsocial",
          },
        ],
      },
    ],
    logo: {
      alt: "react-square-web-payments-sdk logo",
      src: "img/logo.png",
      href: "https://react-square-payments.weareseeed.com",
      width: 48,
    },
    copyright: `Copyright © ${new Date().getFullYear()} Seeed, LLC — Florida, USA`,
  },
  prism: {
    // @ts-ignore - the types of the themes are ok
    theme: lightCodeTheme,
    // @ts-ignore - the types of the themes are ok
    darkTheme: darkCodeTheme,
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "react-square-web-payments-sdk",
  tagline:
    "Easily create PCI-compliant inputs to accept payments online with the Square Payments SDK",
  url: "http://react-square-payments.weareseeed.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "weareseeed",
  projectName: "rswps-site",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          editUrl: "https://github.com/weareseeed/rswps-site/tree/main/blog/",
          showReadingTime: true,
        },
        docs: {
          editUrl: "https://github.com/weareseeed/rswps-site/tree/main/docs/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    "@docusaurus/theme-live-codeblock",
    [
      "@docusaurus/plugin-ideal-image",
      {
        disableInDev: false,
      },
    ],
  ],

  themeConfig,
};

module.exports = config;
