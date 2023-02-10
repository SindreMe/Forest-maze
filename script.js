//model
const appPicture = document.getElementById("appPicture")

var currentRoom = [1,0]

const map = [
    ["b","c","d","j"]
    ["a","","e",""]
    ["h","g","f",""]
]

//view
//background
renderForest()
function renderForest(){
    appPicture.innerHTML = /*html*/`
    <img src="img/forestmapclosed.png"/>
    `;
}
//exits
renderExit()
function renderExit(){
    //north
    if (currentRoom[0]>0 && map[currentRoom[0]-1][currentRoom[1]]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="forestMapNorth" src="img/forestmapnorth.png"/>
        `;
    }
    else{

    }
    //south
    if (currentRoom[0]<map.length -1 && map[currentRoom[0]+1][currentRoom[1]]!=""){
    appPicture.innerHTML += /*html*/`
    <img class="forestMapSouth" src="img/forestmapsouth.png"/>
    `;
    }
    else{

    }
    //west
    if (currentRoom[1]>0 && map[currentRoom[0]][currentRoom[1]-1]!=""){
    appPicture.innerHTML += /*html*/`
    <img class="forestMapWest" src="img/forestmapwest.png"/>
    `;
    }
    else{

    }
    //east

    if (currentRoom[1]<map[currentRoom[0]].length -1 && map[currentRoom[0]][currentRoom[1]+1]!=""){
    appPicture.innerHTML += /*html*/`
    <img class="forestMapEast" src="img/forestmapeast.png"/>
    `;
    }
    else{

    }
}