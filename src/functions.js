const getJson = async () => {
  let select_1_value = select_1.value
  let select_2_value = select_2.value
  let input_value = input_1.value

  const response = await fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=ed36c33db0b790c7b75b5e6b4100b7302269995c&from=${select_1_value}&to=${select_2_value}&amount=${input_value}&format=json`);
  const json = await response.json();
  output = json.rates[select_2_value]['rate_for_amount']

  input_2.classList.add('in-use')
  input_2.value = output
}


function know_currency() {

  let data = getJson()
}

function input_ready() {
  input_1.value = ''
  input_1.classList.add('in-use')
}