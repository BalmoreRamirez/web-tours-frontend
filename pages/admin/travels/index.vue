<template>
  <div>
    <div class="bg-blue-400 text-white rounded py-8 px-12">
      <h1 class="text-3xl font-bold">Viajes</h1>
    </div>
    <div class="bg-white py-8 px-12 rounded">
      <div v-if="!$store.state.user.agency" class="py-32 text-center">
        <p
          class="text-4xl font-bold text-gray-500 text-center leading-none mb-6 max-w-xl mx-auto"
        >¡Aún no has completado la información de tu agencia!</p>
        <nuxt-link to="/admin/">Registrar aquí</nuxt-link>
      </div>
      <div v-else>
        <div v-for="(item, index) in list" :key="index" class="py-6 border-b mb-8">
          <travel class="w-full" :content="item" />
          <div class="flex justify-end">
            <nuxt-link
              to="/admin/travels/190/reservations"
              class="rounded px-2 text-white py-1 font-bold bg-blue-500 mr-2"
            >Reservaciones</nuxt-link>
            <nuxt-link
              to="/admin/travels/190/edit"
              class="rounded px-2 text-white py-1 font-bold bg-green-500 mr-2"
            >Editar</nuxt-link>
            <button class="rounded px-2 text-white py-1 font-bold bg-red-400">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Travel from "@/components/Travel.vue";
export default {
  layout: "admin",
  components: {
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
        const list = await this.$axios.$get("/travels");
        this.list = list.data;
      } catch (error) {}
    }
  }
};
</script>

<style></style>
