<template>
  <div id="app"></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      data: {}
    }
  },
  created() {
    axios.get('https://viacep.com.br/ws/18072070/json').then(response => {
      this.data = response.data
      console.log(this.data)
    })
  }
}
</script>

<style lang="postcss">
</style>
