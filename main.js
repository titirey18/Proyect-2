import './style.css'

const arrayzapatillas = [
  {
    id: 1,
    marca: 'Nike Original',
    name: 'Nike Air Max 90',
    modelo: 'Air Max 90',
    img: './assets/Air Max 90.png',
    price: '120.00€'
  },
  {
    id: 2,
    marca: 'New Balance',
    name: 'NB 9060',
    modelo: 'NB 9060',
    img: 'assets/NB 9060.png',
    price: '80.00€'
  },
  {
    id: 3,
    marca: 'Nike Original',
    name: 'Nike Metcon 9',
    modelo: 'Nike Metcon 9',
    img: 'assets/Nike Metcon 9.png',
    price: '90.00€'
  },
  {
    id: 4,
    marca: 'Adidas Original',
    name: 'Adidas Forum Low',
    modelo: 'Forum Low',
    img: 'assets/Forum Low.png',
    price: '100.00€'
  },
  {
    id: 5,
    marca: 'Adidas Original',
    name: 'Adidas Campus',
    modelo: 'Campus',
    img: 'assets/Campus.png',
    price: '120.00€'
  },
  {
    id: 6,
    marca: 'New Balance',
    name: 'NB 327',
    modelo: 'NB 327',
    img: 'assets/NB 327.png',
    price: '120.00€'
  },
  {
    id: 7,
    marca: 'Nike Original',
    name: 'Nike Dunk Low',
    modelo: 'Dunk Low',
    img: 'assets/Dunk Low.png',
    price: '100.00€'
  },
  {
    id: 8,
    marca: 'Adidas Original',
    name: 'Adidas Gazelle',
    modelo: 'Gazelle',
    img: 'assets/Gazelle.png',
    price: '90.00€'
  },
  {
    id: 9,
    marca: 'Nike Original',
    name: 'Nike Air Max 97 ',
    modelo: 'Nike Air Max 97',
    img: 'assets/Nike Air Max 97.png',
    price: '150.00€'
  },
  {
    id: 10,
    marca: 'Adidas Original',
    name: 'Adidas Handball Spezial',
    modelo: 'Handball Spezial',
    img: 'assets/Handball Spezial.png',
    price: '140.00€'
  },
  {
    id: 11,
    marca: 'Nike Original',
    name: 'Nike Air Force 1',
    modelo: 'Air Force 1',
    img: 'assets/Air Force 1.png',
    price: '130.00€'
  },
  {
    id: 12,
    marca: 'New Balance',
    name: 'NB 9060',
    modelo: 'NB 9060',
    img: 'assets/NB 9060-2.png',
    price: '100.00€'
  },
  {
    id: 13,
    marca: 'New Balance',
    name: 'NB 550',
    modelo: 'NB 550',
    img: 'assets/NB 550.png',
    price: '140.00€'
  },
  {
    id: 14,
    marca: 'Nike Original',
    name: 'Nike Full Force Low',
    modelo: 'Full Force Low',
    img: 'assets/Full Force Low.png',
    price: '70.00€'
  },
  {
    id: 15,
    marca: 'Nike Original',
    name: 'Nike Air Max 90',
    modelo: 'Air Max 90',
    img: 'assets/Air Max 90-2.png',
    price: '160.00€'
  },
  {
    id: 16,
    marca: 'Adidas Original',
    name: 'Adidas Handball Spezial',
    modelo: 'Handball Spezial',
    img: 'assets/Handball Spezial-2.png',
    price: '120.00€'
  }
]

const modelos = []

let modelo = ''

const Filtrar = () => {
  const filtered = []

  for (const zapa of arrayzapatillas) {
    if (modelo === zapa.modelo) {
      filtered.push(zapa)
    }
  }
  PintarZapa(filtered)
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
  for (const modelo of modelos) {
    const option = document.createElement('option')

    option.value = modelo
    option.textContent = modelo

    Selectmodel.appendChild(option)
  }
  divFiltros.appendChild(Selectmodel)
  Selectmodel.addEventListener('change', (event) => {
    modelo = event.target.value
    Filtrar()
  })
}

const PintarZapa = (zapas) => {
  const DivZapas = document.querySelector('#Producto')
  DivZapas.innerHTML = ''

  for (const zapa of zapas) {
    const DivZapa = document.createElement('div')
    const DivImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const price = document.createElement('p')

    DivZapa.className = 'flex-container'
    DivImg.classList.add('imgContainer')
    img.src = zapa.img

    name.textContent = zapa.name
    price.textContent = zapa.price

    DivZapa.appendChild(DivImg)
    DivImg.appendChild(img)
    DivZapa.appendChild(name)
    DivZapa.appendChild(price)
    DivZapas.appendChild(DivZapa)
  }
}
PintarZapa(arrayzapatillas)
CreatSelectmodel()
