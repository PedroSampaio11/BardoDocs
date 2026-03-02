import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Cryptograma | Engineering Hub",
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "01 — Engenharia",
          autogenerate: { directory: "01-engenharia" },
        },
        {
          label: "02 — Módulos",
          autogenerate: { directory: "02-modulos" },
        },
        {
          label: "03 — Design System",
          autogenerate: { directory: "03-design-system" },
        },
      ],
    }),
  ],
});
