import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  "stories": ["../modules/**/*.mdx", "../modules/**/*.stories.@(js|jsx|ts|tsx)", "../pages/**/*.mdx", "../pages/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  "staticDirs": ['../public'],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    autodocs: 'tag'
  },
  features: {
    interactionsDebugger: true
  }
};
export default config;