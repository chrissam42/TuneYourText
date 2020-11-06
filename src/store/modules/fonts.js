
export default {
  state: () => ({
    fonts: {
      Amstelvar: {
        name: "Amstelvar",
        weights: [100, 400, 900],
        widths: [50, 100, 125],
        hasItalic: true,
      },
      IBMPlexSans: {
        name: "IBM Plex Sans",
        weights: [100, 400, 700],
        widths: [85, 100, 100],
        hasItalic: true,
      },
      RobotoFlex: {
        name: "Roboto Flex",
        weights: [100, 400, 1000],
        widths: [25, 100, 151],
        hasSlnt: -10,
      },
      RobotoSerif: {
        name: "Roboto Serif",
        weights: [100, 400, 900],
        widths: [50, 100, 150],
        hasItalic: true,
      },
    },
  }),
  getters: {
    cssFontFamily: () => (fontname) => {
      return `"${fontname} RM"`;
    },
    atFontFace: (state, getters) => (fontname, italic) => {
      const fontinfo = state.fonts[fontname];

      if (!fontinfo) {
        return "";
      }

      const filebase = italic ? `${fontname}-Italic` : fontname;
      const fontstyle = italic ? 'italic' : 'normal';

      return `@font-face {
        font-family: ${getters.cssFontFamily(fontname)};
        src: url("fonts/${filebase}.woff2") format("woff2");
        font-weight: ${fontinfo.weights[0]} ${fontinfo.weights[2]};
        font-style: ${fontstyle};
        font-stretch: ${fontinfo.widths[0]}% ${fontinfo.widths[2]}%;
      }`;
    },
    atFontFaces: (state, getters) => {
      let rules = [];
      for (let fontname in state.fonts) {
        const fontinfo = state.fonts[fontname]
        rules.push(getters.atFontFace(fontname));
        if (fontinfo.hasItalic) {
          rules.push(getters.atFontFace(fontname, true));
        }
      }
      return rules.join("\n\n");
    },
  },
  mutations: {
    // updateFont: function(state, payload) {
    // },
  },
  actions: {
    injectStyles: (context) => {
      //inject @font-face rules into document
      const style = document.getElementById('sandbox-font-faces') || document.createElement('style');
      style.id = "sandbox-font-faces";
      style.textContent = context.getters.atFontFaces;
      document.head.appendChild(style);
    },
  }
}

