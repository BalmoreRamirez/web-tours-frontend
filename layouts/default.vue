<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Layout",
  data: () => ({
    
  }),
  components: {
    Navbar
  }
};
</script>
<style>

</style>
