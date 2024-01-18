/**
 * Vite is not used by the build process.
 * It is only needed for Storybook.
 */

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
});
