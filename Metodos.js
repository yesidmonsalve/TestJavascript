
//Metodo Reduce
let EdadFamilia = [2,17,25,40,48];

let Reducido = EdadFamilia.reduce((acumulador, ValorActual)=>{
    console.log('Acumulador: ',acumulador, ' Valor Actual: ', ValorActual);
    return acumulador + ValorActual;

});



// Metodo Filter
let ApellidosColombianos = ["Bedoya", "Monsalve", "uran", "Barrios", "Villa"]

let Filtraado = ApellidosColombianos.filter(dato=>{
    return dato.startsWith("B")
})

console.log(Filtraado);

//Metodo Map

let mapeo = ApellidosColombianos.map(Apellido=>{
    return Apellido.concat(", Usted ha sido nominado a mejor actor")
})
console.log(mapeo);


// Metodo ForEach


EdadFamilia.forEach(edades =>{
    console.log(edades);
});