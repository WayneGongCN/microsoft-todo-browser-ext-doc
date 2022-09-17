/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  introSidebar: [
    { type: 'autogenerated', dirName: 'intro' },
    { type: 'doc', label: '反馈问题', id: 'contribution/report-issues' },
    { type: 'link', label: '隐私政策', href: '/privacy-policy' },
    { type: 'link', label: '赞赏支持', href: '/support' },
    { type: 'link', label: '更新日志', href: 'https://github.com/WayneGongCN/microsoft-todo-browser-ext/blob/main/CHANGELOG.md' },

  ],

  contributionSidebar: [
    { type: 'autogenerated', dirName: 'contribution' }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
