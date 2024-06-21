import './style.css'

const arrayzapatillas = [
  {
    id: 1,
    marca: 'Nike Original',
    name: 'Air Max 90',
    modelo: 'Air Max 90',
    title: 'Zapatilla Nike',
    img: './assets/Air Max 90.png',
    price: '120.00€'
  },
  {
    id: 2,
    marca: 'New Balance',
    name: 'NB 9060',
    modelo: 'NB 9060',
    title: 'Zapatilla New Balance',
    img: 'assets/NB 9060.png',
    price: '80.00€'
  },
  {
    id: 3,
    marca: 'Nike Original',
    name: 'Metcon 9',
    modelo: 'Nike Metcon 9',
    title: 'Zapatilla Nike',
    img: 'assets/Nike Metcon 9.png',
    price: '90.00€'
  },
  {
    id: 4,
    marca: 'Adidas Original',
    name: 'Forum Low',
    modelo: 'Forum Low',
    title: 'Zapatilla Adidas',
    img: 'assets/Forum Low.png',
    price: '100.00€'
  },
  {
    id: 5,
    marca: 'Adidas Original',
    name: 'Campus',
    modelo: 'Campus',
    title: 'Zapatilla Adidas',
    img: 'assets/Campus.png',
    price: '120.00€'
  },
  {
    id: 6,
    marca: 'New Balance',
    name: 'NB 327',
    modelo: 'NB 327',
    title: 'Zapatilla New Balance',
    img: 'assets/NB 327.png',
    price: '120.00€'
  },
  {
    id: 7,
    marca: 'Nike Original',
    name: 'Dunk Low',
    modelo: 'Dunk Low',
    title: 'Zapatilla Nike',
    img: 'assets/Dunk Low.png',
    price: '100.00€'
  },
  {
    id: 8,
    marca: 'Adidas Original',
    name: 'Gazelle',
    modelo: 'Gazelle',
    title: 'Zapatilla Adidas',
    img: 'assets/Gazelle.png',
    price: '90.00€'
  },
  {
    id: 9,
    marca: 'Nike Original',
    name: 'Air Max 97 ',
    modelo: 'Nike Air Max 97',
    title: 'Zapatilla Nike',
    img: 'assets/Nike Air Max 97.png',
    price: '150.00€'
  },
  {
    id: 10,
    marca: 'Adidas Original',
    name: 'Handball Spezial',
    modelo: 'Handball Spezial',
    title: 'Zapatilla Adidas',
    img: 'assets/Handball Spezial.png',
    price: '140.00€'
  },
  {
    id: 11,
    marca: 'Nike Original',
    name: 'Air Force 1',
    modelo: 'Air Force 1',
    title: 'Zapatilla Nike',
    img: 'assets/Air Force 1.png',
    price: '130.00€'
  },
  {
    id: 12,
    marca: 'New Balance',
    name: 'NB 9060',
    modelo: 'NB 9060',
    title: 'Zapatilla New Balance',
    img: 'assets/NB 9060-2.png',
    price: '100.00€'
  },
  {
    id: 13,
    marca: 'New Balance',
    name: 'NB 550',
    modelo: 'NB 550',
    title: 'Zapatilla New Balance',
    img: 'assets/NB 550.png',
    price: '140.00€'
  },
  {
    id: 14,
    marca: 'Nike Original',
    name: 'Full Force Low',
    modelo: 'Full Force Low',
    title: 'Zapatilla Nike',
    img: 'assets/Full Force Low.png',
    price: '70.00€'
  },
  {
    id: 15,
    marca: 'Nike Original',
    name: 'Air Max 90',
    modelo: 'Air Max 90',
    title: 'Zapatilla Nike',
    img: 'assets/Air Max 90-2.png',
    price: '160.00€'
  },
  {
    id: 16,
    marca: 'Adidas Original',
    name: 'Handball Spezial',
    modelo: 'Handball Spezial',
    title: 'Zapatilla Adidas',
    img: 'assets/Handball Spezial-2.png',
    price: '120.00€'
  }
]

const modelos = []

let modelo = ''

function insertHeader() {
  const header = document.getElementById('Home')
  header.innerHTML = `
    <img src="assets/JD-logo.png" alt="logo-icon" title="Logo JD Sports" width="40px" height="40px" />
    <nav>
      <ul class="lista" type="enlace">
        <li><a href="Productos">Hombre</a></li>
        <li><a href="#">Mujer</a></li>
        <li><a href="#">Niños</a></li>
        <li><a href="#">Ofertas</a></li>
      </ul>
    </nav>
    <nav>
      <ul class="lista" type="iconos">
        <li><img src="assets/image_white_lines.png" alt="filtro-icono" title="Filtros" width="25px" height="25px" /></li>
        <li><img src="assets/shopping-basket.png" alt="tienda-icono" title="Tienda" width="30px" height="30px" /></li>
        <li><img src="assets/user-avatar.png" alt="user-icono" title="Usuario" width="30px" height="30px" /></li>
      </ul>
    </nav>
  `
}

function insertFooter() {
  const footer = document.getElementById('main-footer')
  footer.innerHTML = `
    <ul>
      <li>Compra con JD</li>
      <li><a href="https://www.jdsports.es/customer-service/size-guide/" rel="noopener">Guia de tallas</a></li>
      <li><a href="https://www.jdsports.es/store-locator/all-stores/" rel="noopener">Buscador de tiendas</a></li>
      <li><a href="https://www.jdsports.es/page/student-discount/" rel="noopener">Descuento por ser estudiante</a></li>
      <li><a href="https://blog.jdsports.es/calendario-lanzamientos-sneakers/" rel="noopener">Calendario de lanzamientos</a></li>
      <li><a href="https://www.jdsports.es/page/jdx/" rel="noopener">Inscribete gratis a JDX</a></li>
      <li><a href="https://blog.jdsports.es/" rel="noopener">JD Blog</a></li>
    </ul>
    <ul>
      <li>Atencion al Cliente</li>
      <li><a href="https://www.jdsports.es/pages/faqs/" rel="noopener">Preguntas frecuentes</a></li>
      <li><a href="https://www.jdsports.es/page/delivery-returns/" rel="noopener">Envios y devoluciones</a></li>
      <li><a href="https://www.jdsports.es/track-my-order/" rel="noopener">Seguimiento de envio</a></li>
      <li><a href="https://www.jdsports.es/customer-service/contact/" rel="noopener">Contacto</a></li>
    </ul>
    <ul>
      <li>La empresa</li>
      <li><a href="https://es.careers.isrg.com/" rel="noopener">JD Careers</a></li>
      <li><a href="https://www.jdplc.com/" rel="noopener">JD Sports Fashion</a></li>
      <li><a href="https://ui.awin.com/merchant-profile/10121" rel="noopener">Programa de afiliados</a></li>
    </ul>
    <ul>
      <li>Avios legal</li>
      <li><a href="https://www.jdsports.es/customer-service/terms/" rel="noopener">Terminos y condiciones</a></li>
      <li><a href="https://www.jdsports.es/page/terminos-condiciones-promociones/" rel="noopener">Promociones y condiciones</a></li>
      <li><a href="https://www.jdsports.es/page/terminos-condiciones-promociones/" rel="noopener">Politica de Privacidad</a></li>
      <li><a href="https://www.jdsports.es/customer-service/cookies/" rel="noopener">Politica de Cookies</a></li>
      <li><a href="https://www.jdplc.com/accessibility" rel="noopener">Accesibilidad</a></li>
      <li><a href="https://www.jdsports.es/customer-service/ue-platform/" rel="noopener">Resolucion litigios en linea</a></li>
      <li><a href="https://www.jdsports.es/customer-service/canal-sistema-interno-informacion-whistleblowing/">Sistema interno de informacion del grupo JD - Whistleblowing</a></li>
    </ul>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  insertHeader()
  insertFooter()
})

const Filtrar = () => {
  const inputPrecioMax = document.querySelector(
    '#Filtros input[placeholder="Precio Máximo"]'
  ).value

  const maxPrice = parseFloat(inputPrecioMax) || Infinity

  const filtered = arrayzapatillas.filter((zapa) => {
    const price = parseFloat(zapa.price.replace('€', ''))
    const modeloMatch = modelo ? modelo === zapa.modelo : true
    const priceMatch = price <= maxPrice

    return modeloMatch && priceMatch
  })

  if (filtered.length === 0) {
    MostrarRecomendaciones()
  } else {
    PintarZapa(filtered)
  }
}

const fillmodelos = (zapas) => {
  modelos.splice(0)
  for (const zapa of zapas) {
    if (!modelos.includes(zapa.modelo)) {
      modelos.push(zapa.modelo)
    }
  }
}
fillmodelos(arrayzapatillas)

const CreatSelectmodel = () => {
  const divFiltros = document.querySelector('#Filtros')
  const Selectmodel = document.createElement('Select')
  const optionDefault = document.createElement('option')
  optionDefault.value = ''
  optionDefault.textContent = 'Todos los modelos'
  Selectmodel.appendChild(optionDefault)

  for (const modelo of modelos) {
    const option = document.createElement('option')

    option.value = modelo
    option.textContent = modelo

    Selectmodel.appendChild(option)
  }
  divFiltros.appendChild(Selectmodel)

  const inputPrecioMax = document.createElement('input')
  inputPrecioMax.type = 'number'
  inputPrecioMax.placeholder = 'Precio Máximo'

  divFiltros.appendChild(inputPrecioMax)

  const filtrarButton = document.createElement('button')
  filtrarButton.textContent = 'Filtrar'
  filtrarButton.addEventListener('click', Filtrar)
  divFiltros.appendChild(filtrarButton)

  const limpiarButton = document.createElement('button')
  limpiarButton.textContent = 'Limpiar'
  limpiarButton.addEventListener('click', () => {
    modelo = ''
    Selectmodel.value = ''
    inputPrecioMax.value = ''
    PintarZapa(arrayzapatillas)
  })
  divFiltros.appendChild(limpiarButton)
  Selectmodel.addEventListener('change', (event) => {
    modelo = event.target.value
    Filtrar()
  })
}
const MostrarRecomendaciones = () => {
  const DivZapas = document.querySelector('#Producto')
  DivZapas.innerHTML = ''
  const recomendaciones = arrayzapatillas.slice(0, 3)
  PintarZapa(recomendaciones)
}

const PintarZapa = (zapas) => {
  const DivZapas = document.querySelector('#Producto')
  DivZapas.innerHTML = ''

  for (const zapa of zapas) {
    const DivZapa = document.createElement('div')
    const DivImg = document.createElement('div')
    const img = document.createElement('img')
    const marca = document.createElement('span')
    const Divnameprice = document.createElement('div')
    const name = document.createElement('h4')
    const price = document.createElement('p')
    const button = document.createElement('button')

    button.addEventListener('click', (event) => {
      const botones = DivZapas.querySelectorAll('button')
      botones.forEach((boton) => {
        boton.style.backgroundColor = ''
      })

      event.currentTarget.style.backgroundColor = 'yellow'
    })

    DivZapa.className = 'flex-container'
    DivImg.classList.add('imgContainer')
    Divnameprice.className = 'Flex-container'
    Divnameprice.classList.add('container')
    img.src = zapa.img
    img.alt = 'Zapatilla ultimo modelo'
    img.title = zapa.title

    marca.textContent = zapa.marca
    name.textContent = zapa.name
    price.textContent = zapa.price
    button.textContent = 'Comprar'

    DivZapa.appendChild(DivImg)
    DivImg.appendChild(img)
    DivZapa.appendChild(marca)
    DivZapa.appendChild(Divnameprice)
    Divnameprice.appendChild(name)
    Divnameprice.appendChild(price)
    DivZapa.appendChild(button)
    DivZapas.appendChild(DivZapa)
  }
}

PintarZapa(arrayzapatillas)
CreatSelectmodel()
