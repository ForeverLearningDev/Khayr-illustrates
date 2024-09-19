let basketSummary = document.querySelector('.checkout-summary');
let basketIcon = document.querySelector('.cart');

document.addEventListener('DOMContentLoaded', () => {
    let total = document.querySelector('.total-value-wrap input');
    let storedTotal = localStorage.getItem('basketTotal');
    
    if (storedTotal) {
        total.value = storedTotal;
    }
});

let basket = JSON.parse(localStorage.getItem("ShoppingData")) || [];

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

let basketContainer = document.querySelector('.basket-items-container');
function generateBasket () {
    if(basket.length !== 0){
    return(basketContainer.innerHTML = basket.map((x) => {
        let {id, item} = x
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
        <div id=${id} class="basketItem">
                    <img src="${search.img}">
                    <h2>
                        ${search.name}
                    </h2>
                    <label class="price">£${search.price.toFixed(2)}</label>
                    <div class="quantity-container">
                        <button onclick="decrement(${id})" class="decrement"> - </button>
                        <div class="basket-quantity">${item}</div>
                        <button onclick="increment(${id})" class="increment"> + </button>
                        <i onclick="removeItem(${id})" id=remove-basket-item class="bi bi-x"></i>
                    </div>
                </div>`
    }).join(''))
    } else {
        basketContainer.innerHTML = `
        <h2 class="empty-basket">Basket is Empty</h2>`;
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
    update(selectedItem.id);
    generateBasket();
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
    generateBasket();
    localStorage.setItem("ShoppingData", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    calculateTotal();
};

function removeItem (id) {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateBasket();
    calculateTotal();
    calculation();
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

