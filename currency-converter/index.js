const axios = require('axios')

function conversor(quantidade) {
    axios.get('https://economia.awesomeapi.com.br/json/all')
        .then(res => {
            let data = res.data
            const { ...usd } = data.USD

            let init = quantidade
            let moedaConvertida = quantidade *= usd.high

            console.log(`R$ ${init.toFixed(2)} = $ ${moedaConvertida.toFixed(2)}`)
        })
}

conversor(999)
