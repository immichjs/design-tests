new Vue({
    el: '#app',
    data: {
        hi: 'Hello world',
        inputClass: 'tracking-wide rounded-full p-3 bg-transparent border-2 border-gray-200 outline-none text-xs font-medifum antialiased text-gray-400 duration-300 active text-indent',
        clickInput: false
    },
    methods: {
        inputBorder(event) {
            event.target.classList.add('active')
        }
    }
})
