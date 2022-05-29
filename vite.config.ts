import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src'), // src 路径
      '@api': path.resolve(__dirname, 'src/api'), // src 路径
      '@components': path.resolve(__dirname, 'src/components'), // src/api 路径
      '@common': path.resolve(__dirname, 'src/common'), // src/common 路径
      '@config': path.resolve(__dirname, 'src/config'), // src/config 路径
    },
  },
})
