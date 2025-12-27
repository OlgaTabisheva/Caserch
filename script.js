const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main_list')
const cardArray = [
    {
        id:0,
        title:'Пвх материал 0й сорт',
        price:'70 000',
        adress:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        image: '/images/card-image.png'
    },
        {
        id:0,
        title:'Пвх материал 1й сорт',
        price:'71 000',
        adress:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        image: '/images/card-image.png'
    },
    ,
        {
        id:0,
        title:'Пвх материал 2й сорт',
        price:'72 000',
        adress:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        image: '/images/card-image.png'
    },
    ,
        {
        id:0,
        title:'Пвх материал 3й сорт',
        price:'73 000',
        adress:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        image: '/images/card-image.png'
    },
    ,
        {
        id:0,
        title:'Пвх материал 4й сорт',
        price:'74 000',
        adress:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        image: '/images/card-image.png'
    },
    ,
        {
        id:0,
        title:'Пвх материал 5й сорт',
        price:'75 000',
        adress:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        image: '/images/card-image.png'
    },
]

const render =  (cardList)=>{
    cardWrapper.innerHTML = ''
    cardList.forEach((item, i) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
                 <a href="/product.html" class="content-main_list-item">
                                <div class="content-main_list-item-image">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>
                                <h5 class="content-main_list-item-title">${item.title}</h5>
                                <strong class="content-main_list-item-price">${item.price}</strong>
                                <div class="content-main_list-item-desk-block">
                                    <span class="content-main_list-item-desk">${item.adress}</span>
                                    <span class="content-main_list-item-desk">${item.date}</span>

                                </div>
                            </a>
            `)
    });

};

const filterArray = (array, value)=>{

    return array.filter((item)=>{
return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px'

render(cardArray);

searchBtn.addEventListener('click', ()=>{
    render(filterArray(cardArray, searchInput.value))
})