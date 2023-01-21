var dolar = 0
var real = 0
var euro = 0
var dolarReal = 0;
var dolarEuro = 0;
var euroReal = 0;
var euroDolar = 0;
var realDolar = 0;
var realEuro = 0;

var moedaEntrada = document.getElementById('in')
var moedaSaida = document.getElementById('out')

function update() {
  let valorSaida = moedaSaida.options[moedaSaida.selectedIndex]
  let valorEntrada = moedaEntrada.options[moedaEntrada.selectedIndex]
  let opcoes = document.getElementById('moeda')
  let resultado = document.getElementById('valorConvertido')

  resultado.innerHTML = ''
  valor.value = ''

  if (valorEntrada.value == valorSaida.value)
    opcoes.innerHTML = 'A moeda de entrada deve ser diferente da moeda de saída!'
  else if (valorEntrada.text == 'Dolar')
    opcoes.innerHTML = `Insira o valor em ${valorEntrada.text} U$`
  else if (valorEntrada.text == 'Real')
    opcoes.innerHTML = `Insira o valor em ${valorEntrada.text} R$`
  else opcoes.innerHTML = `Insira o valor em ${valorEntrada.text} €`
}

update()
api()

function calcular() {
  let valorEntrada = moedaEntrada.options[moedaEntrada.selectedIndex].text
  let valorSaida = moedaSaida.options[moedaSaida.selectedIndex].text


  var valor = parseFloat(document.getElementById('valor').value)

  if (valorEntrada == 'Dolar' && valorSaida == 'Real') {
    real = valor * dolarReal
    return real.toFixed(2)
  } else if (valorEntrada == 'Dolar' && valorSaida == 'Euro') {
    euro = valor * dolarEuro
    return euro.toFixed(2)
  } else if (valorEntrada == 'Real' && valorSaida == 'Dolar') {
    dolar = valor * realDolar
    return dolar.toFixed(2)
  } else if (valorEntrada == 'Real' && valorSaida == 'Euro') {
    euro = valor * realEuro
    return euro.toFixed(2)
  } else if (valorEntrada == 'Euro' && valorSaida == 'Dolar') {
    dolar = valor * euroDolar
    return dolar.toFixed(2)
  } else if (valorEntrada == 'Euro' && valorSaida == 'Real') {
    real = valor * euroReal
    return real.toFixed(2)
  }
}

function converter() {
  let resultado = document.getElementById('valorConvertido')
  let valorEntrada = moedaEntrada.options[moedaEntrada.selectedIndex]
  let valorSaida = moedaSaida.options[moedaSaida.selectedIndex]

  if (calcular() == 0) return alert('O valor não pode ficar vazio!')
  if (valorEntrada.value == valorSaida.value)
    return alert('A moeda de entrada deve ser diferente da moeda de saída!')

  if (valorSaida.value == 1)
    return resultado.innerHTML = `O valor em ${valorSaida.text} é $${calcular()}`
  if (valorSaida.value == 2)
    return resultado.innerHTML = `O valor em ${valorSaida.text} é R$${calcular()}`
  if (valorSaida.value == 3)
    return resultado.innerHTML = `O valor em ${valorSaida.text} é €${calcular()}`
}

function api() {
  fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BRL-USD,USD-EUR,EUR-USD,BRL-EUR`).then(resposta=>{
    return resposta.json()
  }).then(corpo=>{
   dolarReal = parseFloat(corpo.USDBRL.bid)
   dolarEuro = parseFloat(corpo.USDEUR.bid)
   euroReal = parseFloat(corpo.EURBRL.bid)
   euroDolar = parseFloat(corpo.EURUSD.bid)
   realDolar = parseFloat(corpo.BRLUSD.bid)
   realEuro = parseFloat(corpo.BRLEUR.bid)

//  dolarReal = 1
//  dolarEuro = 1
//  euroReal = 1
//  euroDolar = 1
//  realDolar = 1 
//  realEuro =
   
  })

}