let basket = JSON.parse(localStorage.getItem("ShoppingData")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
};

calculation();

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
                    <label class="price">£${search.price.toFixed(2)}</label>
                    <div class="quantity-container">
                        <button onclick="decrement(${id})" class="decrement"> - </button>
                        <div class="quantity">${item}</div>
                        <button onclick="increment(${id})" class="increment"> + </button>
                        <i onclick="removeItem(${id})" id=remove-basket-item class="bi bi-x"></i>
                    </div>
                </div>`
    }).join(''))
} else {
    basketContainer.innerHTML = `
    <h2 style="position: absolute; top: 50%; left: 30%;">BASKET IS EMPTY</h2>`;
}

}

generateBasket();

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
    generateBasket();
    localStorage.setItem("ShoppingData", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

function removeItem (id) {
    let selectedItem = id;
    console.log(selectedItem.id);
    // basket = basket.filter((x) => x.id !== selectedItem.id);
    // localStorage.setItem("ShoppingData", JSON.stringify(basket));
}