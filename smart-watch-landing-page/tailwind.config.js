module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md"
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [
        // Force chomp
        "html",
        "body"
      ].concat(
        require("purgecss-whitelister")([
          // Force chomp
          "./src/assets/styles/*.scss"
        ])
      ),
      whitelistPatterns: [
        // Force chomp
      ],
      whitelistPatternsChildren: [
        // Force chomp
      ],
      defaultExtractor: (content) => {
        return content.match(/[\w-/:]+(?<!:)/g) || [];
      }
    }
  },
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        xs: "480px"
      },
      colors: {
        theme: {
          primary: "#2186eb",
          "on-background": "#627d98",
          surface: "#e6f6ff",
          "on-surface": "#829ab1"
        }
      },
      spacing: {
        header: "70px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "1/2": "50%"
      },
      zIndex: {
        bg: "-1",
        "1": "1",
        "2": "2",
        "3": "3",
        fg: "999"
      }
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    boxShadow: {
      lg:
        "0 10px 15px 2px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 15px 25px 5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  },
  variants: {
    cursor: ["responsive", "disabled"]
  },
  container: {
    center: true,
    padding: "2rem"
  },
  plugins: []
};
