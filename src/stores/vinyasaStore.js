import { defineStore } from 'pinia'

export const useVinyasaStore = defineStore('vinyasaStore', {
  state: () => ({
    vinyasas: [
      {
        id: 1,
        name: "Surya Namaskara",
        description: "Basic Vinyasa",
        selectedBreath: 3,
        
      },
    ],
  }),
  getters: {
    vinCount: (state) => state.vinyasas.length
  },
  actions: {
    addVinyasa(vinyasa) {
      this.vinyasas.push(vinyasa)
    }
  }
})