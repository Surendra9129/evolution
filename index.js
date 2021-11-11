let gotocart=document.getElementById('gotocart');
gotocart.addEventListener('click',()=>{
    console.log("avdsad")
    window.location.href="cart.html"
})
let login=document.getElementById('login');
login.addEventListener('click',()=>{
    window.location.href="signin.html"
})
let signup=document.getElementById('signup');
signup.addEventListener('click',()=>{
    window.location.href="signup.html"
})

let menu=document.getElementById('menu');
menu.addEventListener('click',()=>{
    show_items();
})

function show_items(){
   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
   .then((res)=>{
       console.log(res);
       return res.json();
   })
   .then((res)=>{
       show_food(res.meals);
   })
}


function show_food(food){
    food.forEach((item)=>{
        let container=document.getElementById('container');
        let food_div=document.createElement('div');
        let food_img=document.createElement('img');
        food_img.src=item.strMealThumb;
        let price=document.createElement('p');
        price.innerText="PRICE - 59"
        let description=document.createElement('p');
        description.innerText="italian food"
        let add_cart=document.createElement('button');
        add_cart.innerText="Add to cart";
        add_cart.addEventListener('click',()=>{
            show_cart(item);
        })
        food_div.append(food_img,price,description,add_cart);
        container.append(food_div);
    })
}
if(localStorage.getItem('food_cart')==null){
    localStorage.setItem('food_cart',JSON.stringify([]));
}
function show_cart(cart_item){
    
    let food_array=JSON.parse(localStorage.getItem('food_cart'));
    food_array.push(cart_item);
    console.log(food_array)
    localStorage.setItem('food_cart',JSON.stringify(food_array))
}