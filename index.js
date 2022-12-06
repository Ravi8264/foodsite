var nav2 = document.querySelector('.nav2')
var nav3 = document.querySelector('.nav3')
var nav4 = document.querySelector('.nav4')
var nav5 = document.querySelector('.nav5')
var nav6 = document.querySelector('.nav6')
var AccounForm = document.querySelector('.AccounForm')
var nav1 = document.querySelector('.nav1')



var x = 0;


nav1.addEventListener('click', () => {
   var x = 0;
   nav1.innerHTML = `<a href="index.html">Home</a>`;
})




var flag = 0;

var sign = document.querySelector('.sign-up-form')


AccounForm.addEventListener('click', () => {
   if (flag == 1) {
      sign.style.display = 'none'
      flag = 0;
   }
   else {
      sign.style.display = 'block'
      flag = 1;
   }
})

function a() {
   if (flag === 0)
      return true;
   else {
      return false;
   }

}

var Recipelist = document.querySelector('.Recipelist')
nav2.addEventListener('mouseover', () => {
   if (a()) {
      Recipelist.style.display = 'block';
   }
})

nav2.addEventListener('mouseout', () => {
   Recipelist.style.display = 'none';
})


var popularlist = document.querySelector('.popularlist');

nav3.addEventListener('mouseover', () => {
   if (a()) {
      popularlist.style.display = 'block';
   }
})
nav3.addEventListener('mouseout', () => {
   popularlist.style.display = 'none'
})


var meatsandfoodlist = document.querySelector('.meatsandfoodlist');

nav4.addEventListener('mouseover', () => {
   if (a()) {
      meatsandfoodlist.style.display = 'block'
   }
})
nav4.addEventListener('mouseout', () => {
   meatsandfoodlist.style.display = 'none'
})


var healthyanddiets = document.querySelector('.healthyanddiets')

nav5.addEventListener('mouseover', () => {
   if (a()) {
      healthyanddiets.style.display = 'block'
   }
})
nav5.addEventListener('mouseout', () => {
   healthyanddiets.style.display = 'none'
})

var holidaylist = document.querySelector('.holidaylist')

nav6.addEventListener('mouseover', () => {
   if (a()) {
      holidaylist.style.display = 'block'
   }
})
nav6.addEventListener('mouseout', () => {
   holidaylist.style.display = 'none'
})




















var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var slides = document.getElementsByClassName('slide')
var length = slides.length;

var count = 0;
var flag = 0;
var c = 0;
slideshow(count)
prev.addEventListener('click', () => {
   flag = 1;
   console.log(count)
   if (count <= 0) {
      count = length - 1;

      slideshow(count)
   }
   else {
      slideshow(--count)
   }

})


next.addEventListener('click', () => {
   flag = 2;
   console.log(count)
   if (count > length - 3) {
      count = 0;
      slideshow(count)
   }
   else {
      slideshow(++count)
   }

})

function slideshow(num) {


   for (let y of slides) {
      y.style.display = 'none'
   }
   // console.log(num)
   if (flag == 1) {
      if (num === 0) {
         slides[num].style.display = 'block'
         slides[length - 1].style.display = 'block'
      }
      else {
         slides[num].style.display = 'block'
         slides[num - 1].style.display = 'block'
      }
   }
   else
      if (flag == 2 || c == 0) {
         slides[num].style.display = 'block'
         slides[num + 1].style.display = 'block'
      }
}



var foodinput = document.getElementById('input');
var search = document.getElementById('search')
var foodcontainer = document.getElementById('foodcontainer')
let listoffoodclone = document.getElementById('foodlist')


search.addEventListener('click', () => {
   var Searchitem = foodinput.value;
   foodinput.value = "";
   console.log(x)
   if (x > 0) {
      
 
   }
   if (Searchitem === "") {
      console.log("please enter the name of food sir");
   }
   else if (Searchitem == 'pizza') {
      console.log(Searchitem)
      async function fetchText() {
         let url = `https://forkify-api.herokuapp.com/api/search?q=${Searchitem}`;
         try {
            let responce = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${Searchitem}`)
            return await responce.json();
         }
         catch (e) {
            console.log("check your url")
         }
      }

      async function fooditem() {
         var food_items = await fetchText();
         var count = food_items.recipes
         for (let key in count) {
            const htmlfoodcontainer = listoffoodclone.content.cloneNode(true);
            const foodnames = htmlfoodcontainer.querySelector('#foodname');
            const foodimage = htmlfoodcontainer.querySelector('#food-img');
            foodnames.innerHTML = `${food_items.recipes[key].title}`;
            foodimage.src = `${food_items.recipes[key].image_url}`
            foodcontainer.appendChild(htmlfoodcontainer)
         }
         x++;
      }
      fooditem();


   }


   else {

      console.log(Searchitem)
      async function fetchText() {
         let url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${Searchitem}`
         try {
            let responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${Searchitem}`)
            return await responce.json();
         }
         catch (e) {
            console.log("check your url")
         }
      }

      async function fooditem() {
         var food_items = await fetchText();
         let count = food_items.meals;
         for (let key in count) {
            const htmlfoodcontainer = listoffoodclone.content.cloneNode(true);
            const foodnames = htmlfoodcontainer.querySelector('#foodname');
            const foodimage = htmlfoodcontainer.querySelector('#food-img');
            foodnames.innerHTML = `${food_items.meals[key].strMeal}`;
            foodimage.src = `${food_items.meals[key].strMealThumb}`
            foodcontainer.appendChild(htmlfoodcontainer)
         }
         x++;
      }
      fooditem();


   }


})
