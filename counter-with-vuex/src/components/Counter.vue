<template>
  <div>
    <h1>Contador: {{ counter }}</h1>
    <button @click="increment">Aumentar</button>
    <button @click="decrement">Diminuir</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['counter'])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
    ])
  }
}
</script>

<style>

</style>
