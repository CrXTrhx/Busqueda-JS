const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos();

})

const mostrarAutos = () => {

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = ` ${marca} / ${modelo} / ${year} / ${puertas} / ${transmision} / ${precio} / ${color}`;



        resultado.appendChild(autoHTML);
    });

}