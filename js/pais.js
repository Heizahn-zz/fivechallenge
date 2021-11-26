const nacion = document.getElementById('naciones');
const query = new URLSearchParams(window.location.search);
const params = query.get('name');
console.log(params)


const url = 'https://restcountries.com/v2/all';

document.addEventListener('DOMContentLoaded', e => {
  fetchData()
});

const fetchData = async () => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    const filtroData = data.filter(item => item.name === params)
    console.log(data)
    showNaciones(filtroData)
  } catch (error) {
    console.log(error)
  }
}

const showNaciones = (pais) => {
  let elementos = ''

  pais.forEach(item => {
    elementos += `
    <section class="paisUnico">
        <div class="imgContainer">
          <img src=${item.flags.svg} alt="${item.cioc}">
        </div>
        <div class="detallesPais">
          <h3>${item.name}</h3>
          <div class="infoPais">
            <div class="primerDetalle">
              <p><b>Population: </b>${item.population}</p>
              <p><b>Region: </b>${item.region}</p>
              <p><b>Sub Region: </b>${item.subregion}</p>
              <p><b>Capital: </b>${item.capital}</p>
            </div>
            <div class="primerDetalle segundoDetalle">
              <p><b>Top Level Domain: </b>${item.topLevelDomain}</p>
              <p><b>Currencies: </b>${item.currencies}</p>
              <p><b>Languages: </b>${item.languages}</p>
            </div>
          </div>
        </div>
      </section>
    `
  });

  nacion.innerHTML = elementos

}