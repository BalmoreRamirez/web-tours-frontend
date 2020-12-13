<template>
  <header class="bg-white h-20 border-b">
    <div class="container mx-auto h-full">
      <nav class="flex justify-between items-center h-full">
        <nuxt-link to="/" class="flex items-center">
          <!-- <img class="w-8 mr-2" src="/icon-image.svg" alt="" /> -->
          <span class="font-black text-blue-600 text-4xl">Destinia</span>
        </nuxt-link>
        <div class="flex items-center divide-x divide-gray-200">
          <div v-if="!$store.state.auth" class="font-semibold mr-4">
            <nuxt-link to="/login" class="mr-4">Ingresar</nuxt-link>
            <nuxt-link to="/signup">Registrate</nuxt-link>
          </div>
          <nuxt-link v-else :to="$store.state.agency ? '/admin': '/account'" class="pl-4 flex items-center font-semibold">
            <div class="rounded-full bg-gray-200 w-12 h-12 mr-2 flex items-center justify-center">
              <img src="/user.png" class="w-full h-full object-cover" alt />
            </div>Mi cuenta
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
