const btns = document.querySelectorAll('#btn_atributos');
var inputPoints = document.querySelector(".point_atributo")
btns.forEach((elemento) =>{
    elemento.addEventListener('click', (evento)=>{
        //console.log(evento)
        //verificaValor(evento);
        manipulaPontos(evento);
    
        
        

    })
    
})

function manipulaPontos(evento){
    
    if (evento.target.className === 'btn_add'){
        inputPoints.value = parseFloat(inputPoints.value) - 1
    } 
    else { 
        inputPoints.value = parseFloat (inputPoints.value) + 1
    } 
}

/*function verificaValor(){
    var valorInput = document.querySelector(".point_atributo")
    var inputPoints = document.querySelector(".point_atributo")
    if (valorInput.value === '78'){
        alert ('acabaram os pontos!')
        inputPoints.value = parseFloat(inputPoints.value) - 0
    } else{}   
}

*/