import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { resolve, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const siblingsImagesDir = resolve(__dirname, '../www_veda-egypt_com/assets/images');

// Dev plugin: serves images from the sibling www_veda-egypt_com project
const serveSiblingImages = {
  name: 'serve-sibling-images',
  configureServer(server) {
    server.middlewares.use('/images', (req, res, next) => {
      const filePath = join(siblingsImagesDir, decodeURIComponent(req.url));
      const stream = createReadStream(filePath);
      stream.on('error', () => next());
      const ext = req.url.split('.').pop().toLowerCase();
      const types = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp' };
      if (types[ext]) res.setHeader('Content-Type', types[ext]);
      stream.pipe(res);
    });
  }
};

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [serveSiblingImages]
  }
});
