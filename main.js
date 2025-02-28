const form = document.getElementById('form-calcular')

function validaNumero(numeroA,numeroB){
    const numA = numeroA.value;
    const numB = numeroB.value;
    return numB > numA; 
}

form.addEventListener('submit',function(e){
    e.preventDefault();
})

const numeroASubmit = document.getElementById('number-a');
const numeroBSubmit = document.getElementById('number-b');

if (validaNumero(numeroASubmit,numeroBSubmit)){
    alert('O numero digitado é válido!');
}else{

    alert('O numero é inválido!');
}

console.log(form);