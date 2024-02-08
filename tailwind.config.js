module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBackDesk: "url('/src/assets/bg-intro-desktop.svg')",
        heroBackMob: "url('/src/assets/bg-intro-mobile.svg')",
      },
      colors: {
        pri: "hsl(233, 26%, 24%)",
        sec: "hsl(136, 65%, 51%)",
        thr: "hsl(192, 70%, 51%)",
      },
      fontFamily: {
        pub: "Public Sans",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
