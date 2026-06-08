

//Todas las marcas dependiedno de los filtros
const resultado = document.querySelector('#resultado');


//Variables de los selects
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const marca = document.querySelector('#marca');


//MAXIMO Y MINIMO de años de venta de la agencia
const maxyear = new Date().getFullYear();
const min = maxyear - 10;


//Objeto de la busqueda
const datoBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

}


//funcion que llena la seccion de resultados
const mostrarAutos = (autos) => {

    limpiarHtml();
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = ` ${marca} / ${modelo} / ${year} / ${puertas} / ${transmision} / ${precio} / ${color}`;


        resultado.appendChild(autoHTML);

    });


}

function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//llena el select de manera dinamica para 
function llenarSelect() {

    for (let i = maxyear; i >= min; i--) {
        const año = document.createElement('OPTION');
        año.value = i;
        año.textContent = i;
        year.appendChild(año);
    }

}

const filtrarMarca = (auto) => {
    const { marca } = datoBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

const filtrarYear = (auto) => {
    const { year } = datoBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}
const filtrarMin = (auto) => {
    const { minimo } = datoBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

const filtrarMax = (auto) => {
    const { maximo } = datoBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

const filtrarPuerta = (auto) => {
    const { puertas } = datoBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}


const filtrarTrans = (auto) => {
    const { transmision } = datoBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}
const filtrarColor = (auto) => {
    const { color } = datoBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}

function mensajeNoResultados() {
    limpiarHtml();
    noResult = document.createElement('P');
    noResult.classList.add('alert', 'error');
    noResult.textContent = "No tenemos carros con esas especificaciones disponibles";
    resultado.appendChild(noResult);
}
//llenar bsuqueda
const busqueda = () => {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuerta).filter(filtrarTrans).filter(filtrarColor);


    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        mensajeNoResultados();
    }
}




//Llamada de funciones cuando acaba de cargar el documento
document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos(autos);

    llenarSelect();

})


marca.addEventListener('change', (e) => {
    datoBusqueda.marca = e.target.value;
    busqueda();
})

year.addEventListener('change', (e) => {
    datoBusqueda.year = e.target.value;
    busqueda();
})

maximo.addEventListener('change', (e) => {
    datoBusqueda.maximo = e.target.value;
    busqueda();
})

minimo.addEventListener('change', (e) => {
    datoBusqueda.minimo = e.target.value;
    busqueda();
})

puertas.addEventListener('change', (e) => {
    datoBusqueda.puertas = e.target.value;
    busqueda();
})

transmision.addEventListener('change', (e) => {
    datoBusqueda.transmision = e.target.value;
    busqueda();
})

color.addEventListener('change', (e) => {
    datoBusqueda.color = e.target.value;
    busqueda();
})
