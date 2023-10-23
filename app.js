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
  
  
const shopStock = [
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
  }
]

let productsHolder = document.querySelector('.prod_holder');//in hero 3 prods container
let greenCardCheck = document.querySelector('.cart_check')// green check icon appears in navbar when you add somethimg to cart
let cartContainer = document.querySelector('.cart_window'); // cart items holder
let cartIcon = document.querySelector('.cart_icon');//icon of the cart in header


  let userCart = [

  ]//arr of user cart items

function createProdCard (){//create an empty card
  const productCard = document.createElement('div');  
  productCard.classList.add('product');
  productsHolder.append(productCard); // append empty card to container which contains 3 products
  return productCard;
}

function createProdImg(currentProd, currentObj){ //currentProd - empty card which creates in each iterration by products Array (currentObj - is an element of products Array)
  const prodImg = document.createElement('img');
  prodImg.classList.add('prod_img');
  prodImg.src = currentObj.imgURL;
  currentProd.prepend(prodImg);
  return prodImg;
}

function createProdDescriber(currentProd, currentObj) {
  const cardDescriber = document.createElement('div');
  cardDescriber.classList.add('prod_decs');
  cardDescriber.innerText = currentObj.description;
  currentProd.append(cardDescriber);
  return cardDescriber;
}

function createProdPrice(currentProd, currentObj){
  const cardPrice = document.createElement('div');
  cardPrice.classList.add('prod_price');
  cardPrice.innerText = `Price: ${currentObj.price}$, ${currentObj.weight}`;
  currentProd.append(cardPrice);
}

function createProdBtn(currentProd, currentObj){
  const cardButton = document.createElement('button');
  cardButton.classList.add('prod_btn');
  cardButton.innerText = 'ADD TO CART';
  cardButton.setAttribute('id', currentObj.id)
  console.log(cardButton.id)
  currentProd.append(cardButton);
  return cardButton;
}

function createProducts(objects) {  
  objects.forEach((obj) => {
  const currentProduct = createProdCard();
  createProdImg(currentProduct, obj);
  createProdDescriber(currentProduct, obj);
  createProdPrice(currentProduct, obj);
  const currentBtn = createProdBtn(currentProduct, obj);
  currentBtn.addEventListener('click', function(){
    addToCart(currentBtn);
  }, { once: true });//add once

  cartIcon.addEventListener('click', changeCartVisibility)
  })
  
}
createProducts(shopStock);
 
function changeCartVisibility(){ //allows to show and hide cart
  cartContainer.classList.toggle('visible')
  }


function addToCart(btn){  //add item to cart 
  btn.innerText = 'Added to cart ✓';
  btn.classList.remove('prod_btn');
  btn.classList.add('added_to_cart');
  greenCardCheck.style.display = 'block';
  cartContainer.style.height = 'fit-content';
  cartContainer.classList.add('visible');
  replaceProduct(btn);
}

function decreaseStockQuantity(prod){ //decrease quantity in stock
  prod.stockQuantity -= 1;
}

function replaceProduct(btn){//this func add prod to user cart (arr) and reduces quantity in stock
  shopStock.forEach((prod) => {
    //debugger;
    if(prod.id == btn.id){ 
      console.log(prod); //show prod in stock 
      const userProd = {  //create new product and push it to user cart
        id: prod.id,
        name : prod.name,
        price: prod.price,
        weight: prod.weight,
        quantity: 1,
        imgURL: prod.imgURL,
      }
      if (userCart.length === 0){
        userCart.push(userProd);
      }else {
        userCart = [];
        userCart.push(userProd);
      }
      decreaseStockQuantity(prod);
      renderInCart(userCart);
      }
      
  })
  console.log(userCart); //show item from cart in console
}

function renderInCart(cart){ // cart - user Cart array. This func render item in cart

  cart.forEach((item)=>{
    const cartItemWrapper = createCartItem(); 
    createCartImg(cartItemWrapper, item); // creates container with photo of prod
    createCartInfo(cartItemWrapper, item) //// creates container with information about product
  })

}

function createCartItem(){ //creates an empty wrapper for item in cart
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart_item');
  cartContainer.prepend(cartItem);
  
  return cartItem;
}

function createCartImg(currentProd, currentItem){  // currentProd - emty wrapper for each rendered product in cart
  const cartItemImgContainer = document.createElement('div');
  cartItemImgContainer.classList.add('cart_img_container'); // img container
  const cartImg = document.createElement('img'); // the img in cart 
  cartImg.classList.add('cart_img');
  cartImg.src = currentItem.imgURL; // takes url from item in cart
  cartItemImgContainer.append(cartImg);
  currentProd.prepend(cartItemImgContainer);
}

function createCartInfo(currentProd, currentItem, stock){ //function which add info about prod and call another particular funcs
  const cartInfoWrapper = document.createElement('div');
  cartInfoWrapper.classList.add('cart_info');
  currentProd.append(cartInfoWrapper);
  createItemName(cartInfoWrapper, currentItem);//add name to cart item
  createItemPrice(cartInfoWrapper, currentItem);//add price to cart item
  createItemQuantity(cartInfoWrapper, currentItem, currentProd, stock); // add quantity and ability to change it
  return cartInfoWrapper;
}

function createItemName(wrapper, currentItem){ //add name in info (cart)
  const cartName = document.createElement('div');
  cartName.classList.add('cart_item_name');
  cartName.innerText = currentItem.name;
  wrapper.append(cartName);
}

function createItemPrice(wrapper, currentItem){ // add price and weight (cart)
  const cartPrice = document.createElement('div');
  cartPrice.classList.add('cart_item_price');
  cartPrice.innerText = `$${currentItem.price}`;
  wrapper.append(cartPrice);
}

function createItemQuantity(wrapper, currentItem, currentProd){ //changes quantity in cart (also in stock)
  const quantityWrapper = document.createElement('div'); 
  quantityWrapper.classList.add('cart_quantity');

  const decreaseCartBtn = document.createElement('span'); 
  decreaseCartBtn.classList.add('before');
  decreaseCartBtn.innerText = '<';

  const currentQuantity = document.createElement('div');
  currentQuantity.classList.add('quantity');
  currentQuantity.innerText = currentItem.quantity;

  const increaseCartBtn = document.createElement('span'); 
  increaseCartBtn.classList.add('after');
  increaseCartBtn.innerText = '>';
  quantityWrapper.append(increaseCartBtn);

  const cartId = currentItem.id;

  let stockQ;

  function decreaseStock (){//change quantity in stock
    //debugger;
    shopStock.forEach( (el) => {
    if(el.id == cartId) {
      stockQ = el.stockQuantity;
      el.stockQuantity -=1;
      console.log(el);
    }
  })
  }
  
  function increaseStock(){//change quantity in stock
    shopStock.forEach( (el) => {
      if(el.id == cartId) {
        stockQ = el.stockQuantity;
        el.stockQuantity +=1;
        console.log(el);
      }
    })
  }

  increaseCartBtn.addEventListener('click', function(){ //increase quantity of prod in cart (not mutch than quantity in stock)
    //debugger;
    let num = Number(currentQuantity.innerText);
    decreaseStock();// -1 in stock
    if(stockQ > 0){
      num += 1;
      currentQuantity.innerText = num;
      currentItem.quantity +=1;
    }
    console.log(userCart);
  })

  decreaseCartBtn.addEventListener('click', function(){//decrease quantity of prod in cart, remove if 0 products

    let n = Number(currentQuantity.innerText);
    if(n > 0){
      increaseStock();
      n -= 1;
      currentItem.quantity -=1;
     currentQuantity.innerText = n;

    }
    
    if(n < 1){
      currentProd.remove();
      currentItem.quantity = 0;
    }
     console.log(userCart);
  })
  
  quantityWrapper.append(decreaseCartBtn, currentQuantity, increaseCartBtn);
  wrapper.append(quantityWrapper);
}

