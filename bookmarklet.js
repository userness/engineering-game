//Predifined Variables
let game_name = "Clash Royale";
let image_url = "https://assets-prd.ignimgs.com/2022/05/27/clashroyale-1653673820137.jpg?crop=1%3A1%2Csmart&format=jpg&auto=png&quality=1000";


//set Game Title
const game_title = document.getElementsByClassName("entry-title")
game_title[0].innerHTML = `<h1 class="entry-title">${game_name}</h1>`
//set "click here to play" to be the right game
all_links = document.querySelectorAll("a")
all_links[61].outerHTML = `<a class="wp-block-button__link wp-element-button" href="http://supercell.com/en/games/clashroyale/" target="_blank" rel="noreferrer noopener">click here to play ${game_name}</a>`;
//set image link
all_links[81].href = "#";
//set image
all_images = document.querySelectorAll("img");
all_images[41].outerHTML = `<img decoding="async" width="662" height="467" src="${image_url}" alt="" class="wp-image-50209" srcset="${image_url} 662w, ${image_url} 300w" sizes="(max-width: 662px) 100vw, 662px">`;
//tobecontinued
