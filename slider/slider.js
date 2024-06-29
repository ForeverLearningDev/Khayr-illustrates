let slide = [{
    image: '/images/illustration1.jpg',
    customerFeedback: 'amasssinngg1',
    myResponse: 'woooooooooooooooooowwww1'
},
{
    image: '/images/illustration2.jpg',
    customerFeedback: 'amasssinngg2',
    myResponse: 'woooooooooooooooooowwww2'
},
{
    image: '/images/illustration3.jpg',
    customerFeedback: 'amasssinngg3',
    myResponse: 'woooooooooooooooooowwww3'
},
{
    image: '/images/illustration4.jpg',
    customerFeedback: 'amasssinngg4',
    myResponse: 'woooooooooooooooooowwww4'
},
{
    image: '/images/illustration5.jpg',
    customerFeedback: 'amasssinngg5',
    myResponse: 'woooooooooooooooooowwww5'
},
{
    image: '/images/illustration6.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration7.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration8.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration9.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration10.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration11.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration12.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration13.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration14.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration15.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration17.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration18.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration19.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration20.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration21.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration22.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration23.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration25.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration26.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration27.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration28.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration29.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration31.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration32.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration33.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration34.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: '/images/illustration35.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
}]

let itemList = document.querySelector('.slider .list');

function generateItems () {
    return (itemList.innerHTML = slide.map(function (x){
        let { image, customerFeedback, myResponse } = x;
        return `
        <div class="item">
          <img class="slider-image" src="${image}"/>
        </div>
        `;
    }).join(''));
}

//<div class="customer-feedback">
//    <div class="customer first">
//      <h3>Customer</h3>
//      <p>
//        ${customerFeedback}
//      </p>
//    </div>
//    <div class="me second">
//      <h3>Khayr</h3>
//      <p>
//        ${myResponse}
//      </p>
//    </div>
//</div>

generateItems();

let thumbnailItems = document.querySelector('.thumbnail');

function generateThumbnail() {
    return (thumbnailItems.innerHTML = slide.map(function (x){
        let { image } = x;
        return `
        <div class="item">
            <img src="${image}"/>
        </div>
        `
    }).join(''));
}

generateThumbnail();

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

items[0].classList.add('active');
thumbnails[0].classList.add('active');

// config param
let countItem = items.length;
let itemActive = 0;

// next button click event
next.onclick = function () {
    itemActive = itemActive + 1;
    if(itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// prev button click event

prev.onclick = function () {
    itemActive = itemActive - 1;
    if(itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider

let refreshInterval = setInterval(function () {
    next.click();
}, 5000);

function showSlider() {
    // remove active from old slide
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    thumbnailActiveOld.classList.remove('active');

    // add active to new slide
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto run time on slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(function () {
        next.click();
    }, 5000);
}

// thumbnail click event

thumbnails.forEach(function (thumbnail, index) {
    thumbnail.addEventListener('click', function () {
        itemActive = index;
        showSlider();
    });
});

