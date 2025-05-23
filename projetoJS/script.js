
const botao = document.getElementById('addItemBtn');
botao.addEventListener('click', clicarBotao)

function clicarBotao() {

const itemName = document.getElementById('itemName').value;
const itemPrice = document.getElementById('itemPrice').value;


 document.getElementById('itemList').textContent = itemName;
 document.getElementById('totalAmount').textContent = itemPrice;

}