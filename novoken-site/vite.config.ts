import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/",          // change later if repo name hosting, for now fine
  build: {
    outDir: "../docs",    // GitHub Pages will serve /docs
    emptyOutDir: false,
  }
});
