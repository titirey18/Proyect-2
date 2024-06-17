import './style.css'

const arrayzapatillas = [
  {
    id: 1,
    span: 'Nike Original',
    name: 'Air Max 1',
    Image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkoldfr.fr%2Fes%2Fproducts%2Fair-max-1-white-university-blue&psig=AOvVaw3yYrYO66OoF5Aob_-jNDl9&ust=1718447364708000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCslq_y2oYDFQAAAAAdAAAAABAE',
    price: '120.00€'
  },
  {
    id: 2,
    span: 'New Balance',
    name: 'NB 9060',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdsports.es%2Fproduct%2Fgris-new-balance-9060%2F19588209_jdsportses%2F&psig=AOvVaw3s1PNp0QpCavCUVTHrGOHM&ust=1718447774441000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDkm_7y2oYDFQAAAAAdAAAAABAE',
    price: '80.00€'
  },
  {
    id: 3,
    span: 'Nike Original',
    name: 'Nike Revolution',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zalando.es%2Fnike-performance-revolution-6-nn-unisex-zapatillas-de-running-neutras-university-redblack-n1243a18s-g11.html&psig=AOvVaw02GqpYeyWXVJUyhPHwJh7S&ust=1718447856258000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjGjqTz2oYDFQAAAAAdAAAAABAE',
    price: '90.00€'
  },
  {
    id: 4,
    span: 'Adidas Original',
    name: 'Forum Buckle',
    image:
      'https://monode-zapas.com/cdn/shop/products/Capturadepantalla2022-09-13alas3.17.22.png?v=1668725693&width=1445',
    price: '100.00€'
  },
  {
    id: 5,
    span: 'Adidas Original',
    name: 'Campus',
    image:
      'https://warsawsneakerstore.com/storage/media/f1000/2023/adidas/218462/adidas-campus-00s-dark-green-h03472-65c4eb7e03b1d.webp',
    price: '120.00€'
  },
  {
    id: 6,
    span: 'New Balance',
    name: 'NB 327',
    image:
      'https://www.innvictus.com/medias/IN-U327LX-1.jpg?context=bWFzdGVyfGltYWdlc3w3NjQzMXxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaGI3LzEyMDM1MTUwMjUwMDE0LmpwZ3w2YTgyZjQzZjQyYjYwOWRjNzQ5ZDZlMDI2OTAzNDY3YmI5OTUwOGE0OWFiOGJjMGRhNDRiMzE4ZWFmNWRjYzBm',
    price: '120.00€'
  },
  {
    id: 7,
    span: 'Nike Original',
    name: 'Dunk Low',
    image:
      'https://www.snipes.es/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dwd05caf65/1972840_P.jpg?sw=400&sh=400&sm=fit&sfrm=png',
    price: '100.00€'
  },
  {
    id: 8,
    span: 'Adidas Original',
    name: 'Gazelle',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8DFh55pyMi3-MA0bARMt5F9bWwJnk9C43rPexrgT5thIeT_jB-spgfxdbkLcHV_LVLk&usqp=CAU',
    price: '90.00€'
  },
  {
    id: 9,
    span: 'Nike Original',
    name: 'Air Max SC',
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1486b495-5b34-47b3-b2e9-e0f0d447eeed/air-max-sc-zapatillas-fdzWNV.png',
    price: '150.00€'
  },
  {
    id: 10,
    span: 'Adidas Original',
    name: 'Handball Spezial',
    image:
      'https://www.snipes.es/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dwc680d0b5/2086678_P.jpg?sw=450&sh=450&sm=fit&sfrm=png',
    price: '140.00€'
  },
  {
    id: 11,
    span: 'Nike Original',
    name: 'Air Force',
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-next-nature-zapatillas-7dl9fM.png',
    price: '130.00€'
  },
  {
    id: 12,
    span: 'New Balance',
    name: 'NB 9060',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.made-in-china.com%2Fproduct%2FCheaper-Nb-9060-Unisex-Shoes-Classic-Replica-Sports-Sneakers-Factory-in-China-2016093112.html&psig=AOvVaw3s1PNp0QpCavCUVTHrGOHM&ust=1718447774441000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDkm_7y2oYDFQAAAAAdAAAAABAK',
    price: '100.00€'
  },
  {
    id: 13,
    span: 'New Balance',
    name: 'NB 480',
    image:
      'https://www.innovasport.com/medias/tenis-new-balance-480-is-BB480LEB-1.jpg?context=bWFzdGVyfGltYWdlc3wxOTQ0OXxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaGYxLzEyNTk2Nzk4OTE0NTkwLmpwZ3xjMWZjYjgxZGZhOTI4ZjUyMzk1YjJlY2M3ZmFiOTM0YWY3YzMyMWMwMmMxZDE4MGNiOWQ5NDY3MDk0MzQ3YWNm',
    price: '140.00€'
  },
  {
    id: 14,
    span: 'Nike Original',
    name: 'Full Force Low',
    image:
      'https://www.shoepalace.com/cdn/shop/products/d60df6b39b71eb449add0ddd67739197_2048x2048.jpg?v=1695076917&title=nike-fb1362-102-full-force-low-mystic-red-mens-basketball-shoes-red-white',
    price: '70.00€'
  },
  {
    id: 15,
    span: 'Nike Original',
    name: 'Air Max SC',
    image:
      'https://resize.sprintercdn.com/f/2880x2880/products/0375387/nike-air-max-sc-valentines-day_0375387_03_4_1578713739.jpg?w=2880&q=75',
    price: '160.00€'
  },
  {
    id: 16,
    span: 'Adidas Original',
    name: 'Handball Spezial',
    image:
      'https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=height:307,width:450,fit:crop/output=compress:true,quality:60,strip:true/auto_image/cache=expiry:31536000/https://storage.googleapis.com/kt-apiv2-default/52fa1505-0cd8-45e4-a22c-00c63459e351.__preview.jpg',
    price: '120.00€'
  }
]

const sectionzapas = document.querySelector('#Producto')

arrayzapatillas.forEach((zapatilla) => {
  const articlezapatilla = document.createElement('article')
  const divzapatilla = document.createElement('div')

  articlezapatilla.className = 'zapatillas'

  const img = document.createElement('img')
  img.src = zapatilla.image
  img.alt = zapatilla.name
  img.style.width = '100%'
  img.style.height = '20svh'

  const marca = document.createElement('span')
  marca.textContent = zapatilla.span
  marca.style.fontSize = 'small'

  const nombre = document.createElement('h2')
  nombre.textContent = zapatilla.name
  nombre.style.fontSize = 'medium'

  const precio = document.createElement('p')
  precio.textContent = zapatilla.price

  articlezapatilla.appendChild(img)
  articlezapatilla.appendChild(marca)
  divzapatilla.appendChild(nombre)
  divzapatilla.appendChild(precio)

  articlezapatilla.appendChild(divzapatilla)
  sectionzapas.appendChild(articlezapatilla)
})
