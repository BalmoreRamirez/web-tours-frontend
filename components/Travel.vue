<template>
  <div class="flex w-full">
    <div
      class="bg-gray-200 h-40 w-1/3 flex items-center justify-center flex-shrink-0 mr-3 relative"
    >
      <img class="w-full h-full object-cover" src="/tour-1.jpg" alt />
      <button
        v-if="favorite"
        class="bg-black rounded-full w-8 h-8 absolute bottom-0 left-0 flex items-center justify-center"
      >
        <img src="/icon-add-favorite.svg" class="w-6" alt />
      </button>
    </div>
    <div class="text-gray-700 w-full">
      <p class="text-2xl font-semibold text-gray-700 mb-2">{{content.title || ''}}</p>
      <p class="text-lg">
        Fechas:
        <span
          v-for="(date, dateIndex) in content.dates"
          :key="dateIndex"
          class="font-semibold mr-1"
        >{{format(new Date(date.start_date), 'd MMM', { locale: es })}},</span>
      </p>
      <p class="leading-tight" v-if="content.dates.length">
        Días:
        <span class="font-semibold">{{ differenceInDays(new Date(content.dates[0].end_date), new Date(content.dates[0].start_date)) +1 }}</span>
      </p>
      <p class="truncate ...">
        Salida:
        <span class="font-semibold">{{content.start_place}}</span>
      </p>
      <!-- <p>Cupos disponibles: 2</p> -->
      <div v-if="status" class="flex items-center justify-end">
        <p class="mr-4">
          Reservaciones:
          <span class="font-semibold text-xl">2</span>
        </p>
        <span class="rounded px-2 text-white py-1 font-bold bg-red-400 text-sm">Pendiente</span>
      </div>
    </div>
  </div>
</template>

<script>
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
export default {
  name: "Travel",
  data: () => ({
    format,
    differenceInDays,
    es
  }),
  props: {
    status: {
      type: Boolean,
      deafult: false
    },
    favorite: {
      type: Boolean,
      deafult: false
    },
    content: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style></style>
