import { FJ } from "@firejet/cli";

const config: FJ.FireJetConfig = {
  groups: {
    default: {
      components: {
        Page_MenambahMembuatCatatanHifi: {
          defaultExport: true,
          path: "src/components/Page_MenambahMembuatCatatanHifi.tsx",
          exportName: "Page_MenambahMembuatCatatanHifi",
          structure: {
            type: "component",
            name: "Page_MenambahMembuatCatatanHifi",
            children: [],
            props: {},
          },
        },
      },
      globalCss: ["./styles.css"],
      postcssPath: "./postcss.config.js",
    },
  },
};

export default config;
