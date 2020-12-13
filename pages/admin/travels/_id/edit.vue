<template>
  <div>
    <div class="bg-white rounded py-8 px-12 mb-8">
      <h1 class="text-3xl font-bold ">Editar viaje</h1>
    </div>
    <div class="bg-white rounded py-8 px-12 mb-8">
      <form @submit.prevent="" class="">
        <label for="" class="block  mb-4">
          Título
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>

        <label for="" class="block  mb-4">
          Punto de salida
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>
        <div class=" bg-gray-100 py-8 px-8 rounded my-8">
          <div class="flex">
            <div class="w-1/2 pr-2">
              <label for="" class="block  mb-4">
                Fecha de inicio
                <input
                  type="number"
                  class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
                />
              </label>
            </div>
            <div class="w-1/2 pl-2">
              <label for="" class="block  mb-4">
                Fecha final
                <input
                  type="number"
                  class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
                />
              </label>
            </div>
          </div>
          <div class="text-center mt-3">
            <button class="bg-black text-white font-bold px-2 py-1 rounded">
              + Agregar fecha
            </button>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/2 pr-2">
            <label for="" class="block  mb-4">
              Precio
              <input
                type="number"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
          </div>
          <div class="w-1/2 pl-2">
            <label for="" class="block  mb-4">
              Disponibilidad
              <input
                type="number"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
          </div>
        </div>
        <label for="" class="block  mb-4">
          Descripción
          <textarea
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </label>
        <label for="" class="block  mb-4 w-1/2 pr-2">
          Fecha límite
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>
        <div class="border-t my-4"></div>
        <div class="flex justify-between w-full mb-4">
          <p>Imágenes</p>
          <button class="bg-black text-white font-bold px-3 py-1 rounded">
            + Agregar imágen
          </button>
        </div>
        <div class="flex flex-wrap mb-8">
          <div
            v-for="item in 5"
            :key="item"
            class="bg-gray-300 mr-2 mb-3 flex items-center justify-center h-40 w-56 rounded"
          >
            <img class="w-12 mr-2" src="/icon-image.svg" alt="" />
          </div>
        </div>
        <button
          class="bg-black px-4 w-full py-3 rounded text-white font-bold mb-4"
        >
          Publicar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin"
};
</script>

<style></style>
