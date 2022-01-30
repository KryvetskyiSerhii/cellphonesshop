const element = document.querySelector('.pagination ul')
const field = document.querySelector('.phones__blocks')
const modalList = document.querySelector('.modal__list')
const cartPrice = document.querySelector('.header__price')

const cartButton = document.querySelector('.header__cart')
const modalWindow = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__close')


let totalPrice = 0
let cartArray = []
let itemsArray = [{
        name: 'Alcatel GO Flip',
        price: 96,
        id: '1',
        img: 'img/phones/alcatelgo.jpg',
    },
    {
        name: 'Cat S62',
        price: 498,
        id: '2',
        img: 'img/phones/cats62.jpg',
     },
    {
        name: 'One Plus NORD N200 5G',
        price: 216,
        id: '3',
        img: 'img/phones/OnePlusnordn200.jpg',
    },
    {
        name: 'Samsung Galaxy A03s',
        price: 168,
        id: '4',
        img: 'img/phones/galaxyA03s.jpg',
    },
    {
        name: 'Samsung Galaxy A12',
        price: 180,
        id: '5',
        img: 'img/phones/galaxyA12.jpg',
    },
    {
        name: 'Samsung Galaxy A32',
        price: 282,
        id: '6',
        img: 'img/phones/galaxyA32.jpg',
    },
    {
        name: 'Samsung Galaxy A52',
        price: 504,
        id: '7',
        img: 'img/phones/galaxyA52.jpg',
    },
    {
        name: 'Samsung Galaxy S21',
        price: 999,
        id: '8',
        img: 'img/phones/galaxyS21.jpg',
    },
    {
        name: 'Samsung Galaxy Z Flip',
        price: 999,
        id: '9',
        img: 'img/phones/galaxyzflip.jpg',
    },
    {
        name: 'Google Pixel 6',
        price: 599,
        id: '10',
        img: 'img/phones/googlepixel6.jpg',
    },
    {
        name: 'iPhone 12 Pro',
        price: 999,
        id: '11',
        img: 'img/phones/iphone12pro.jpg',
    },
    {
        name: 'iPhone 13',
        price: 699,
        id: '12',
        img: 'img/phones/iphone13.jpg',
    },
    {
        name: 'iPhone 13 Pro',
        price: 999,
        id: '13',
        img: 'img/phones/iphone13pro.jpg',
    },
    {
        name: 'iPhone SE',
        price: 449,
        id: '14',
        img: 'img/phones/iphonese.jpg',
    },
    {
        name: 'iPhone XR',
        price: 499,
        id: '15',
        img: 'img/phones/iphonexr.jpg',
    },
    {
        name: 'Motorola Moto G',
        price: 252,
        id: '16',
        img: 'img/phones/motorolamoto.jpg',
    },
    {
        name: 'Nokia X100',
        price: 252,
        id: '17',
        img: 'img/phones/nokiax100.jpg',
    },
    {
        name: 'One Plus 8T',
        price: 749,
        id: '18',
        img: 'img/phones/oneplus8t.jpg',
    },
    {
        name: 'One Plus 9 Pro',
        price: 899,
        id: '19',
        img: 'img/phones/oneplus9pro.jpg',
    },
    {
        name: 'Motorola Razor 5G',
        price: 499,
        id: '20',
        img: 'img/phones/razor5g.jpg',
    }
]
const perPage = 8
let totalPages = Math.ceil(itemsArray.length / perPage)
let active
let items = []

function createPagination (totalPages) {
for (let i = 1; i <= totalPages; i++) {
    let liTag = document.createElement('li')
    liTag.innerHTML = i
    element.appendChild(liTag)
    items.push(liTag)
}
}

createPagination(totalPages)
createItem(items[0])


const cart = document.querySelectorAll('.item-phones__cart')

items.forEach ( item => {
    item.addEventListener('click', function () {
        createItem(this)
        const cart = document.querySelectorAll('.item-phones__cart')
        const pageNum = parseInt(item.innerHTML)
        const start = (pageNum - 1) * perPage
        const end = start + perPage
        const activeList = itemsArray.slice(start, end)
        createCartItem(cart, activeList)
    })

})

function createItem(item) {
    const pageNum = parseInt(item.innerHTML)
    const start = (pageNum - 1) * perPage
    const end = start + perPage
    const activeList = itemsArray.slice(start, end)
    if (active) {
        active.classList.remove('active')
    }
    active = item
    item.classList.add('active')
    field.innerHTML = ''
    activeList.forEach(note => {
        field.innerHTML += `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="${note.img}" alt="">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">${note.name}</div>
                <div class="item-phones__price">${note.price}$</div>
            </div>
            <div class="item-phones__cart" data-id="20">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`
    })
}

function createCartItem(cart, itemList)
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        addToCart(itemList[i])
        const liTag = document.createElement('li')
        liTag.classList.add('modal__list-item')
        liTag.setAttribute('id', activeList[i].id)
        liTag.innerHTML = `<div class="modal__block">
        <div class="modal__image">
            <img src="${itemList[i].img}" alt="">
        </div>
        <div class="modal__name">${itemList[i].name}</div>
        <div class="modal__price">$${itemList[i].price}</div>
        <div class="modal__trash" onclick="removeItem(${itemList[i].id})">
            <img src="img/trash.png" alt="">
        </div>
        </div>`
        modalList.appendChild(liTag)
   })
}

createCartItem(cart, itemsArray)


// modal

function addToCart(product) {
    totalPrice += product.price
    cartPrice.innerHTML = `$${totalPrice}`
        
}

function removeItem (itemid) {
    const item = document.getElementById(itemid)
    modalList.removeChild(item)
    let deleteItems = itemsArray.filter(e => e.id == itemid)
    totalPrice -= deleteItems[0].price
    cartPrice.innerHTML = `$${totalPrice}`
}

cartButton.addEventListener('click', () => {
    modalWindow.classList.add('modal-active')
})

closeButton.addEventListener('click', () => {
    modalWindow.classList.remove('modal-active')
})

//  search
const searchField = document.querySelector('.search__input')
let searchResult =''

searchField.addEventListener('input', e => {
    searchResult = e.target.value
    showSearchResult()
})

function showSearchResult () {
    field.innerHTML = ''
    let filteredItems = itemsArray.filter( element => element.name.toLowerCase().includes(searchResult.toLowerCase()))
    let totalPages = Math.ceil(filteredItems.length / perPage)
    element.innerHTML = ''
    createPagination(totalPages)
    filteredItems.forEach(element => { field.innerHTML += `<div class="phones__item item-phones">
    <div class="item-phones__wrapper">
        <div class="item-phones__image">
            <img src="${element.img}" alt="">
        </div>
        <div class="item-phones__content">
            <div class="item-phones__name">${element.name}</div>
            <div class="item-phones__price">${element.price}$</div>
        </div>
        <div class="item-phones__cart" data-id="20">
            <img src="img/bag.png" alt="bag">
        </div>
    </div>
</div>`},)
createCartItem(cart, filteredItems)    
}
