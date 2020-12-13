<template>
  <div>
    <div class="bg-blue-400 text-white rounded py-8 px-12">
      <h1 class="text-3xl font-bold">Nuevo viaje</h1>
    </div>
    <div class="bg-white rounded py-8 px-12 mb-8">
      <div v-if="!$store.state.user.agency" class="py-32 text-center">
        <p
          class="text-4xl font-bold text-gray-500 text-center leading-none mb-6 max-w-xl mx-auto"
        >¡Aún no has completado la información de tu agencia!</p>
        <nuxt-link to="/admin/">Registrar aquí</nuxt-link>
      </div>
      <div v-else>
        <!-- <form @submit.prevent class> -->
        <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="submitForm">
          <ValidationProvider
            vid="title"
            name="titulo"
            tag="div"
            rules="required"
            v-slot="{ errors }"
          >
            <label for class="block">
              Título
              <input
                v-model="form.title"
                name="title"
                type="text"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
            <span
              class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
            >{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            vid="start_place"
            name="punto de salida"
            tag="div"
            rules="required"
            v-slot="{ errors }"
          >
            <label for class="block">
              Punto de salida
              <input
                v-model="form.start_place"
                name="start_place"
                type="text"
                class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              />
            </label>
            <span
              class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
            >{{ errors[0] }}</span>
          </ValidationProvider>
          <div class="bg-gray-100 py-8 px-8 rounded-lg my-8">
            <travel-date
              :class="{'border-b pb-4 mb-6' : dateIndex+1 < dates.length}"
              v-for="(date, dateIndex) in dates"
              :key="dateIndex"
              v-model="dates[dateIndex]"
            ></travel-date>
            <div class="text-center mt-3">
              <button
                @click.prevent="addDate"
                class="border border-blue-500 text-blue-500 font-bold px-12 py-1 rounded"
              >
                <span class="font-black text-xl">+</span> Agregar fecha
              </button>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/2 pr-2">
              <ValidationProvider
                vid="price"
                name="precio"
                tag="div"
                rules="required"
                v-slot="{ errors }"
              >
                <label for class="block">
                  Precio
                  <input
                    v-model="form.price"
                    name="price"
                    type="number"
                    class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
                  />
                </label>
                <span
                  class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                >{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="w-1/2 pl-2">
              <ValidationProvider
                vid="limit_date"
                name="fecha limite"
                tag="div"
                rules="required"
                v-slot="{ errors }"
              >
                <label for class="block pr-2">
                  Fecha límite
                  <input
                    v-model="form.limit_date"
                    name="limit_date"
                    type="text"
                    class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
                  />
                </label>
                <span
                  class="text-red-500 mt-1 leading-tight font-bold text-xs block mb-6"
                >{{ errors[0] }}</span>
              </ValidationProvider>
              <!-- <label for class="block">
                Disponibilidad
                <input
                  type="number"
                  class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
                />
              </label>-->
            </div>
          </div>
          <label for class="block">
            Descripción
            <div class="quill-editor-container blue-border mt-2">
              <div
                v-model="form.description"
                class="quill-editor"
                v-quill:myQuillEditor="editorOption"
              ></div>
            </div>
            <!-- <textarea
              class="block border border-gray-400 rounded py-2 px-4 w-full text-lg"
              name
              id
              cols="30"
              rows="3"
            ></textarea>-->
          </label>

          <div class="border-t my-10"></div>
          <div class="flex justify-between w-full mb-8">
            <p class="text-lg">Imágenes</p>
            <button class="border border-blue-500 text-blue-500 font-bold px-3 py-1 rounded">
              <span class="font-black text-xl">+</span> Agregar imágen
            </button>
          </div>
          <div class="flex flex-wrap mb-8">
            <div
              v-for="item in 5"
              :key="item"
              class="bg-gray-300 mr-2 mb-3 flex items-center justify-center h-40 w-56 rounded"
            >
              <img class="w-12 mr-2" src="/icon-image.svg" alt />
            </div>
          </div>

          <p
            v-if="message"
            class="rounded bg-green-500 text-white py-1 text-xl font-bold text-center mb-8"
          >{{message}}</p>
          <div class="flex justify-center">
            <button
              class="bg-blue-600 px-20 py-3 rounded text-white font-bold text-xl mb-4"
            >Publicar</button>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import TravelDate from "@/components/TravelDate.vue";
export default {
  layout: "admin",
  components: {
    TravelDate
  },
  data: () => ({
    message:null,
    form: {
      title: null,
      start_place: null,
      available: true,
      price: null,
      description: null,
      start_date: null,
      end_date: null,
      limit_date: null,
      images: []
    },
    dates: [{ start_date: null, end_date: null, reservation: null }],
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
  methods: {
    addDate() {
      this.dates.push({ start_date: null, end_date: null, reservation: null });
    },
    removeDate() {},
    async submitForm() {
      this.loading = true;
      this.error = null;
      const isValid = await this.$refs.form.validate();
      try {
        if (isValid) {
          const res = await this.$axios.$post("/travels", this.form);
          await this.submitDate(res.id);
          console.log(res);
          this.message = "¡Tu viaje ha sido registrado exitosamente!";
          this.$refs.form.reset();
        }
      } catch (error) {}
    },
    async submitDate(tour) {
      try {
        this.dates.forEach(async date => {
          const resDate = await this.$axios.$post(`/dates/travels/${tour}`, date);
          console.log(resDate);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
