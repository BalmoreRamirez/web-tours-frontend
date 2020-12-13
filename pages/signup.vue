<template>
  <main>
    <section class="min-h-screen h-screen">
      <div class="flex flex-wrap h-full">
        <div class="w-2/5 bg-gray-300 h-full flex justify-center items-center relative">
          <img src="/auth-cover.jpg" class="w-full h-full object-cover" alt />
          <div class="absolute bg-black opacity-25 w-full h-full left-0 top-0"></div>
        </div>

        <div class="w-3/5 flex flex-col justify-center h-full">
          <div class="px-20 max-w-2xl mx-auto w-full">
            <h1 class="text-4xl mb-6 font-bold text-blue-600">Registrate</h1>
            <ValidationObserver
              ref="form"
              tag="form"
              autocomplete="off"
              @submit.prevent="submitForm"
            >
              <div class="flex flex-wrap w-full">
                <div class="w-1/2 pr-2">
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
                        class="block border rounded py-2 px-4 w-full text-lg"
                        :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
                      />
                    </label>
                    <span
                      class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                    >{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="w-1/2 pl-2">
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
                        class="block border rounded py-2 px-4 w-full text-lg"
                        :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
                      />
                    </label>
                    <span
                      class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                    >{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
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
                    class="block border rounded py-2 px-4 w-full text-lg"
                    :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
                  />
                </label>
                <span
                  class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                >{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                vid="email"
                name="correo"
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
                    class="block border rounded py-2 px-4 w-full text-lg"
                    :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
                  />
                </label>
                <span
                  class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                >{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                vid="password"
                name="contraseña"
                tag="div"
                rules="required"
                v-slot="{ errors }"
              >
                <label for class="block">
                  Contraseña
                  <input
                    v-model="form.password"
                    type="password"
                    name="password"
                    class="block border rounded py-2 px-4 w-full text-lg"
                    :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
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
                    class="block border rounded py-2 px-4 w-full text-lg"
                    placeholder="YYYY/MM/DD"
                    :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
                  />
                </label>
                <span
                  class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                >{{ errors[0] }}</span>
              </ValidationProvider>
              <label for class="mb-4 block flex items-center">
                Registrar agencia
                <custom-switch v-model="form.is_agency" class="block ml-2" />
              </label>
              <span
                v-if="error"
                class="text-red-500 font-bold text-xl text-center block my-6"
              >{{error}}</span>
              <div v-if="message" class="text-green-500 font-bold text-xl text-center block my-6">
                {{message}}
                <nuxt-link to="/login" class="border-b font-semibold">Incia sesión aquí</nuxt-link>
              </div>

              <button
                class="bg-blue-600 px-4 w-full py-3 rounded text-white font-bold mb-4"
              >Registrarse</button>
              <p class="text-gray-700 text-center">
                ¿Ya tienes una cuenta?
                <nuxt-link class="font-semibold text-blue-600" to="/login">Inicia sesión</nuxt-link>
              </p>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CustomSwitch from "@/components/Switch.vue";
export default {
  layout: "auth",

  components: {
    CustomSwitch
  },
  data: () => ({
    loading: false,
    error: null,
    message: null,
    form: {
      name: null,
      last_name: null,
      email: null,
      phone: null,
      birth_date: null,
      password: null,
      is_agency: false
    }
  }),
  methods: {
    async submitForm() {
      this.loading = true;
      this.error = null;
      const isValid = await this.$refs.form.validate();
      try {
        if (isValid) {
          const res = await this.$axios.$post("/users", this.form);
          console.log(res);
          this.message = "¡Registrado exitosamente!";
        }
      } catch (error) {
        // "¡Correo electronico en uso!"
      }
    }
  }
};
</script>

<style></style>
