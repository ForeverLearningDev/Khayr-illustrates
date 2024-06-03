let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("ShoppingData")) || [];

document.addEventListener('DOMContentLoaded', () => {
    let total = document.querySelector('.total-value-wrap input');
    let storedTotal = localStorage.getItem('basketTotal');
    
    if (storedTotal) {
        total.value = storedTotal;
    }
});

let generateShop = () => {
        return (shop.innerHTML= shopItemsData
            .map((x) => {
                let {id,name,price,desc,img, video} = x
                let search = basket.find((x) => x.id === id) || [];
            return `
            <div id=product-id-${id} class="item">
                    <div class="image-container">
                        <img class="item-image" src=${img} alt="">
                        <img class="item-image2" src=${video} alt="">
                    </div>
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price-quantity">
                            <h2 class="price">£ ${price.toFixed(2)}</h2>
                            <div id="item-controls">
                                <button id="add-to-basket" onclick="increment(${id})">Add To Basket</button>
                                <div id="buttons" class="buttons">
                                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                                    <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                                    <i onclick="increment(${id})" class="bi bi-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join(""));
};

generateShop();

let basketContainer = document.querySelector('.basket-items-container');
function generateBasket () {
    if(basket.length !== 0){
    return(basketContainer.innerHTML = basket.map((x) => {
        let {id, item} = x
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
        <div class="basketItem">
                    <img src="${search.img}">
                    <h2>
                        ${search.name}
                    </h2>
                    <label class="price">£ ${search.price.toFixed(2)}</label>
                    <div class="quantity-container">
                        <button onclick="decrement(${id})" class="decrement"> - </button>
                        <div class="basket-quantity">${item}</div>
                        <button onclick="increment(${id})" class="increment"> + </button>
                        <i onclick="removeItem(${id})" id=remove-basket-item class="bi bi-x"></i>
                    </div>
                </div>
                `
    }).join(''))
    } else {
        basketContainer.innerHTML = `
        <h2 style="position: absolute; top: 50%; left: 30%;">BASKET IS EMPTY</h2>`;
    }
}

generateBasket();

function calculateTotal () {
    let total = document.querySelector('.total-value-wrap input');
    let accumulatedSum = 0;
    basket.forEach(element => {
        let search = shopItemsData.find((y) => y.id === element.id);
        let sum = element.item * search.price.toFixed(2);
        accumulatedSum += sum
    });
    total.value = accumulatedSum.toFixed(2);
    localStorage.setItem('basketTotal', accumulatedSum.toFixed(2));
}

    let closeButton = document.querySelector('.close-button');
    let basketSummary = document.querySelector('.checkout-summary');
    let basketIcon = document.querySelector('.cart');

    basketIcon.addEventListener('click', function () {
        closeButton.classList.remove('hidden');
        basketSummary.classList.remove('hidden');
    })

    closeButton.addEventListener('click', function () {
        closeButton.classList.add('hidden');
        basketSummary.classList.add('hidden');
    })

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else{
        search.item +=1;
        }

    generateBasket();
    generateShop()
    update(selectedItem.id);
    localStorage.setItem("ShoppingData", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined) return;
    else if (search.item === 0)  return;
    else{
        search.item -=1;
        }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    generateShop();
    generateBasket();
    localStorage.setItem("ShoppingData", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    calculateTotal();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
    if (cartIcon.textContent === '0') {
        return cartIcon.classList.add('empty');
    } else {
        return cartIcon.classList.remove('empty');
    };
};

calculation();

function removeItem (id) {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateShop();
    generateBasket();
    calculation();
    calculateTotal();
    localStorage.setItem("ShoppingData", JSON.stringify(basket));
}

function clearBasket () {
    basket.length = 0;
    generateBasket();
    calculateTotal();
    calculation();
    localStorage.clear();
}

let clearAll = document.querySelector('.clear-basket');
clearAll.addEventListener('click', clearBasket);

// function showQuantity () {
//     document.getElementById('add-to-basket').style.display = 'none';
//     document.getElementById('buttons').style.display = 'flex';
// }

// function hideQuantity () {
//     document.getElementById('add-to-basket').style.display = 'block';
//     document.getElementById('buttons').style.display = 'none';
// }