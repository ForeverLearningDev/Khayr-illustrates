let slide = [{
    image: 'static/images/illustration1.jpg',
    customerFeedback: 'amasssinngg1',
    myResponse: 'woooooooooooooooooowwww1'
},
{
    image: 'static/images/illustration2.jpg',
    customerFeedback: 'amasssinngg2',
    myResponse: 'woooooooooooooooooowwww2'
},
{
    image: 'static/images/illustration3.jpg',
    customerFeedback: 'amasssinngg3',
    myResponse: 'woooooooooooooooooowwww3'
},
{
    image: 'static/images/illustration4.jpg',
    customerFeedback: 'amasssinngg4',
    myResponse: 'woooooooooooooooooowwww4'
},
{
    image: 'static/images/illustration5.jpg',
    customerFeedback: 'amasssinngg5',
    myResponse: 'woooooooooooooooooowwww5'
},
{
    image: 'static/images/illustration6.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration7.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration8.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration9.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration10.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration11.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration12.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration13.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration14.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration15.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration17.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration18.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration19.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration20.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration21.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration22.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration23.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration25.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration26.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration27.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration28.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration29.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration31.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration32.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration33.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration34.jpg',
    customerFeedback: 'amasssinngg6',
    myResponse: 'woooooooooooooooooowwww6'
},
{
    image: 'static/images/illustration35.jpg',
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

// const leftScroll = [
//     {transform: "translateX(-130px)"}
// ]

// const scrollTiming = {
//     duration: 500,
//     fill: "forwards",
//     easing: "ease-in-out"
//   };

// config param
let countItem = items.length;
let itemActive = 0;
let scrollCount = 0;

// next button click event
next.onclick = function () {
    itemActive = itemActive + 1;
    if(itemActive >= countItem) {
        itemActive = 0;
        scrollCount = 0
    }
    showSlider();
    thumbnailItems.scroll(scrollCount,0);
    scrollCount +=130
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

