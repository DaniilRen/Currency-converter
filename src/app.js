const input_1 = document.getElementById('input-1')
const input_2 = document.getElementById('input-2')
const select_1 = document.getElementById('select-1')
const select_2 = document.getElementById('select-2')
const know_currency_btn = document.querySelector('.know-currency')
const menu_button = document.getElementById('burger-menu-btn')
const menu = document.getElementById('menu')


input_1.addEventListener('focus', input_ready)

know_currency_btn.addEventListener('click', know_currency) 

menu_button.addEventListener('click', () => {
	menu.classList.toggle('hidden')
})


