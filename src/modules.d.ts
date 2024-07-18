declare module '@caijs/emoji' {
  function removeEmojis(message: string): string;
  export { removeEmojis };
}

declare module 'vite-plugin-s3' {
  import { Plugin } from 'vite';

  const viteS3: (object: Record<string, unknown>) => Plugin;
  export { viteS3 };
}
