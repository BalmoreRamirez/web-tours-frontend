<template>
  <div>
    <navbar />
    <div class="min-h-screen" style="background-color:#fafafa">
      <div class="container mx-auto py-20 flex">
        <div class="px-8 bg-white rounded-lg mr-6 flex-shrink-0 h-full" style="width:300px;">
          <div class="py-12 text-gray-600">
            <span class="font-black mb-6 block text-black text-sm">MENU</span>
            <nuxt-link class="block text-xl mb-8" to="/account">Mi perfil</nuxt-link>
            <nuxt-link class="block text-xl mb-8" to="/account/reservations">Mis reservaciones</nuxt-link>
            <nuxt-link class="block text-xl mb-8" to="/account/favorites">Mis favoritos</nuxt-link>
            <button @click.prevent="logout" class="block text-xl mb-8">Cerrar sesión</button>
          </div>
        </div>
        <div class="w-full">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Layout",
  middleware: "authenticated",
  data: () => ({}),
  components: {
    Navbar
  },
  methods: {
    logout() {
      this.$cookies.remove("auth");
      this.$cookies.remove("user");
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss">
.nuxt-link-exact-active {
  font-weight: 800;
  color: #004a8c;
}
</style>
