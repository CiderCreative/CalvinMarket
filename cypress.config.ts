import { defineConfig } from "cypress";
import path from "path";
import fs, { closeSync } from "fs";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Define your custom task here
      on("task", {
        //prettier-ignore
        listFiles(directory: string) {
          const directoryPath = path.join(
            __dirname,
            "cypress/fixtures",
            directory,"/"
          );
          const files = fs.readdirSync(directoryPath);
          return files;
        },
      });

      // Return the config object is important
      return config;
    },
  },
});
