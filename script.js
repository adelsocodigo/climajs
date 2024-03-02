// https://openweathermap.org/api

let urlBase= `https://api.openweathermap.org/data/2.5/forecast`
let api_key = `2641a5c3c357e46a7efa5f5d2525c1a9`;
let difkelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad= document.getElementById('ciudadEntrada').value
    if(ciudad) {
        fetchDatosClima(ciudad)
    }

})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data) {
    console.log(data);

    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.city.name;
    const paisNombre = data.city.country;
    const temperatura = data.list[0].main.temp - difkelvin; // Tomar la primera lectura del pronóstico
    const descripcion = data.list[0].weather[0].description; // Tomar la descripción del primer pronóstico
    const icono = data.list[0].weather[0].icon; // Obtener el código del icono

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.round(temperatura)}°C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

    // Crear elemento de imagen para el icono del clima
    const iconoClima = document.createElement('img');
    iconoClima.src = `https://openweathermap.org/img/w/${icono}.png`; // URL del icono proporcionado por OpenWeatherMap
    iconoClima.alt = 'Icono del clima';

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(iconoClima); // Agregar el icono del clima al div
}

       

        