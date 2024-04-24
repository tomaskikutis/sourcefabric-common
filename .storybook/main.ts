import type {StorybookConfig} from '@storybook/react-vite';
import prettierConfig from '../.prettierrc';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    staticDirs: ['../node_modules/primeicons', '../.storybook/static'], // Configures the static asset folder in Storybook
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-storysource',
            options: {
                loaderOptions: {
                    prettierConfig: prettierConfig,
                },
            },
        },
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
