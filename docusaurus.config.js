// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const DEFAULT_TITLE = 'Microsoft To Do 浏览器扩展'


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: DEFAULT_TITLE,
  // tagline: 'Dinosaurs are cool',
  url: 'https://ms-todo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',



  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'waynegongcn', // Usually your GitHub org/user name.
  projectName: 'microsoft-todo-browser-ext', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/WayneGongCN/microsoft-todo-browser-ext-doc/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/WayneGongCN/microsoft-todo-browser-ext/tree/documents/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-QR2Z39S77X',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: DEFAULT_TITLE,
        logo: {
          alt: DEFAULT_TITLE,
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/index',
            position: 'left',
            label: '简介',
          },
          {
            type: 'doc',
            docId: 'contribution/index',
            position: 'left',
            label: '参与贡献',
          },
          { type: 'localeDropdown', position: 'right' },
          {
            href: 'https://github.com/WayneGongCN/microsoft-todo-browser-ext',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Wayne Gong.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: 'keywords', content: DEFAULT_TITLE }
      ]
    }),
};

module.exports = config;
