<template>
  <div id="app">
    <h1>Conversor de Reais (R$) para Dolar ($)</h1>
    <input type="text" placeholder="R$" ref="input" />
    <button @click="toConvert()">Calcular</button>
    <p>{{ usd.name }}</p>
    <p>R$ {{ afterBRL }} = $ {{ convertedDollar }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      usd: [],
      afterBRL: 0,
      brl: 0,
      convertedDollar: 0,
    };
  },
  created() {
    axios
      .get('https://economia.awesomeapi.com.br/json/all')
      .then((response) => {
        this.usd = response.data.USD;
      });
  },
  methods: {
    toConvert() {
      this.afterBRL = this.$refs['input'].value;
      this.brl = this.$refs['input'].value;

      const convertedValue = (this.brl *= this.usd.bid);
      this.convertedDollar = convertedValue.toFixed(2);
      this.$refs['input'].value = '';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
