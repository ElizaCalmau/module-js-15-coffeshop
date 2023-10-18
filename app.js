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
  {
    id: 1, 
    name: "Coffe Package",
    description: "Strong robusta",
    price: 10, 
    weight: '350g',
    imgURL: 'https://raw.githubusercontent.com/ElizaCalmau/module-js-15-coffeshop/main/img/earlybird_coffe_pack.jpg',
    stockQuantity: 10
  },
  {
    id: 2,
    name: "Coffe Machine", 
    description: "Coffe Machine", 
    price: 1700, 
    weight: '7kg', 
    imgURL: 'https://raw.githubusercontent.com/ElizaCalmau/module-js-15-coffeshop/main/img/coffee_machine.jpg',  
    stockQuantity: 5
  },
  {
    id: 3, 
    name: "Coffe Mug", 
    description: "Coffe Mug", 
    price: 3, weight: '330ml', 
    imgURL: 'https://raw.githubusercontent.com/ElizaCalmau/module-js-15-coffeshop/main/img/coffee_mug.jpg',  
    stockQuantity: 100,
    //buttonHtml: '<div>'
  }
]

let productsHolder = document.querySelector('.prod_holder');//in hero 3 prods container
let greenCardCheck = document.querySelector('.cart_check')// green check icon appears in navbar when you add somethimg to cart
let cartContainer = document.querySelector('.cart_window'); // cart items holder

  let userCart = [

  ]//arr of user cart items


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
  cardButton.setAttribute('id', product.id);
  productCard.append(cardButton);

 
  cardButton.addEventListener('click', function (){
    cardButton.innerText = 'Added to cart ✓';
    cardButton.classList.remove('prod_btn');
    cardButton.classList.add('added_to_cart');
    greenCardCheck.style.display = 'block';
    addToCart(product);

    userCart.push(product);
    console.log(userCart);

    if(userCart[0].id === product.id){
      console.log('same items');
      cardButton.addEventListener('click', function(){

      })
    }
  })
  })
  
}
 createProducts()
 
  // function handleButtonClick (){
  //   cardButton.innerText = 'Added to cart ✓';
  //   cardButton.classList.remove('prod_btn');
  //   cardButton.classList.add('added_to_cart');
  //   greenCardCheck.style.display = 'block';
  //   addToCart(product);

  //   userCart.push(product);
  //   console.log(userCart);
  // }

 

//  let addToCartbtn = document.querySelector('.prod_btn');

//     addToCartbtn.addEventListener('click', function(){
//     addToCartbtn.innerText = 'Added to cart ✓';
//     addToCartbtn.classList.remove('prod_btn');
//     addToCartbtn.classList.add('added_to_cart');
//     let productId = addToCartbtn.getAttribute('id');
//     console.log(productId);
//     greenCardCheck.style.display = 'block';
//     let product = getProductById(productId);
//     addToCart(product);
//   })

// function getProductById(productId)
// {
//   console.log(productsArray);
//   productsArray.forEach((el) => {
//     console.log(el.id);
//     if(el.id == Number(productId)){
//       console.log(el)
//       return el;
//     }
//   });
//   return {};
// }

function addToCart(prod){
  prod.stockQuantity -= 1;
  console.log(`${prod.stockQuantity} ${prod.name} left in stock`)
  let cartItem = document.createElement('div');//product in cart
  cartItem.classList.add('cart_item');
  cartContainer.prepend(cartItem);

  let imgContainer = document.createElement('div'); //img Container 
  imgContainer.classList.add('cart_img_container');
  cartItem.prepend(imgContainer);

  let cartImg = document.createElement('img'); // image
  cartImg.src = prod.imgURL;
  cartImg.classList.add('cart_img');
  imgContainer.append(cartImg);

  let cartItemInfo = document.createElement('div');//info holder
  cartItemInfo.classList.add('cart_info');
  cartItem.append(cartItemInfo);

  let itemName = document.createElement('div');
  itemName.classList.add('cart_item_name');
  itemName.innerText = prod.name;

  let itemPrice = document.createElement('div');
  itemPrice.classList.add('cart_item_price');
  itemPrice.innerText = `$${prod.price}`;



  let itemQuantityContainer = document.createElement('div');
  itemQuantityContainer.classList.add('cart_quantity');

  
  let buttonBefore = document.createElement('span');
  buttonBefore.innerText = '<';
  buttonBefore.classList.add('before');
  itemQuantityContainer.prepend(buttonBefore);

 
  
  let itemQuantity = document.createElement('div');
  itemQuantity.classList.add('quantity');
  itemQuantity.innerText = 1;
  itemQuantityContainer.append(itemQuantity);
  //console.log(typeof itemQuantity.innerText)


 let buttonAfter = document.createElement('span');
  buttonAfter.classList.add('after');
  buttonAfter.innerText = '>'
  itemQuantityContainer.append(buttonAfter);

  buttonAfter.addEventListener('click', function(){
    let currentQ = Number(itemQuantity.innerText);
    if(prod.stockQuantity > 0){
      currentQ += 1;
    itemQuantity.innerText = currentQ;
    prod.stockQuantity -= 1;
    console.log(`${prod.stockQuantity} ${prod.name} left in stock`);
   
    }
    
  })
  buttonBefore.addEventListener('click', function(){
    let currentQ = Number(itemQuantity.innerText);
    currentQ -= 1;
    itemQuantity.innerText = currentQ;

    if( currentQ <= 0){
      cartItem.remove();
    }
  })
  cartItemInfo.append(itemName, itemPrice, itemQuantityContainer);
  //userCart.push({cartItemQuantity: counter})
}


