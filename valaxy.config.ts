import { defineValaxyConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";
import { addonWaline } from "valaxy-addon-waline";
// add icons what you will need
const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {
    banner: {
      enable: true,
      title: "あなたの罪を数えよう",
      cloud: {
        enable: false,
      },
    },

    /*pages: [
      {
        name: "我的小伙伴们",
        url: "/links/",
        icon: "i-ri-genderless-line",
        color: "dodgerblue",
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],*/

    footer: {
      since: 2019,
      beian: {
        enable: true,
        icp: "蜀ICP备2023017018号",
      },
    },
  },

  unocss: { safelist },

  addons: [
    addonWaline({
      serverURL: "https://waline.itjourney.top",
      comment: true,
    }),
  ],
});
