<style lang="scss">
</style>

<template>
  <div id="readability-matters-site">
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

