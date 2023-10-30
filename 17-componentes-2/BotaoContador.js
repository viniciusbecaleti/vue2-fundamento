export const BotaoContador = Vue.component("BotaoContador", {
  name: "BotaoContador",
  data() {
    return {
      count: 0
    }
  },
  template: `<button @click="count++">Count {{ count }}</button>`
})