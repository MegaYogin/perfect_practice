<template>
  <span class="text-3xl ml-4">Your Vinyasa</span>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
    <label for="my-drawer-4">
      <div class="bg-white w-80 h-80 rounded-lg flex items-center justify-center">
        <div 
          class="w-60 h-60 bg-gray-300 rounded-full flex items-center justify-center"
        >
          <svg
            class="w-25 h-25 text-white"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
      </div>
    </label>
    <div v-if="vinyasaStore.vinCount !== 0">
      <div
        v-for="(vinyasa, index) in vinyasaStore.vinyasas"
        class="bg-white w-80 h-80 rounded-lg flex items-center justify-center"
        :key="index"
      >
          <div 
            class="flex items-center justify-center"
          >
            <span>{{ vinyasa.name }}</span>
            <span>{{ vinyasa.description }}</span>
            <span>{{ vinyasa.selectedBreath }}</span>
          </div>
        </div>
      </div>
    </div>
  <div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <div class="menu p-4 w-3/4 min-h-full bg-base-200 text-base-content">
        <VinyasaForm />
      </div>
    </div>
  </div>
</template>

<script>
import VinyasaForm from './VinyasaForm.vue';
import { defineComponent } from 'vue';
import { useAsanaStore } from '/src/stores/asanaStore.js';
import { useVinyasaStore } from '/src/stores/vinyasaStore.js';

export default defineComponent({
  components: { 
    VinyasaForm
  },
  setup() {
    const vinyasaStore = useVinyasaStore();

    // Ваша логика компонента

    return {
      vinyasaStore
    };
  }
});
</script>

<style>

</style>