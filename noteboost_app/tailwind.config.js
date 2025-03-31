export default {
  content: ["./{src/**/,}*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "tt-rectangle-9tcontainer-trectangle-18bg-line":
          "url(/assets/Line.svg)",
        "t-bg-union-mata-pelajaran":
          "url(/assets/Union.svg)",
        "t-close": "url(/assets/Group.svg)",
      },
      fontFamily: { inter: "Inter, ui-sans-serif, system-ui, sans-serif" },
    },
  },
  plugins: [],
  mode: "jit",
};
