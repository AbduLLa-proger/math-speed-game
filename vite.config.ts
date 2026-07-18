import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost', // Ensures it binds strictly to localhost
    port: 4000,        // Sets the port to 4000
    strictPort: true,  // Optional: Prevents Vite from automatically trying the next available port if 4000 is busy
  }
});
