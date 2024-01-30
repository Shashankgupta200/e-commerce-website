const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [{
    id: 1,
    title: "Air Jordan",
    price: 399,
    colors: [
        {
            code: "red", 
            img: "./img/jordana.png",
        },
        {
            code: "yellow", 
            img: "./img/jordanb.png",
        },
    ],
},
{
    id: 2,
    title: "HIPPIE",
    price: 120,
    colors: [{
        code: "Black",
        img: "./img/jordan.png",
        },
        {
            code: "Blue",
            img: "./img/jordanc.png",
        },
    ],
},
{
    id: 3,
    title: "AIR FORCE",
    price: 196,
    colors: [
        {
            code: "grey", 
            img: "./img/jordan2.png",
        },
        {
            code: "yellow", 
            img: "./img/jordanb.png",
        },
    ],
},
{
    id: 4,
    title: "BLAZER",
    price: 189,
    colors: [
        {
            code: "pink", 
            img: "./img/jordan3.png",
        },
        {
            code: "yellow", 
            img: "./img/jordanb.png",
        },
    ],
},
{
    id: 5,
    title: "CRATER",
    price: 200,
    colors: [
        {
            code: "green", 
            img: "./img/jordan4.png",
        },
        {
            code: "yellow", 
            img: "./img/jordanb.png",
        },
    ],
},
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((items, index) => {
    items.addEventListener("click", () => {
        console.log("Clickes item " + index);
        //Change current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change current choosen product
        choosenProduct = products[index];

        //Change text of product
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })

        currentProductColors.forEach((color, index)=>{
            color.addEventListener("click", ()=>{
                currentProductImg.src = choosenProduct.colors[index].img;
            })
        })

    })
})

currentProductSizes.forEach((size, index)=> {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "White"
            size.style.color = "Black"
        })
        size.style.backgroundColor = "Black"
        size.style.color = "white"
    })
})

const productionButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productionButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
})

close.addEventListener("click", ()=>{
    payment.style.display = "none"
})
