## il caffè - online coffee shop##
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

### Architecture ###
Products are creating dynamicly in JS from array of products; Product images are takes by link from this github repo.
There's an array of products called **Shop Stock**. Quantity of each product will reduce in stock if you will add it to your cart (by clicking button 'ADD TO CART', cart is also array with objects), every change you can see in console. You can use **'ADD TO CART'** button as many times as you want to increase quantity of items in cart.
You can **not** order more products than it was in stock. 

Changing product quantity is also happening when you click buttons "<" and ">" right in the cart (the current quantity in stock and in your cart you can check in console). If quantity less than 1 the item will be **removed** from your cart. But you can add it **again** by clicking 'ADD TO CART' button.
BTW you can change visiblity of cart by clicking a sign of cart in header. Also you can hide cart by clicking **'Continue shopping'** button in cart.

**'Total'** shows and calculate total price amount of all items in your cart according to it quantity and cost.

### What user see ###
By clicking **'ADD TO CART'** styles of button will be changed. The cart container will appear in right top corner under the header.
If there's no items in cart **'Checkout'** button will be gray and you'll see message **'Сart is empty'**. If you'll add some items on cart and click on **'Checkout'** button the cursor will turn to 'wait' state which imitates loading of the page.

The **green check singn** will apper in cart icon (in header) if there's any item in cart and will disappear if you'll delete all items from it.
The same way if cart is empty button **'Added to cart'** will turn to initial state.

The max-width is 1700px, and if your screen is **bigger than 1170px** you'll see desktop light theme.

When width of screen less than 1170px theme turns to **dark** and elements (slider and product container) would be placed in **coloumn**.
If you'll open cart in this state of screen and scroll down it will be fixed in the rigth top corner of the viewport, and get back (under the header) if you will scroll right to the top. Cart motions are **animated**.

If you'll scroll down in right bottom corner appears a button **↑** which will smoothly bring you to the top of the page. And if you are on the top of the page it will disappear.

If your screen width less than **900px** container with products appears instead the slider, and slider will be at the bottom of the page. 

If your screen less than **750px** the products will be placed in column. Each product would take a 90% width of viewport.

If your screen less than **500px** you'll see burger menu instead of inline menu. If you'll open cart and afterward open burger menu the cart will **shrink** to 64% of screen, and will turn back (to 100%) if you'll close a burger menu.

