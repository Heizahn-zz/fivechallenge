const buscador = document.getElementById('buscador')
const inputText = document.getElementById('inputText')

const buscadorReal = (data) => {

  buscador.addEventListener('keyup', async (e) => {
    e.preventDefault()

    const textoCliente = inputText.value.toLowerCase()
    const formularioFiltrado = data.filter(item => {
      const textoApi = item.name.toLowerCase()
      if (textoApi.indexOf(textoCliente) !== -1) {
        return item
      }
    })
    showNaciones(formularioFiltrado)
  })
}