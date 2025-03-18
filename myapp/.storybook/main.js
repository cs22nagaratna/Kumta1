

/*@type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    '@storybook-addon-react-router-v6',
    '@storybook-addon-react-router-dom'
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;  

