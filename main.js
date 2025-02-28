const form = document.getElementById('form-calcular')

function validaNumero(numeroA,numeroB){
    return numeroA < numeroB;  
}

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const numeroASubmit = document.getElementById('number-a');
    const numeroBSubmit = document.getElementById('number-b');

    if (validaNumero(numeroASubmit.value,numeroBSubmit.value)) {
        alert('O numero digitado é válido!');
    }else{    
        alert('O numero é inválido!');
    }
})



console.log(form);