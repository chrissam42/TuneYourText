// import ControlPanel from "./ControlPanel.vue";

export default {
  name: "Sandbox",
  data: () => ({
    font: "Amstelvar",
    width: 100,
    weight: 400,
    lineSpacing: 1.4,
    charSpacing: 0.0,
    wordSpacing: 0.0,
  }),
  computed: {
    allFonts() {
      return this.$store.state.fonts.fonts;
    },
    currentFont() {
      return this.allFonts[this.font];
    },
    fontNames() {
      return Object.keys(this.allFonts);
    },
    sandboxCSS() {
      return {
        fontFamily: this.cssFontFamily(this.font),
        fontStretch: this.width + '%',
        fontWeight: this.weight,
        lineHeight: this.lineSpacing,
        letterSpacing: this.charSpacing + 'em',
        wordSpacing: this.wordSpacing + 'em',
      }
    },
  },
  methods: {
    cssFontFamily(fontname) {
      return this.$store.getters.cssFontFamily(fontname);
    },
  },
};
