## il caffè - online store ##
My module project on JS.

### Here's a link to check how it works ###
https://elizacalmau.github.io/module-js-15-coffeshop/


## Descriprion ##
It's online store where you can buy coffee, coffee machine of another accessories for making and enjoying your coffee.

## Mockup ##
https://www.figma.com/file/J5ICcTOaaaErQXfqgwvpjw/CoffeShop-Mockup-Module-JS-15?type=design&t=LAP9GJnGjxmtCdgY-6

## Tech stack ##
- JS
- HTML
- CSS
- Slick slider 



## Features of program development ##
Products are creating dynamicly from array of products; Product images are takes by link from this github repo.
If you will push button 'ADD TO CART' product will be added into your cart and 
will be changed quantity in stock; Also the button styles will be changed.
You can use this button single time to add item in card, if you want to change a quantity of products in your cart you can use buttons "<" and ">" right in the cart.
You can not add more products in cart than it was in stock.

'Total' shows and calculate total price amount of all items in your card according to it quantity and cost.

If quantity less than 1 the item will be removed from your cart; If there's no items in cart 'checkout' will be gray and you'll see message 'Сart is empty'. If there any item in cart if you will click on 'checkout' and cursor will turn to 'wait' state which imitates page loading, but you have to hover on it to see.
If you'll click on 'continue shopping' the cart will be hidden;

The green check singn will apper in cart icon (in header) if there's any item in it. And will disappear if you'll delete all items from cart. You also can delete item by decreasinc it quantity in card;
The same way if cart is empty button 'Added to cart' will turn to initial state.

The max-width is 1700px, and if your screen is bigger than 1170px you'll see desktop light theme.

When width of screen less than 1170px theme turns to dark and elements (slider and product container) are placed in coloumn.(Later will be called mobile)

If you'll open cart in 'Mobile' and scroll down it will be fixed in the rigth top corner of the viewport, and get back if you will scroll right to the top. Cart motions is animated.

If you'll scroll down a little in right bottom corner will appear a button ↑ which will smoothly bring you to the top of the page. And if you are on the top of the page it will disappear.

If your screen width less than 900px container with products will appear instead the slider, and slider will be at the bottom fo the page. 

If your screen less than 750px the products (in product container) will be placed in column.

if your screen less than 500px you'll se burger menu instead of inline menu. If you'll open cart and then open burger menu cart will shrink to 64% of screen, and will turn back if you'll close a bureger menu.

In console you can see info about stock and user's cart.
