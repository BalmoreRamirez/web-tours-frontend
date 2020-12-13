<template>
  <div>
    <div class="bg-blue-400 rounded py-8 px-12 text-white">
      <h1 class="text-3xl font-bold">Mi perfil</h1>
    </div>

    <div class="bg-white rounded py-8 px-12">
      <div class="flex items-center mb-8">
        <div
          class="h-32 w-32 flex-shrink-0 mr-4 rounded-full bg-gray-300 flex items-center justify-center"
        >
          <img class="w-16" src="/icon-image.svg" alt />
        </div>
        <div>
          <button
            class="inline-flex text-blue-700 font-bold py-2 px-4 rounded border-blue-700 border"
          >Cambiar foto de perfil</button>
        </div>
      </div>
      <!-- <form @submit.prevent class="w-1/2 mt-12"> -->
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="submitForm">
        <div class="w-2/3">
          <ValidationProvider
            vid="name"
            name="nombre"
            tag="div"
            rules="required"
            v-slot="{ errors }"
          >
            <label for class="block">
              Nombre
              <input
                v-model="form.name"
                name="name"
                type="text"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
            <span
              class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
            >{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            vid="last_name"
            name="apellido"
            tag="div"
            rules="required"
            v-slot="{ errors }"
          >
            <label for class="block">
              Apellido
              <input
                v-model="form.last_name"
                name="last_name"
                type="text"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
            <span
              class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
            >{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            vid="phone"
            name="teléfono"
            tag="div"
            rules="required"
            v-slot="{ errors }"
          >
            <label for class="block">
              Teléfono
              <input
                v-model="form.phone"
                name="phone"
                type="text"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
            <span
              class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
            >{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            vid="phone"
            name="teléfono"
            tag="div"
            rules="required|email"
            v-slot="{ errors }"
          >
            <label for class="block">
              Correo
              <input
                v-model="form.email"
                name="email"

                type="text"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
            <span
              class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
            >{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            vid="date"
            name="fecha"
            tag="div"
            rules="required"
            v-slot="{ errors }"
          >
            <label for class="block">
              Fecha de nacimiento
              <input
                v-model="form.birth_date"
                name="date"
                type="text"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
            <span
              class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
            >{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="flex mt-8">
          <button
            class="bg-green-600 px-12 py-3 rounded text-white text-lg font-bold mb-4"
          >Actualizar</button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  layout: "account",
  data: () => ({
    loading: false,
    error: null,
    form: {
      name: null,
      last_name: null,
      phone: null,
      email: null
    }
  }),
  mounted() {
    this.form = this.$store.state.user;
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.error = null;
      const isValid = await this.$refs.form.validate();
      try {
      } catch (error) {}
    }
  }
};
</script>

<style></style>
