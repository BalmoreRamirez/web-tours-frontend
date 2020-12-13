<template>
  <main>
    <section class="py-20">
      <div class="container mx-auto bg-gray-200 rounded-lg py-24 px-12">
        <h1 class="font-semibold text-4xl mb-4">Encuentra tu proximo destino</h1>
        <label for class="block mb-4 w-2/3">
          Buscar destino
          <input
            type="text"
            class="block bg-white border-gray-400 rounded-lg py-3 px-4 w-full text-lg"
          />
        </label>
      </div>
    </section>
    <section class="py-12">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-1/3">
            <span class="block font-semibold">Filtros</span>
          </div>
          <div class="w-2/3">
            <travel
              v-for="(item, index) in list"
              :content="item"
              :key="index"
              :favorite="true"
              class="mb-8 border-b pb-8"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Travel from "@/components/Travel.vue";
export default {
  components: {
    Logo,
    Travel
  },
  data: () => ({
    list: []
  }),
  created() {
    this.getTravels();
  },
  methods: {
    async getTravels() {
      try {
        const list = await this.$axios.$get("/travels/published");
        this.list = list.data;
      } catch (error) {}
    }
  }
};
</script>

<style></style>
