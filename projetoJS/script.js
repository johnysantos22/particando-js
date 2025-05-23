
const botao = document.getElementById('addItemBtn');
botao.addEventListener('click', clicarBotao)

let total = 0;

function clicarBotao() {
    const itemName = document.getElementById('itemName').value;
    const itemPriceStr = document.getElementById('itemPrice').value;
    const itemPrice = parseFloat(itemPriceStr);

    if (itemName.trim() !== '' && !isNaN(itemPrice) && itemPrice >= 0) {
        const lista = document.getElementById('itemList')
        const novoItem = document.createElement('li');
        novoItem.textContent = itemName + ' - R$ ' + itemPrice.toFixed(2);
        lista.appendChild(novoItem);

        total += itemPrice;
        document.getElementById('totalAmount').textContent = 'Total: R$ ' + total.toFixed(2);

        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
    } else {
        alert('Por favor, digite algo antes de adicionar');
    }
}

