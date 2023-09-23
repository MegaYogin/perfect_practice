<template>
  <h1 class="text-2xl my-5">Create New Vinyasa</h1>
  <form>
    <label>Name:</label><br />
    <input
      type="text"
      v-model="vinyasaName"
      placeholder="Enter the name of Vinyasa"
      class="input input-bordered input-primary w-full mt-2 mb-5 max-w-xs"
    />
    <br />

    <label>Description:</label><br />
    <input
      type="text"
      v-model="vinyasaDescription"
      placeholder="Enter the description of Vinyasa"
      class="input input-bordered input-primary w-full mt-2 max-w-xs"
    />

    <div class="w-2/3 mt-10">
      <h1 class="text-2xl">Breathing rate:</h1>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">One breath</span> 
          <input 
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
            v-model="selectedBreath"
            :value="1"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Two breaths</span> 
          <input 
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
            v-model="selectedBreath"
            :value="2"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Three breaths</span> 
          <input 
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
            v-model="selectedBreath"
            :value="3"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Four breaths</span> 
          <input 
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
            v-model="selectedBreath"
            :value="4"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Five breaths</span> 
          <input 
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
            v-model="selectedBreath"
            :value="5"
          />
        </label>
      </div>
    </div>
    <button
      class="btn btn-lg bg-black text-white mt-5"
      @click="createVinyasa()"
    >
    - CREATE -
    </button>
  </form>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useVinyasaStore } from '/src/stores/vinyasaStore.js';

export default defineComponent({
  setup() {
    const vinyasaName = ref('');
    const selectedBreath = ref(null);
    const vinyasaStore = useVinyasaStore();

    const createVinyasa = () => {
      if (vinyasaName.length > 0 && vinyasaDescription.length > 0)
      vinyasaStore.addVinyasa({
        name: vinyasaName.value,
        description: vinyasaDescription.value,
        asanas: [],
        selectedBreath: selectedBreath.value,
      });
      // Очистите поля формы после создания
      vinyasaName.value = '';
      vinyasaDescription.value = '';
    };

    // Следите за изменениями selectedBreath и снимайте выбор с других чекбоксов при изменении
    watch(selectedBreath, (newVal) => {
      // Для всех чекбоксов, кроме выбранного, снимите выбор
      const checkboxes = [1, 2, 3, 4, 5];
      checkboxes.forEach((value) => {
        if (value !== newVal) {
          selectedBreath.value = null;
        }
      });
    });

    return {
      vinyasaName,
      selectedBreath,
      createVinyasa,
    };
  },
});
</script>





