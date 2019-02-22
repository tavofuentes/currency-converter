<template>
  <div class="home">
    <CurrencyConverterPanel />
  </div>
</template>

<script>
// @ is an alias to /src
import CurrencyConverterPanel from '@/components/CurrencyConverterPanel.vue'

export default {
  name: 'home',
  components: {
    CurrencyConverterPanel
  }
}
</script>
