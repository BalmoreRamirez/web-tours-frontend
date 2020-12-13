<template>
  <main>
    <section class="min-h-screen h-screen">
      <div class="flex flex-wrap h-full">
        <div class="w-2/5 bg-gray-300 h-full flex justify-center items-center relative">
          <img src="/auth-cover.jpg" class="w-full h-full object-cover" alt />
          <div class="absolute bg-black opacity-25 w-full h-full left-0 top-0"></div>
        </div>

        <div class="w-3/5 flex flex-col justify-center h-full">
          <div class="px-20 max-w-2xl w-full mx-auto">
            <h1 class="text-4xl text-blue-600 mb-6 font-bold">Inicio de sesión</h1>
            <ValidationObserver
              ref="form"
              tag="form"
              autocomplete="off"
              @submit.prevent="submitForm"
            >
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
                    type="text"
                    name="email"
                    class="block border rounded py-2 px-4 w-full text-lg"
                    placeholder="correo@dominio.com"
                    :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
                  />
                </label>
                <span
                  class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                >{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                vid="password"
                name="constraseña"
                tag="div"
                rules="required"
                v-slot="{ errors }"
              >
                <label for class="block">
                  Contraseña
                  <input
                    v-model="form.password"
                    name="password"
                    type="password"
                    class="block border rounded py-2 px-4 w-full text-lg"
                    :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
                  />
                </label>
                <span
                  class="text-red-500 mt-1 leading-tight font-bold text-xs block"
                >{{ errors[0] }}</span>
              </ValidationProvider>
              <span
                v-if="error"
                class="text-red-500 font-bold text-xl text-center block mt-6"
              >{{error}}</span>
              <button
                type="submit"
                class="bg-blue-600 px-4 w-full py-3 rounded text-white font-bold mt-6 mb-4"
              >Ingresar</button>
              <nuxt-link
                to="/signup"
                class="bg-gray-200 border block text-center px-4 w-full py-3 rounded text-black font-bold"
              >Registrarse</nuxt-link>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "auth",
  data: () => ({
    loading: false,
    error: null,
    form: {
      email: null,
      password: null
    }
  }),
  methods: {
    async submitForm() {
      this.loading = true;
      this.error = null;
      const isValid = await this.$refs.form.validate();
      try {
        if (isValid) {
          const res = await this.$axios.$post("/auth/login", this.form);
          await this.$store.commit("setAuth", res.access_token);
          this.$cookies.set("auth", res.access_token);
          this.$cookies.set("agency", res.user.is_agency);
          // ------ get user info ----------
          const me = await this.$axios.$get("/me");
          await this.$store.commit("setUser", me);
          me.is_agency === 1
            ? this.$store.commit("setAgency", true)
            : this.$store.commit("setAgency", false);
          this.$cookies.set("user", me);
          me.is_agency === 1
            ? this.$router.push("/admin")
            : this.$router.push("/account");

          console.log(me);
        }
      } catch (error) {
        console.log(error);
        // error.response.data.message = "credentials invalid"
        //   ? (this.error = "Credenciales invalidas")
        //   : true;
      }
    }
  }
};
</script>

<style></style>
