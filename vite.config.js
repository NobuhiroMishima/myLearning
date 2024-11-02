import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'server/uploads',
          dest: 'server'
        },
      ],
      errorOnMissing: false, // ファイルが存在しない場合にエラーを無視
    })
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
