//Predifined Variables
const game_name = "Clash Royale";
const image_url = "https://assets-prd.ignimgs.com/2022/05/27/clashroyale-1653673820137.jpg?crop=1%3A1%2Csmart&format=jpg&auto=png&quality=1000";

const iframe_url = prompt("Please enter your clash cloud url", "https://pizzaedition.win/");


//set Game Title
const game_title = document.getElementsByClassName("entry-title");
game_title[0].innerHTML = `<h1 class="entry-title">${game_name}</h1>`
//set "click here to play" to be the right game
all_links = document.querySelectorAll("a")
const iframe_string = `<iframe src=${iframe_url} width="1366" height="768"></iframe>`
all_links[61].outerHTML = `<a class="wp-block-button__link wp-element-button" href="javascript:void(0);" onclick="const imagee = document.getElementsByClassName('remove_me'); imagee[0].remove(); this.outerHTML = '<iframe src=&quot;${iframe_url}&quot; width=&quot;662&quot; height=&quot;467&quot;></iframe>'" rel="noreferrer noopener">click here to play ${game_name}</a>`;
//set image link
all_links[81].href = "#";
all_links[62].href = "#";
//set image
all_images = document.querySelectorAll("img");
all_images[41].outerHTML = `<img class="remove_me" decoding="async" width="662" height="467" src="${image_url}" alt="" class="wp-image-50209" srcset="${image_url} 662w, ${image_url} 300w" sizes="(max-width: 662px) 100vw, 662px">`;
//tobecontinued
