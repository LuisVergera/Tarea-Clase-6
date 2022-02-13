/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


const $grupoFamiliar= document.querySelector("#cantidad-integrantes");
const $botonSiguiente= document.querySelector("#siguiente");
const $botonLimpiar= document.querySelector("#limpiar")


$botonSiguiente.onclick=function(event){
    let $cantidadIntegrantes= Number($grupoFamiliar.value)
    crearIntegrante($cantidadIntegrantes)
   
    event.preventDefault();
}


$botonLimpiar.onclick=function(){

    borrarIntegrantesAnteriores()

}

function crearIntegrante($cantidadIntegrantes){

    for (let i=0;i<$cantidadIntegrantes;i++){

        crearInputs(i)

    }
    
}

function crearInputs(input){
    const $div=document.createElement('div');
    $div.className="integrante"
    
    const $label=document.createElement('label')
    $label.textContent= "edad del integrante" + (input + 1)

    const $input=document.createElement('input')
    $input.type='number'
    $input.className='edad'

    $div.appendChild($label)
    $div.appendChild($input)

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);

}


function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
    }
  }


const $botonCalcular=document.querySelector("#calcular")  

let $edadFamiliares= document.querySelectorAll(".edad")
let edadFamiliares= Number($edadFamiliares).value

$botonCalcular.onclick= function(event){
    const edades=obtenerEdades()

    mostrarResultados("mayor",obtenerMayorNumero(edades))
    mostrarResultados("menor",obtenerMenorNumero(edades))
    mostrarResultados("promedio",obtenerPromedio(edades))

    event.preventDefault();
}



function obtenerMayorNumero(numeros){
    let numeroMaximo= (numeros[0])  
    for (let i=1; i<numeros.length;i++){
        if (numeros[i]>numeroMaximo){
            numeroMaximo= numeros[i];
        }
    }
    return numeroMaximo;
}

function obtenerMenorNumero(numeros){
    let numeroMinimo= (numeros[0]);
    for (let i=1;i<numeros.length;i++){
        if (numeros[i]<numeroMinimo){
            numeroMinimo=numeros[i];
        }
    }
    return numeroMinimo;
}


function obtenerPromedio(numeros){
    let acumulador=0
    for (let i=0; i<numeros.length;i++){
        acumulador+= numeros[i]
    }
    return acumulador/numeros.length
}

function obtenerEdades (){
    let $edadFamiliares= document.querySelectorAll(".edad")
    const edades= [];    
    for (let i= 0; i< $edadFamiliares.length;i++){

        edades.push(Number($edadFamiliares[i].value))
    }
    return edades;
}

function mostrarResultados(tipo, valor){

    document.querySelector(`#${tipo}-edad`).textContent= valor

}


