<template>
  <div>
    <div class="bg-blue-400 text-white rounded py-8 px-12">
      <h1 class="text-3xl font-bold">Mis reservaciones</h1>
    </div>
    <div class="bg-white py-8 px-12 rounded">
      <travel v-for="(item, index) in 8" class="w-full border-b py-8" :key="index" :status="true" />
    </div>
  </div>
</template>

<script>
import Travel from "@/components/Travel.vue";
export default {
  layout: "account",
  components: {
    Travel
  }
};
</script>

<style></style>
