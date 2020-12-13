<template>
  <div>
    <div class="bg-white rounded py-8 px-12 mb-8">
      <h1 class="text-3xl font-bold ">Reservaciones</h1>
      <p>Viaje #190</p>
    </div>
    <div class="bg-white rounded py-8 px-12">
      <travel class="w-full mb-3" />

      <div class="flex justify-between items-center mb-6">
        <h2 class="mt-8 mb-4 font-bold">Lista de reservaciones</h2>
        <button class="bg-black text-white font-bold rounded px-2 py-2">Agregar reservación</button>
      </div>
      <div>
        <div class="flex border-b pb-2">
          <div class="w-1/3 px-2 font-semibold">Usuario</div>
          <div class="w-1/3 px-2 font-semibold">Fecha</div>
          <div class="w-1/3 px-2 font-semibold text-center">Cupos</div>
        </div>
        <div
          v-for="item in 5"
          :key="item"
          class="flex items-center border-b  odd:bg-gray-200"
        >
          <div class="w-1/3 px-2 py-2 ">Rigoberto Gómez</div>
          <div class="w-1/3 px-2 py-2 ">14 junio, 2020</div>
          <div class="w-1/3 px-2 py-2 text-center">3</div>
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
  }
};
</script>

<style></style>
