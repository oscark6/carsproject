// infinite loop
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


//image slider
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide-products').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide-products').prepend(items[items.length - 1])
})
// smooth scrolls

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

function getCars(){

fetch("https://api.myjson.online/v1/records/2a0280a4-62f7-4990-9350-9c909247ba07")
.then(resp => resp.json())
.then(data => {
    console.log(data)

    if(data.data.cars){
        Object.values(data.data.cars).forEach( car => {
    addCars(car)
        });
        
    }else {
        console.error("no cars")
    }

})
.catch (error => {
    console.log("error fetching games:", error)
})

}
getCars()


function addCars(car){
    let div = document.getElementById("cars-lists")
    let cardcars = document.createElement("div")
    div.appendChild(cardcars)
    cardcars.className = "cardcars"
  
    let h2 = document.createElement("h2")
    cardcars.appendChild(h2)
    let name = car.name
    h2.innerText = name
  
    let image = document.createElement("img")
    cardcars.appendChild(image)
    image.className ="toy-avatar"
    let imgURL = car.image
    image.src = car.image
  
    
  
    
  
   }