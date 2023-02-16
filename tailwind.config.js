module.exports = {
  // mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {},
      animation: {}
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
};
