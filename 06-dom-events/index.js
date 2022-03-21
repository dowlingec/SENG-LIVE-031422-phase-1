//textContent good for text rendered inside of an HTL element
// innerHTML want to update the actual eleents of another element
//innerText something used to set text for an element
// you can write a function to help dreate divs without having to write full code each time, we will learn at a later date
// append will accept a string
// append child has to be direct node createElement creates a node
//DOM is tre of js nodes. createElement creats a node
//debugger allows code to run up to debugger call, within a function or global scope

const pokemon = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

const pokeContainer = document.querySelector("#poke-container");

pokemon.forEach(function (character) {
  renderPokemon(character);
});

function renderPokemon(char) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeLikes = document.createElement("h3")
  pokeLikes.textContent = "Likes: "

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const likesNum = document.createElement("h5")
  likesNum.className = "likes-num";
  likesNum.textContent = char.likes;

  const likesBttn = document.createElement('button')
  likesBttn.className = 'like-bttn';
  likesBttn.textContent = "♥";

  const deleteBttn = document.createElement('button')
  deleteBttn.className = 'delete-bttn';
  deleteBttn.textContent = "Delete";

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);

}

//remove elemnts from the DOM
//.remove()
//first select element to be removed then call .remove()

// const lectureDiv = document.querySelector('#lecture-goals')
// lectureDiv.remove()
// //or
// const lectureDiv = document.querySelector('#lecture-goals').remove()

//update Elements on the DOM
//select the element that we are updating and then update 
// document.getElementById("header").innerHTML = `<img id="header-img" src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9" />`


function replaceHeader() {
  const header = document.getElementById('header')
  const img = document.createElement('img')
  img.id = "header-img"
  img.src = "https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
  header.replaceChildren(img)
}
replaceHeader()

//static vs dynamic web pages
//Static - just plain display 
//Dynamic - changes with user input

// events: wait for some type of action that interacts with the html elements 
// event listener: listens for type of event and fire off event handler
//event type: action we are listening for eg click, mouseover, submit, keyDown, keyUp, DOMContent
// event handler: function responsible for executing taks after and event has occured
// we can attach event to element by :
// inline with html element OR .addEventListener('event type', callbackFunction)

//work flow:
// 1. select element that and event will be created for
// 2. Attach eventListener to target & decide what even is being listened for & what event handler is going to execute
// submit events are only available for forms
// click event only for buttons
// preventDefault() prevent default behaviour of element & inject our own
//event object produced when event  occurs, has properties and methods that can be called on it, info most commonly use: target

//grab target
const pokeForm = document.getElementById('poke-form')
//attach event listener to target
pokeForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // form is submitted, need to collect values of form by checking the.value of each input
  const name = document.querySelector('#name-input').value
  console.log(name)
  const img = document.querySelector('#img-input').value
  console.log(img)
  //create new charcter object
  const newChar = {
    name,
    img,
    id: 6, // NEEDS TO CHANGE
    likes: 0
  }
  renderPokemon(newChar)
  pokeForm.reset()
})



//ES6 simple object creation when you have an object key and value assnmnt that are the same, you can combine to a one world value
// name: name, vs name, it is essentially shorthand, and cleans up the code