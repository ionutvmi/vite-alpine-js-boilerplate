import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    // lib: {
    //   entry: path.resolve(__dirname, "src/main.js"),
    //   name: "MyLib",
    //   formats: ["iife"],
    //   fileName: (format) => `my-lib.js`
    // },
  },
  server: {
    https: true,
  },
  plugins: [
    // On windows there is a conflict during the initial instalation
    // if the JAVA_HOME evironemnt variable is configured
    // https://github.com/liuweiGL/vite-plugin-mkcert/issues/15
    //   This is an issue only during the initial installation process
    //   as a workaround we can reset the variable temporarly.
    //   This is done in package.json > scripts using cross-env
    mkcert(),
  ],
});
