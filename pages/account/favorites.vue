<template>
  <div>
    <div class="bg-blue-400 text-white rounded py-8 px-12">
      <h1 class="text-3xl font-semibold">Mis favoritos</h1>
    </div>
    <div class="bg-white py-8 px-12 rounded">
      <div v-for="(item, index) in 8" :key="index" class="py-8 border-b">
        <travel class="w-full py-8" :favorite="true" />
        <div class="flex justify-end -mt-12">
          <button class="bg-red-400 text-white py-1 px-3 rounded font-bold">Remover</button>
        </div>
      </div>
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
