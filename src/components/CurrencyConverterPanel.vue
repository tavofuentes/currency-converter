<template>
  <div class="currency-converter-panel">
    Currency converter
    <div v-for="(currency, index) in currencies" v-bind:key="index">
      <h1>{{currency}}</h1>
      <div v-for="(rate, index) in rates" v-bind:key="index">
        <p>{{rate.provider}} - {{rate[currency]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getRates } from '../modules/rates';

const INTERVAL_PERIOD = 3000;

export default {
  name: 'currency-converter-panel',
  components: {

  },
  data () {
    return {
      rates: [],
      currencies: [
        'BTC',
        'ETH',
        'XRP'
      ]
    }
  },
  mounted() {
    this.loadRates()
    this.startLoaderInterval();
  },
  destroyed() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    loadRates: function () {
      getRates().then(rates => {
        this.rates = rates;
      })
    },
    startLoaderInterval: function () {
      this.interval = setInterval(this.loadRates, INTERVAL_PERIOD)
    }
  }
}
</script>
