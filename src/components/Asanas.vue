<template>
  <span class="text-3xl ml-2">Asanas catalog</span>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
    <div
      v-for="asana in asanas"
      :key="asana.name"
      class="flex flex-col mt-5 rounded-md bg-white group hover:border-primary"
    >
      <div class="relative flex justify-center">
        <div class="rounded-lg absolute h-auto w-5/6 bg-[#CAC9C9FF] top-1/2 transform -translate-y-1/2 mx-auto">
          <h2 class="text-center text-2xl mb-1 text-black z-10">{{ asana.name }}</h2>
        </div>
      </div>
      <img class="mt-2 items-center" :src="asana.imageUrl" :alt="asana.name" />
      <div class="dropdown dropdown-hover">
        <div class="relative bottom-2 left-2 w-10 h-10 bg-white border border-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlusIcon class="h-6 w-6 text-black" />
        </div>
        <ul tabindex="0" class="dropdown-content bg-[#CAC9C9FF] z-[1] menu p-2 shadow rounded-box w-full">
          <span class="text-center text-black mt-2">{{ asana.description }}</span>
          <li>
            <a class="mt-2">
              <PlusIcon class="h-6 w-6 text-black" />
              <p class="text-black">Add to Vinyasa</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import asanas from './data/asanas.js';
import { PlusIcon } from '@heroicons/vue/24/outline';

export default {
  data() {
    return {
      asanas: asanas,
    };
  },
  components: {
      PlusIcon
  }
}

</script>

<style>

</style>