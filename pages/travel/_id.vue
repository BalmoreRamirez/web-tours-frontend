<template>
  <main>
    <section class="pt-16">
      <div class="container mx-auto ">
        <div
          class="bg-gray-200 rounded-lg h-80 flex items-center justify-center"
        >
          <img class="w-20" src="/icon-image.svg" alt="" />
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-2/3">
            <div class="py-8 pr-16">
              <h1 class="text-3xl mb-8">Tour - Ciudad de Guatemala</h1>
              <p>Fechas: mayo 1, mayo 8, junio 1</p>
              <p>Días: 2</p>
              <p class="truncate ...">Salida: Gasolinera Puma - La gran vía</p>
              <div class="mt-6">
                <p class="mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia ducimus at, voluptas ea sint ab facere fugiat quaerat
                  mollitia magnam obcaecati consectetur ipsa est cum rem laborum
                  neque nemo quidem! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Voluptates quae maxime rem officia, labore
                  sint, obcaecati eum, modi reprehenderit repudiandae porro
                  quisquam pariatur facilis mollitia voluptatibus id perferendis
                  officiis expedita? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quae, inventore. Nemo, sed? Fugit, enim
                  neque. Dolores, optio? Dignissimos ducimus rem amet veritatis
                  quidem, iste non tempora doloribus delectus ea laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia ducimus at, voluptas ea sint ab facere fugiat quaerat
                  mollitia magnam obcaecati consectetur ipsa est cum rem laborum
                  neque nemo quidem!
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/3 pr-8">
            <div class="bg-white shadow w-full rounded-lg -mt-12 p-8">
              <p class="font-bold text-2xl mb-4">Disponibilidad</p>
              <p class="mb-2">Cupos disponibles: 12</p>
              <p>Reservar</p>
              <div class="flex border rounded-lg overflow-hidden h-12 mb-6">
                <button
                  class="w-12 text-center text-center font-bold text-3xl text-white bg-black flex-shrink-0"
                >
                  +
                </button>
                <input value="4" type="text" class="w-full text-center" />
                <button
                  class="w-12 text-center text-center font-bold text-3xl text-white bg-black flex-shrink-0"
                >
                  -
                </button>
              </div>
              <label for="" class="block  mb-4">
                Seleccionar fecha
                <select
                  type="text"
                  class="block border border-gray-400 rounded py-2 px-4 w-full text-2xl bg-white"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
