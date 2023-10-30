import { DolarReal } from "./DolarReal.js"

export const MarketCap = {
  name: "MarketCap",
  data() {
    return {
      marketcap: 0
    }
  },
  methods: {
    async getMarketCap() {
      const response = await fetch("https://api.origamid.dev/stock/aapl/quote")
      const data = await response.json()
      this.marketcap = data.marketCap
    }
  },
  created() {
    this.getMarketCap()
  },
  components: {
    DolarReal
  },
  template: `
    <div>
      <dolar-real></dolar-real>
      <p>MarketCap da Apple: {{ marketcap }}</p>
    </div>
  `,
}