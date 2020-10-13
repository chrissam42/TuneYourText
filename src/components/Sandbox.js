// import ControlPanel from "./ControlPanel.vue";

export default {
  name: "Sandbox",
  data: () => {
    var data = {
      defaults: {
        fontFamily: "Amstelvar",
        fontSize: 16,
        fontWidth: 100,
        fontWeight: 400,
        lineSpacing: 1.4,
        charSpacing: 0.0,
        wordSpacing: 0.0,
        columnWidth: 35.0,
        colorCombo: "black-on-white",
      },
      cpVisible: true,
    };
    
    Object.keys(data.defaults).forEach(k => {
      data[k]  = data.defaults[k];
    });
    
    return data;
  },
  computed: {
    allFonts() {
      return this.$store.state.fonts.fonts;
    },
    currentFont() {
      return this.allFonts[this.fontFamily];
    },
    fontNames() {
      return Object.keys(this.allFonts);
    },
    sandboxCSS() {
      return {
        fontFamily: this.cssFontFamily(this.fontFamily),
        fontSize: this.fontSize + 'px',
        fontStretch: this.fontWidth + '%',
        fontWeight: this.fontWeight,
        lineHeight: this.lineSpacing,
        letterSpacing: this.charSpacing + 'em',
        wordSpacing: this.wordSpacing + 'em',
        maxWidth: this.columnWidth + 'em',
      }
    },
  },
  methods: {
    cssFontFamily(fontname) {
      return this.$store.getters.cssFontFamily(fontname);
    },
    resetToDefaults(all) {
      Object.keys(this.defaults).forEach(k => {
        if (all || !k.match(/fontFamily|colorCombo/)) {
          this[k]  = this.defaults[k];
        }
      });
    }
  },
};
