// $(document).ready(function() {
//     $('.slider-for').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       asNavFor: '.slider-nav'
//     });
//     $('.slider-nav').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       asNavFor: '.slider-for',
//       dots: true,
//       centerMode: true,
//       focusOnSelect: true
//     });
//   });
 
$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });    
  
  
const productsArray = [
  {id: 1, name: "Coffe Package", description: "Strong robusta", price: 10, weight: '350g', imgURL: 'https://raw.githubusercontent.com/ElizaCalmau/module-js-15-coffeshop/main/img/earlybird_coffe_pack.jpg'},
  {id: 2, name: "Coffe Machine", description: "Coffe Machine", price: 1700, weight: '7kg', imgURL: 'https://raw.githubusercontent.com/ElizaCalmau/module-js-15-coffeshop/main/img/coffee_machine.jpg'},
  {id: 3, name: "Coffe Mug", description: "Coffe Mug", price: 3, weight: '330ml', imgURL: 'https://raw.githubusercontent.com/ElizaCalmau/module-js-15-coffeshop/main/img/coffee_mug.jpg'}
]

let productsHolder = document.querySelector('.prod_holder')
let greenCardCheck = document.querySelector('.cart_check')


function createProducts() {
  productsArray.forEach( (product) => {
  let productCard = document.createElement('div');  
  productCard.classList.add('product');
  productsHolder.append(productCard)

  let cardImg = document.createElement('img');
  cardImg.src = product.imgURL;
  cardImg.classList.add('prod_img')
  productCard.prepend(cardImg)

  let cardDescriber = document.createElement('div');
  cardDescriber.classList.add('prod_decs');
  cardDescriber.innerText = product.description;
  productCard.append(cardDescriber);

  let cardPriceWeight = document.createElement('div');
  cardPriceWeight.classList.add('prod_price');
  cardPriceWeight.innerText = `Price: ${product.price}$, ${product.weight}`;
  productCard.append(cardPriceWeight);

  let cardButton = document.createElement('button');
  cardButton.classList.add('prod_btn');
  cardButton.innerText = 'ADD TO CART';
  productCard.append(cardButton);


  cardButton.onclick = function () {
    cardButton.innerText = 'Added to cart ✓';
    cardButton.classList.remove('prod_btn');
    cardButton.classList.add('added_to_cart');
    greenCardCheck.style.display = 'block';

  }
  })
  
}


  
  createProducts()



  // let cardImg = document.createElement('img');
  // cardImg.src = productsArray[0].imgURL;
  // cardImg.classList.add('prod_img')
  // productCard.prepend(cardImg)

  // let cardDescriber = document.createElement('div');
  // cardDescriber.classList.add('prod_decs');
  // cardDescriber.innerText = productsArray[0].description;
  // productCard.append(cardDescriber);

  // let cardPriceWeight = document.createElement('div');
  // cardPriceWeight.classList.add('prod_price');
  // cardPriceWeight.innerText = `Price: ${productsArray[0].price}$, ${productsArray[0].weight}g`;
  // productCard.append(cardPriceWeight);

  // let cardButton = document.createElement('button');
  // cardButton.classList.add('prod_btn');
  // cardButton.innerText = 'ADD TO CART';
  // productCard.append(cardButton);
  // })
  // cardButton.onclick = function () {
  //   cardButton.innerText = 'Added to cart ✓';
  //   cardButton.classList.remove('prod_btn');
  //   cardButton.classList.add('added_to_cart');
  //   greenCardCheck.style.display = 'block';

  // }