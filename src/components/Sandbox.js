// import ControlPanel from "./ControlPanel.vue";

export default {
  name: "Sandbox",
  data: () => ({
    font: null
  }),
  created() {
    this.font = Object.keys(this.$store.state.fonts.fonts)[0];
  },
  computed: {
    fontInfo() {
      return this.$store.state.fonts.fonts;
    },
    fontNames() {
      return Object.keys(this.fontInfo);
    },
    sandboxCSS() {
      return {
        fontFamily: this.cssFontFamily(this.font),
      }
    },
  },
  methods: {
    cssFontFamily(fontname) {
      return this.$store.getters.cssFontFamily(fontname);
    },
  },
};
