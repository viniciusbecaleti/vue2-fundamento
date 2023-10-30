export const Temperatura = {
  name: "Temperatura",
  data() {
    return {
      temperatura: null
    }
  },
  methods: {
    async getTemperatura() {
      const response = await fetch("https://api.origamid.dev/weather/rio")
      const data = await response.json()
      this.temperatura = Math.floor(data.consolidated_weather[0].max_temp)
    }
  },
  created() {
    this.getTemperatura()
  },
  template: `<p>Temperatura: {{ temperatura }}</p>`
}