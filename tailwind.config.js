module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ["Tomorrow", "system-ui"],
      serif: ["Tomorrow", "Georgia"],
      mono: ["Tomorrow", "SFMono-Regular"],
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};
