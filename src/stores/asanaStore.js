import { defineStore } from 'pinia'
import asanas from '/src/components/data/asanas'

export const useAsanaStore = defineStore('asanaStore', {
  state: () => ({
    asanas: [
      
    ],
  }),
  getters: {

  },
  actions: {
    addAsana(asana) {
      this.asanas.push(asana)
    }
  }
})