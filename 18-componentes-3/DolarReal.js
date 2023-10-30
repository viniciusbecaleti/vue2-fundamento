export const DolarReal = {
  name: "DolarReal",
  data() {
    return {
      brl: null
    }
  },
  methods: {
    async getDolarReal() {
      const response = await fetch("https://api.origamid.dev/exchange/usd")
      const data = await response.json()
      this.brl = data.rates.BRL
    }
  },
  created() {
    this.getDolarReal()
  },
  template: `<p>Dolar em reais: {{ brl }}</p>`,
}