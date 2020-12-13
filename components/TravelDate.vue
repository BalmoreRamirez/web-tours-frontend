<template>
  <div class="flex flex-wrap">
    <div class="w-full text-right">
      <button class="border border-gray-600 rounded-full w-8 h-8 ml-auto font-black text-gray-600">X</button>
    </div>
    <div class="w-1/2 pr-2">
      <label for class="block mb-4">
        Fecha de inicio
        <input
          v-model="value.start_date"
          type="text"
          class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
        />
      </label>
    </div>
    <div class="w-1/2 pl-2">
      <label for class="block mb-4">
        Fecha final
        <input
          v-model="value.end_date"
          type="text"
          class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
        />
      </label>
    </div>
    <div class="w-1/2 pr-2">
      <label for class="block mb-4">
        Disponibilidad
        <input
          v-model="value.reservation"
          type="number"
          class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelDate",
  props: {
    value: {
      type: Object
    }
  }
};
</script>

<style>
</style>