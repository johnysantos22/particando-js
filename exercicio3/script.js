const respostas = {
    'oi': 'Olá! Como posso te ajudar?',
    'tchau': 'até a próxima',
    'quem é você?': 'sou um assistente criado com javascript'
};

function responder(resposta) {
    return respostas[resposta.toLowerCase()]
}

console.log(responder('Oi'))