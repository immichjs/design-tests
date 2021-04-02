<template>
  <div id="app" class="flex items-center justify-center h-screen bg-purple-100">
    <form class="flex flex-col gap-4 p-12 bg-white rounded shadow-lg w-min">
      <h1 class="text-2xl text-center text-gray-400">
        Real Brasileiro para {{ usd.name }}
      </h1>
      <input type="text" placeholder="R$" ref="input" :class="inputStyle" />
      <input
        type="text"
        placeholder="$"
        v-model="convertedDollar"
        :class="inputStyle"
      />
      <button
        @click="toConvert($event)"
        class="p-4 mx-10 text-lg font-medium text-white duration-200 transform bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:scale-105"
      >
        Calcular
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      usd: [],
      beforeBRL: 0,
      afterBRL: 0,
      convertedDollar: '',
      inputStyle:
        'text-center border-2 rounded-lg p-3 px-20 text-lg font-medium bg-transparent outline-none text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent duration-200',
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
    toConvert(event) {
      event.preventDefault();
      this.beforeBRL = this.$refs['input'].value;
      this.afterBRL = this.$refs['input'].value;

      const convertedValue = (this.afterBRL *= this.usd.bid);
      this.convertedDollar = `$ ${convertedValue.toFixed(2)}`;
    },
  },
};
</script>

<style src="./assets/tailwind.css"></style>
