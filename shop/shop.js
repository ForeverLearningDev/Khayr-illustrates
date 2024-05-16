let shop = document.getElementById('shop');

var shopItemsData = [{
    id:"firstId",
    name:"Digital Illustration (One Person)",
    price: 20.00,
    desc: "Faceless illustration of one person",
    img: ""
},
{
    id:"secondId",
    name:"Digital Illustration (Two People)",
    price: 1.00,
    desc: "Faceless illustration of two people",
    img: ""
},
{
    id:"thirdId",
    name:"Digital Illustration (Three People +)",
    price: 1.00,
    desc: "Faceless illustration of three people or more",
    img: ""
},
{
    id:"fourthId",
    name:"Acrylic Photo Block",
    price: 5.00,
    desc: "A printed photo in a minimalistic decor piece. (a clear, solid block)",
    img: ""
},
{
    id:"fifthId",
    name:"A5 print",
    price: 1.50,
    desc: "A5 printed photo on photo printing paper",
    img: ""
},
{
    id:"sixthId",
    name:"Framed",
    price: 2.00,
    desc: "Framed printed photo",
    img: ""
},
{
    id:"seventhId",
    name:"Framed",
    price: 2.00,
    desc: "Framed printed photo",
    img: ""
},
{
    id:"eighthId",
    name:"Framed",
    price: 2.00,
    desc: "Framed printed photo",
    img: ""
},
];

var basket = [];
var generateShop = () => {
    return (shop.innerHTML= shopItemsData
        .map((x) => {
            var {id,name,price,desc,img} = x
        return `
        <div id=product-id-${id} class="item">
                <img class="item-image" src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>£ ${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                            <div id=${id} class="quantity">0</div>
                            <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join(""));
};

generateShop();

var increment = (id) => {
    var selectedItem = id;
    var search = basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else{
        search.item +=1;
        }

    update(selectedItem.id);
};
var decrement = (id) => {
    var selectedItem = id;
    var search = basket.find((x)=> x.id === selectedItem.id);

    if (search.item === 0)  return;
    else{
        search.item -=1;
        }

    update(selectedItem.id);
};
var update = (id) => {
    var search = basket.find((x)=> x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

var calculation = () => {
    var cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
};