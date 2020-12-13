

<template>
  <div>
    <div class="bg-blue-400 rounded text-white py-8 px-12">
      <h1 class="text-3xl font-bold">Perfil agencia</h1>
    </div>

    <div class="bg-white rounded py-8 px-12">
      <div class="flex items-center">
        <div class="text-center mr-8">
          <div
            class="h-32 w-32 flex-shrink-0 rounded-full bg-gray-300 flex items-center justify-center mb-2"
          >
            <img class="w-16" src="/icon-image.svg" alt />
          </div>
          <button
            class="inline-flex text-blue-600 border-b font-bold py-1 border-blue-600"
          >Cambiar logo</button>
        </div>

        <div >
          <h1 class="text-3xl font-semibold">{{form.name}}</h1>
          <p class="leading-tight mb-4">{{form.address}}</p>
        </div>
      </div>
      <ValidationObserver
        ref="form"
        tag="form"
        autocomplete="off"
        class="w-2/3 mt-8"
        @submit.prevent="submitForm"
      >
        <!-- <form @submit.prevent> -->
        <ValidationProvider vid="name" name="nombre" tag="div" rules="required" v-slot="{ errors }">
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
          <span class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          vid="address"
          name="direccion"
          tag="div"
          rules="required"
          v-slot="{ errors }"
        >
          <label for class="block">
            Dirección
            <input
              v-model="form.address"
              name="address"
              type="text"
              class="block border rounded py-2 px-4 w-full text-lg"
              :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
            />
          </label>
          <span class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          vid="phone"
          name="telefono"
          tag="div"
          rules="required"
          v-slot="{ errors }"
        >
          <label for class="block">
            Teléfono
            <input
              v-model="form.phone_number"
              name="phone"
              type="text"
              class="block border rounded py-2 px-4 w-full text-lg"
              :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
            />
          </label>
          <span class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          vid="cellphone"
          name="telefono"
          tag="div"
          rules="required"
          v-slot="{ errors }"
        >
          <label for class="block">
            Celular
            <input
              v-model="form.mobile_number"
              name="cellphone"
              type="text"
              class="block border rounded py-2 px-4 w-full text-lg"
              :class="[errors[0] ? 'border-red-400' : 'border-gray-400']"
            />
          </label>
          <span class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6">{{ errors[0] }}</span>
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
          <span class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6">{{ errors[0] }}</span>
        </ValidationProvider>

        <label for class="block mb-12">
          Descripción
          <div class="quill-editor-container blue-border">
            <div
              v-model="form.description"
              class="quill-editor"
              :content="content"
              v-quill:myQuillEditor="editorOption"
            ></div>
          </div>         
        </label>
        <p v-if="message" class="bg-green-500 text-white font-bold py-2 text-lg  w-full rounded text-center mb-4">{{message}}</p>
        <button
          type="submit"
          class="bg-green-500 px-12 ml-auto py-3 rounded text-white text-lg font-bold mb-4"
        >Actualizar</button>
        <!-- </form> -->
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    form: {
      name: null,
      logo: null,
      address: null,
      phone_number: null,
      mobile_number: null,
      email: null,
      description: null
    },
    message : null,
    content: "<p>Ingres descripcion</p>",
    editorOption: {
      theme: "snow",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["link"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          [{ header: 1 }, { header: 2 }]
        ]
      }
    }
  }),
  mounted() {
    if (this.$store.state.user.agency) {
      this.getData();
    }
  },
  methods: {
    async getData() {
      try {
        this.form = await this.$axios.$get(
          `/agencies/${this.$store.state.user.agency.id}`
        );
      } catch (error) {
        console.log(error);
      }
    },
    async submitForm() {
      this.loading = true;
      this.error = null;
      const isValid = await this.$refs.form.validate();
      try {
        if (isValid) {
          if (!this.form.id) {
            const resCreate = await this.$axios.$post("/agencies", this.form);

            console.log(resCreate);
            this.updateUser();
          } else {
            const resUpdate = await this.$axios.$put(
              `/agencies/${this.form.id}`,
              this.form
            );

            this.message = "¡Información actualizada correctamente!"
            console.log(resUpdate);
            this.updateUser();
          }
        }
      } catch (error) {
        console.log(error);
        // error.response.data.message = "credentials invalid"
        //   ? (this.error = "Credenciales invalidas")
        //   : true;
      }
    },
    async updateUser() {
      try {
        const me = await this.$axios.$get("/me");
        await this.$store.commit("setUser", me);

        this.$cookies.set("user", me);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
