module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_ab: "#ffffffab", A700_d1: "#ffffffd1" },
        blue_gray: {
          400: "#8c8686",
          800: "#35354d",
          900: "#373333",
          "900_03": "#1f1f39",
          "900_02": "#313030",
          "100_3f": "#d9d9d93f",
          "900_01": "#373434",
          "400_af": "#8c8686af",
        },
        black: { 900: "#000000" },
        deep_purple: { 400: "#6b51cb", "100_59": "#d3cbf059" },
        gray: { 200: "#eeeeee", 700: "#65666b", 800: "#373946", 900: "#241f1f", "900_01": "#1e1e1e" },
        indigo: { "100_a3": "#b9b9e4a3" },
        cyan: { "300_99": "#60c1cd99" },
        blue_gray_100: "#d9d9d9",
      },
      boxShadow: { xs: "0px 4px  28px 0px #00000019" },
      fontFamily: { raleway: "Raleway", kanit: "Kanit", candal: "Candal", rammettoone: "Rammetto One", inter: "Inter" },
      opacity: { 0.9: 0.9 },
      backgroundImage: {
        gradient: "linear-gradient(178deg, #6b51cb,#60c1cd)",
        gradient1: "linear-gradient(90deg, #ffffff,#ffffff00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
