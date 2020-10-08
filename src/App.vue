<style lang="scss">
  #readability-matters-site {
    width: 100%;
    > header {
      border-bottom: 2px solid #d8c046;
      #logo-link {
        $height: 0.875in;
        display: inline-block;
        height: $height;
        box-sizing: border-box;
        padding: 0.1625in 4vw;
        img {
          height: 100%;
          width: auto;
        }
      }
    }
  }
</style>

<template>
  <div id="readability-matters-site">
    <header>
      <a id="logo-link" href="https://readabilitymatters.org/">
        <img src="./assets/images/rm-logo.png">
      </a>
    </header>
    <Sandbox />
  </div>
</template>

<script>
  import Sandbox from "./components/Sandbox.vue";
  
  export default {
    name: "TuneYourText",
    components: {
      Sandbox,
    },
    created() {
      this.$store.dispatch("injectStyles");
    },
    data: () => ({
    }),
    computed: {
    },
    methods: {
    },
    mounted: function() {
    }
  };
</script>

