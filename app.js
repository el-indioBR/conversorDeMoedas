var dolar = 0
var real = 0
var euro = 0

var moedaEntrada = document.getElementById('in')
var moedaSaida = document.getElementById('out')

function update() {
  let valorSaida = moedaSaida.options[moedaSaida.selectedIndex]
  let valorEntrada = moedaEntrada.options[moedaEntrada.selectedIndex]
  let opcoes = document.getElementById('moeda')
  let resultado = document.getElementById('valorConvertido')

  resultado.innerHTML = ''

  if (valorEntrada.value == valorSaida.value)
    opcoes.innerHTML =
      'A moeda de entrada deve ser diferente da moeda de saída!'
  else if (valorEntrada.text == 'Dolar')
    opcoes.innerHTML = `Insira o valor em ${valorEntrada.text} U$`
  else if (valorEntrada.text == 'Real')
    opcoes.innerHTML = `Insira o valor em ${valorEntrada.text} R$`
  else opcoes.innerHTML = `Insira o valor em ${valorEntrada.text} €`
}

update()

function calcular() {
  let valorEntrada = moedaEntrada.options[moedaEntrada.selectedIndex].text
  let valorSaida = moedaSaida.options[moedaSaida.selectedIndex].text

  var valor = parseFloat(document.getElementById('valor').value)

  if (valorEntrada == 'Dolar' && valorSaida == 'Real') {
    real = valor * 4.83
    return real.toFixed(2)
  } else if (valorEntrada == 'Dolar' && valorSaida == 'Euro') {
    euro = valor * 0.91
    return euro.toFixed(2)
  } else if (valorEntrada == 'Real' && valorSaida == 'Dolar') {
    dolar = valor * 0.21
    return dolar.toFixed(2)
  } else if (valorEntrada == 'Real' && valorSaida == 'Euro') {
    euro = valor * 0.19
    return euro.toFixed(2)
  } else if (valorEntrada == 'Euro' && valorSaida == 'Dolar') {
    dolar = valor * 1.1
    return dolar.toFixed(2)
  } else if (valorEntrada == 'Euro' && valorSaida == 'Real') {
    real = valor * 5.31
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

  resultado.innerHTML = `O valor em ${valorSaida.text} é ${calcular()}`
}
