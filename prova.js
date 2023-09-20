

const RespArray = document.querySelector("#outArray");

// Array para armazenar os valores
var valores = [];
var i = 0;

// Obtém o campo de entrada e o botão
var valorInput = document.getElementById("valorArray");


// Define um evento de clique no botão
adicionarBotao.onclick = () => {
        var valor = parseFloat(valorArray.value); //parseFloat() converte uma string em um número de ponto flutuante (número decimal).
        
        if (valorArray.value.trim() === '' || valorArray.value < 0 || valorArray.value > 100) {
            alert('Insira um Valor entre 0 e 100');
        }
        
        else{
        // Adiciona o valor ao array
        valores.push(valor);
        
        // Limpa o campo de entrada
        valorArray.value = "";

       // Limpa o conteúdo atual de RespLista -> precisa limpar senão fica aparecendo duplicando.
       RespArray.innerText = "";
       //RespLista.innerText += `\n Índice ${i}: ${valores[i]}`;

        valores.sort(function(a, b) { //usado SORT na array "valores" para ordena
            return a - b;
           })

       // Exibe os itens e seus índices
       for (let i = 0; i < valores.length; i++) {
           //const listaArray = valores.join(", ")  //   apresenta ARRAY em lista separada por virgulas - converte em STRING.
           RespArray.innerText += ` ${valores[i]}`;
           //RespLista.innerHTML += listaArray;

               
    }
    }
}

removerBotao.onclick = () => {

    RespArray.innerText = "";
        
    if (valores.length === 0) {
        alert('Não Existem valores');
    }
    
    
    else{
        var ant = valores.length - 1;
    
        if (valores.indexOf(length) === valores.indexOf(ant))
        {
            valores.pop();
            valores.pop();
            RespArray.innerText += `\n ${valores} \n`;
        }
        else{
            
    // REMOVE o valor ao array
    valores.pop();
        

       RespArray.innerText += `\n ${valores} \n`;

    }
    }
}
