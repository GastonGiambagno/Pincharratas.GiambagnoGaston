let productos = [
    { id: 1, nombre: "Titular", precio: 12500, temporada: 2022, marca: "Ruge" },
    { id: 2, nombre: "Alternativa", precio: 11200, temporada: 2022, marca: "Ruge" },
    { id: 3, nombre: "Tercera", precio: 9800, temporada: 2022, marca: "Ruge" },
    { id: 4, nombre: "Arquero titular", precio: 11200, temporada: 2022, marca: "Ruge" },
    { id: 5, nombre: "Arquero suplente", precio: 10000, temporada: 2022, marca: "Ruge" },
    { id: 6, nombre: "Arquero tercera", precio: 8500, temporada: 2022, marca: "Ruge" },
    { id: 7, nombre: "Titular", precio: 11500, temporada: 2022, marca: "Ruge" },
    { id: 8, nombre: "Alternativa", precio: 10000, temporada: 2022, marca: "Ruge" },
    { id: 9, nombre: "Arquero titular", precio: 9900, temporada: 2022, marca: "Ruge" },
];

alert("Bienvenidos a PINCHARRATAS");
alert("Encontremos la camiseta que estas buscando!! Selecciona el parametro de busqueda que prefieras");
let filtroBusqueda1 = parseInt(prompt(`
1- Titular/Alternativa/Arquero/Etc.
2- Precio Maximo/Precio Minimo.
3- Temporada/Año
4- Marca`
));

    while (filtroBusqueda1 < 1 || filtroBusqueda1 > 4 || filtroBusqueda1 == Number) {
        alert('Error. Deberá colocar un valor entre 1 y 4');
        alert("Selecciona el parametro de busqueda que prefieras");
        filtroBusqueda1 = parseInt(prompt(`
        1- Titular/Alternativa/Arquero/Etc.
        2- Precio Maximo/Precio Minimo.
        3- Temporada/Año
        4- Marca`
        ));
    }

if(filtroBusqueda1 == "1") {
    alert("Selecciona el tipo de camiseta");
    filtroBusqueda2 = parseInt(prompt(`
    1- Titular
    2- Alternativa
    3- Tercera
    4- Arquero titular
    5- Arquero suplente
    6- Arquero tercera`
    ));

        while (filtroBusqueda2 < 1 || filtroBusqueda2 > 6 || filtroBusqueda1 == Number) {
            alert('Error. Deberá colocar un valor entre 1 y 6');
            alert("Selecciona el tipo de camiseta");
            filtroBusqueda2 = parseInt(prompt(`
            1- Titular
            2- Alternativa
            3- Tercera
            4- Arquero titular
            5- Arquero suplente
            6- Arquero tercera`
            ));
        }

    if(filtroBusqueda2 == "1") {
        filtroBusqueda2 = "Titular"
    }
    if(filtroBusqueda2 == "2") {
        filtroBusqueda2 = "Alternativa"
    }
    if(filtroBusqueda2 == "3") {
        filtroBusqueda2 = "Tercera"
    }
    if(filtroBusqueda2 == "4") {
        filtroBusqueda2 = "Arquero titular"
    }
    if(filtroBusqueda2 == "5") {
        filtroBusqueda2 = "Arquero suplente"
    }
    if(filtroBusqueda2 == "6") {
        filtroBusqueda2 = "Arquero tercera"
    }

    console.log(filtroBusqueda2)

    // el filtro tira solo uno, preguntar porque.

    let producto = productos.find((el) => el.nombre === filtroBusqueda2);

    let mensaje = ` Id: ${producto.id}
    Nombre: ${producto.nombre}
    Precio: $${producto.precio}
    Temporada: ${producto.temporada}
    Marca: ${producto.marca}`;
    alert(mensaje);
}

if(filtroBusqueda1 == "2") {
    alert("Selecciona si deseas buscar por precio maximo o precio minimo");
    filtroBusqueda2 = parseInt(prompt(`
    1- Precio maximo.-
    2- Precio minimo.`
    ));

        while (filtroBusqueda2 < 1 || filtroBusqueda2 > 2 || filtroBusqueda1 == Number) {
            alert('Error. Deberá colocar un valor entre 1 y 2');
            alert("Selecciona si deseas buscar por precio maximo o precio minimo");
            filtroBusqueda2 = parseInt(prompt(`
            1- Precio maximo.-
            2- Precio minimo.`
            ));
        }

    if(filtroBusqueda2 == "1") {
        let precio = parseInt(prompt("Ingrese el precio maximo"));
        let producto = productos.filter((el) => el.precio <= precio);
        let mensaje = ` Id: ${producto.id}
        Nombre: ${producto.nombre}
        Precio: $${producto.precio}
        Temporada: ${producto.temporada}
        Marca: ${producto.marca}`;
        alert(mensaje);
    }
    if(filtroBusqueda2 == "2") {
        filtroBusqueda2 = "Precio minimo"
    }



}


alert("GENIAL")
