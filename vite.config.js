import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   port: 3000, // Substitua 8081 pela porta que você deseja usar
  // },
  resolve: {
    alias: {
      // Certifique-se de que você tem um alias para 'axios'
      axios: 'axios',
    },
  },
});

