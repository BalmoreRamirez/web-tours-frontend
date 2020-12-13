<template>
  <div>
    <div class="bg-blue-400 rounded py-8 px-12 text-white">
      <h1 class="text-3xl font-bold">Perfil agencia</h1>
    </div>

    <div class="bg-white rounded py-8 px-12">
      <div class="flex items-center">
        <div
          class="h-32 w-32 flex-shrink-0 mr-6 rounded-full bg-gray-300 flex items-center justify-center"
        >
          <img class="w-16" src="/icon-image.svg" alt />
        </div>
        <div>
          <button
            class="inline-flex border-b border-blue-600 text-blue-600 font-bold py-2"
          >Cambiar foto de perfil</button>
        </div>
      </div>
      <form @submit.prevent class="w-1/2 mt-8">
        <label for class="block mb-4">
          Nombre
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>

        <label for class="block mb-4">
          Apellido
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>

        <label for class="block mb-4">
          Teléfono
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>
        <label for class="block mb-4">
          Correo
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>
        <label for class="block mb-4">
          Fecha de nacimiento
          <input
            type="text"
            class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
          />
        </label>

        <button
          class="bg-green-500 px-12 ml-auto py-3 rounded text-white text-lg font-bold mb-4"
        >Actualizar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    name: null,
    logo: null,
    address: null,
    phone_number: null,
    mobile_number: null,
    email: null,
    description: null
  })
};
</script>

<style></style>

