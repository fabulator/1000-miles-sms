import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { viteS3 } from 'vite-plugin-s3';
import { VitePWA } from 'vite-plugin-pwa';

const deployToS3 = process.argv.some((arg) => arg === '--deploy-to-s3');

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'SMS 1000 Miles',
        theme_color: '#000000',
      },
    }),
    ...(deployToS3
      ? [
          viteS3({
            buildDir: `${process.cwd()}\\dist\\`,
            s3Options: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID,
              region: process.env.AWS_REGION,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
            s3UploadOptions: {
              ACL: 'public-read',
              Bucket: process.env.BUCKET_NAME,
            },
            uploadEnabled: true,
          }),
        ]
      : []),
  ],
  test: {
    coverage: {
      exclude: ['src/__mocks__', '**/*.test.tsx', '**/*.test.ts'],
      include: ['src'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: 'vitest.setup.ts',
  },
});
