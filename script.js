
var controle = document.querySelectorAll("#btn_atributos") // Criei um arrey com todos os btns //

controle.forEach((elemento) =>{
    elemento.addEventListener('click', (eventoAcontecido) =>{
 /* 
Add um escutador, esperando um clique para registrar o evento e executar a funcao "() =>"
ao colocar o parametro "eventoAcontecido" e dar um console.log eu consigo saber qual foi o evento e as informacoes. 
Dentro deste eventoAcontecido eu tenho a informacao do "target" que é o registro do elemento que recebeu o click. 
*/
        //var altDotarget = eventoAcontecido.target.alt //dentro do "target" eu busco o elemento alt especifico do botão que está sofrendo a ação //
        //var paiDoElementoClicado = eventoAcontecido.target.parentNode //busquei o "pai" do botão clicado.//
        manipulaDados(eventoAcontecido.target.className, eventoAcontecido.target.parentNode)
        //console.log(eventoAcontecido.target.className)
    }) 

}) 

function manipulaDados(conteudo, elementoPai){
    var elmnt = elementoPai.querySelector(".num_atributo") //busquei a classe do input APENAS dentro do elemento pai e não no documento todo.//
    //console.log(elementoPai)
    //console.log(conteudo)
   
     if (conteudo === 'btn_add'){
        elmnt.value = parseFloat(elmnt.value) + 1
    } else {
        elmnt.value = parseFloat(elmnt.value) - 1
    }
}

/*segundo o mdn: O método forEach() executa uma dada função em cada elemento de um array. 
Ele retornará 3 informacoes (o elemento clicado, o index e o array manipulado.)
Para verificar: 
controle.forEach((elemento, index, array) =>{
    console.log(elemento, index, array)
}) - retornará: id do botão, um número e os elementos do array.


function manipulaDados(acao){
    if (acao === 'add'){
        numAtributos.value = parseFloat(numAtributos.value) +1
    } else {
        numAtributos.value = parseFloat(numAtributos.value) - 1
    }
}

*/



/*
btnAdd.addEventListener('click', () =>{manipulaDados('somar')});

btnRem.addEventListener('click', () =>{manipulaDados('subtrair')})


*/