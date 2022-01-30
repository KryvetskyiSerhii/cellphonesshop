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
        content: `<div class="phones__item item-phones">
    <div class="item-phones__wrapper">
        <div class="item-phones__image">
            <img src="img/phones/alcatelgo.jpg" alt="alactel-go">
        </div>
        <div class="item-phones__content">
            <div class="item-phones__name">Alcatel GO FLIP</div>
            <div class="item-phones__price">96$</div>
        </div>
        <div class="item-phones__cart" data-id="1">
        <img src="img/bag.png" alt="bag">
        </div>
    </div>
</div>`,
        cart: `<div class="modal__block">
<div class="modal__image">
    <img src="img/phones/alcatelgo.jpg" alt="">
</div>
<div class="modal__name">Alcatel GO FLIP</div>
<div class="modal__price">$96</div>
<div class="modal__trash" onclick="removeItem(1)">
    <img src="img/trash.png" alt="">
</div>
</div>`
    },
    {
        name: 'Cat S62',
        price: 498,
        id: '2',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/cats62.jpg" alt="cats62">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Cat S62</div>
                <div class="item-phones__price">498$</div>
            </div>
            <div class="item-phones__cart" data-id="2">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
<div class="modal__image">
    <img src="img/phones/cats62.jpg" alt="">
</div>
<div class="modal__name">Cat S62</div>
<div class="modal__price">498$</div>
<div class="modal__trash" onclick="removeItem(2)">
    <img src="img/trash.png" alt="">
</div>
</div>`
    },
    {
        name: 'One Plus NORD N200 5G',
        price: 216,
        id: '3',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/OnePlusnordn200.jpg" alt="oneplusnord200">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">One Plus NORD N200 5G</div>
                <div class="item-phones__price">216$</div>
            </div>
            <div class="item-phones__cart" data-id="3">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
<div class="modal__image">
    <img src="img/phones/OnePlusnordn200.jpg" alt="">
</div>
<div class="modal__name">One Plus NORD N200 5G</div>
<div class="modal__price">216$</div>
<div class="modal__trash" onclick="removeItem(3)">
    <img src="img/trash.png" alt="">
</div>
</div>`
    },
    {
        name: 'Samsung Galaxy A03s',
        price: 168,
        id: '4',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/galaxyA03s.jpg" alt="galaxyA30s">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Samsung Galaxy A03s</div>
                <div class="item-phones__price">168$</div>
            </div>
            <div class="item-phones__cart" data-id="4">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
<div class="modal__image">
    <img src="img/phones/galaxyA03s.jpg" alt="">
</div>
<div class="modal__name">Samsung Galaxy A03s</div>
<div class="modal__price">168$</div>
<div class="modal__trash" onclick="removeItem(4)">
    <img src="img/trash.png" alt="">
</div>
</div>`
    },
    {
        name: 'Samsung Galaxy A12',
        price: 180,
        id: '5',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/galaxyA12.jpg" alt="galaxyA12">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Samsung Galaxy A12</div>
                <div class="item-phones__price">180$</div>
            </div>
            <div class="item-phones__cart" data-id="5">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
<div class="modal__image">
    <img src="img/phones/galaxyA12.jpg" alt="">
</div>
<div class="modal__name">Samsung Galaxy A12</div>
<div class="modal__price">180$</div>
<div class="modal__trash" onclick="removeItem(5)">
    <img src="img/trash.png" alt="">
</div>
</div>`
    },
    {
        name: 'Samsung Galaxy A32',
        price: 282,
        id: '6',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/galaxyA32.jpg" alt="galaxyA32">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Samsung Galaxy A32</div>
                <div class="item-phones__price">282$</div>
            </div>
            <div class="item-phones__cart" data-id="6">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
<div class="modal__image">
    <img src="img/phones/galaxyA32.jpg" alt="">
</div>
<div class="modal__name">Samsung Galaxy A32</div>
<div class="modal__price">282$</div>
<div class="modal__trash" onclick="removeItem(6)">
    <img src="img/trash.png" alt="">
</div>
</div>`
    },
    {
        name: 'Samsung Galaxy A52',
        price: 504,
        id: '7',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/galaxyA52.jpg" alt="galaxyA52">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Samsung Galaxy A52</div>
                <div class="item-phones__price">504$</div>
            </div>
            <div class="item-phones__cart" data-id="7">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
<div class="modal__image">
    <img src="img/phones/galaxyA52.jpg" alt="">
</div>
<div class="modal__name">Samsung Galaxy A52</div>
<div class="modal__price">504$</div>
<div class="modal__trash" onclick="removeItem(7)">
    <img src="img/trash.png" alt="">
</div>
</div>`
    },
    {
        name: 'Samsung Galaxy S21',
        price: 999,
        id: '8',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/galaxyS21.jpg" alt="galaxyS21">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Samsung Galaxy S21</div>
                <div class="item-phones__price">999$</div>
            </div>
            <div class="item-phones__cart" data-id="8">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/galaxyS21.jpg" alt="">
    </div>
    <div class="modal__name">Samsung Galaxy S21</div>
    <div class="modal__price">999$</div>
    <div class="modal__trash" onclick="removeItem(8)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'Samsung Galaxy Z Flip',
        price: 999,
        id: '9',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/galaxyzflip.jpg" alt="galaxyzflip">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Samsung Galaxy Z Flip</div>
                <div class="item-phones__price">999$</div>
            </div>
            <div class="item-phones__cart" data-id="9">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/galaxyzflip.jpg" alt="">
    </div>
    <div class="modal__name">Samsung Galaxy Z Flip</div>
    <div class="modal__price">999$</div>
    <div class="modal__trash" onclick="removeItem(9)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'Google Pixel 6',
        price: 599,
        id: '10',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/googlepixel6.jpg" alt="googlepixel6">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Google Pixel 6</div>
                <div class="item-phones__price">599$</div>
            </div>
            <div class="item-phones__cart" data-id="10">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/googlepixel6.jpg" alt="">
    </div>
    <div class="modal__name">Google Pixel 6</div>
    <div class="modal__price">599$</div>
    <div class="modal__trash" onclick="removeItem(10)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'iPhone 12 Pro',
        price: 999,
        id: '11',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/iphone12pro.jpg" alt="iphone12pro">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">iPhone 12 Pro</div>
                <div class="item-phones__price">999$</div>
            </div>
            <div class="item-phones__cart" data-id="11">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/iphone12pro.jpg" alt="">
    </div>
    <div class="modal__name">iPhone 12 Pro</div>
    <div class="modal__price">999$</div>
    <div class="modal__trash" onclick="removeItem(11)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'iPhone 13',
        price: 699,
        id: '12',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/iphone13.jpg" alt="iphone13">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">iPhone 13</div>
                <div class="item-phones__price">699$</div>
            </div>
            <div class="item-phones__cart" data-id="12">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/iphone13.jpg" alt="">
    </div>
    <div class="modal__name">iPhone 13</div>
    <div class="modal__price">699$</div>
    <div class="modal__trash" onclick="removeItem(12)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'iPhone 13 Pro',
        price: 999,
        id: '13',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/iphone13pro.jpg" alt="iphone13pro">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">iPhone 13 Pro</div>
                <div class="item-phones__price">999$</div>
            </div>
            <div class="item-phones__cart" data-id="13">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/iphone13pro.jpg" alt="">
    </div>
    <div class="modal__name">iPhone 13 Pro</div>
    <div class="modal__price">999$</div>
    <div class="modal__trash" onclick="removeItem(13)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'iPhone SE',
        price: 449,
        id: '14',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/iphonese.jpg" alt="iphonese">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">iPhone SE</div>
                <div class="item-phones__price">449$</div>
            </div>
            <div class="item-phones__cart" data-id="14">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/iphonese.jpg" alt="">
    </div>
    <div class="modal__name">iPhone SE</div>
    <div class="modal__price">449$</div>
    <div class="modal__trash" onclick="removeItem(14)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'iPhone XR',
        price: 499,
        id: '15',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/iphonexr.jpg" alt="iphonexr">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">iPhone XR</div>
                <div class="item-phones__price">499$</div>
            </div>
            <div class="item-phones__cart" data-id="15">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/iphonexr.jpg" alt="">
    </div>
    <div class="modal__name">iPhone XR</div>
    <div class="modal__price">499$</div>
    <div class="modal__trash" onclick="removeItem(15)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'Motorola Moto G',
        price: 252,
        id: '16',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/motorolamoto.jpg" alt="motorolamoto">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Motorola Moto G</div>
                <div class="item-phones__price">252$</div>
            </div>
            <div class="item-phones__cart" data-id="16">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/motorolamoto.jpg" alt="">
    </div>
    <div class="modal__name">Motorola Moto G</div>
    <div class="modal__price">252$</div>
    <div class="modal__trash" onclick="removeItem(16)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'Nokia X100',
        price: 252,
        id: '17',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/nokiax100.jpg" alt="nokiax100">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Nokia X100</div>
                <div class="item-phones__price">252$</div>
            </div>
            <div class="item-phones__cart" data-id="17">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/nokiax100.jpg" alt="">
    </div>
    <div class="modal__name">Nokia X100</div>
    <div class="modal__price">252$</div>
    <div class="modal__trash" onclick="removeItem(17)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'One Plus 8T',
        price: 749,
        id: '18',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/oneplus8t.jpg" alt="oneplus8t">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">One Plus 8T</div>
                <div class="item-phones__price">749$</div>
            </div>
            <div class="item-phones__cart" data-id="18">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/oneplus8t.jpg" alt="">
    </div>
    <div class="modal__name">One Plus 8T</div>
    <div class="modal__price">749$</div>
    <div class="modal__trash" onclick="removeItem(18)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'One Plus 9 Pro',
        price: 899,
        id: '19',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/oneplus9pro.jpg" alt="oneplus9pro">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">One Plus 9 Pro</div>
                <div class="item-phones__price">899$</div>
            </div>
            <div class="item-phones__cart" data-id="19">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/oneplus9pro.jpg" alt="">
    </div>
    <div class="modal__name">One Plus 9 Pro</div>
    <div class="modal__price">899$</div>
    <div class="modal__trash" onclick="removeItem(19)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    },
    {
        name: 'Motorola Razor 5G',
        price: 499,
        id: '20',
        content: `<div class="phones__item item-phones">
        <div class="item-phones__wrapper">
            <div class="item-phones__image">
                <img src="img/phones/razor5g.jpg" alt="razor5g">
            </div>
            <div class="item-phones__content">
                <div class="item-phones__name">Motorola Razor 5G</div>
                <div class="item-phones__price">499$</div>
            </div>
            <div class="item-phones__cart" data-id="20">
                <img src="img/bag.png" alt="bag">
            </div>
        </div>
    </div>`,
        cart: `<div class="modal__block">
    <div class="modal__image">
        <img src="img/phones/razor5g.jpg" alt="">
    </div>
    <div class="modal__name">Motorola Razor 5G</div>
    <div class="modal__price">499$</div>
    <div class="modal__trash" onclick="removeItem(20)">
        <img src="img/trash.png" alt="">
    </div>
    </div>`
    }

]
const perPage = 8
let totalPages = Math.ceil(itemsArray.length / perPage)
let active
let items = []

for (let i = 1; i <= totalPages; i++) {
    let liTag = document.createElement('li')
    liTag.innerHTML = i
    element.appendChild(liTag)
    items.push(liTag)
}

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
        for (let i = 0; i < cart.length; i++) {
            cart[i].addEventListener('click', () => {
                addToCart(activeList[i])
                const liTag = document.createElement('li')
                liTag.classList.add('modal__list-item')
                liTag.setAttribute('id', activeList[i].id)
                liTag.innerHTML = activeList[i].cart
                modalList.appendChild(liTag)
           })
        }
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
        field.innerHTML += note.content
    })
}

// modal


for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        addToCart(itemsArray[i])
        const liTag = document.createElement('li')
        liTag.classList.add('modal__list-item')
        liTag.setAttribute('id', itemsArray[i].id)
                liTag.innerHTML = itemsArray[i].cart
                modalList.appendChild(liTag)
      
    })
}

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
    filteredItems.forEach(element => { field.innerHTML += element.content})
    
}