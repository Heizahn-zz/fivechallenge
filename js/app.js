const naciones = document.getElementById('naciones');
const url = 'https://restcountries.com/v2/all';

document.addEventListener('DOMContentLoaded', e => {
  fetchData()
});

const fetchData = async () => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    showNaciones(data)

    buscadorReal(data) //Activa filtro nos busqueda

    filtradoRegion(data)//Activa filtro por region
  } catch (error) {
    console.log(error)
  }
}

const showNaciones = (pais) => {
  let elementos = ''

  pais.forEach(item => {
    elementos += `
    <a href="pais.html?name=${item.name}">
      <article class="cardNacion">
        <img src=${item.flag} alt="${item.name}">
        <div class="detalles">
          <h3>${item.name}</h3>
          <p><b>Population: </b>${item.population}</p>
          <p><b>Region: </b>${item.region}</p>
          <p><b>Capital: </b>${item.capital}</p>
        </div>
      </article>
    </a>
    `
  });

  naciones.innerHTML = elementos

}