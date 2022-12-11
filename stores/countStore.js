import { defineStore } from "pinia";
export const useCountStore = defineStore("CountStore", {
  state: () => {
    return {
      count: 42,
    };
  },
  getters: {},
  actions: {},
});
