import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 9999,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: 'node',
  },
});
