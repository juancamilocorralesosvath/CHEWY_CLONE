// alert("hello world!")
let isActive = false;
const hambMenu = document.getElementById('hamb-menu');
const displayList = document.getElementById('display-list');
hambMenu.addEventListener("click", ()=>{
    
    if (isActive){
        //displayList.style.display="none";
        displayList.style.opacity="1";
        isActive = false;
    }
    else{
        //displayList.style.display="flex";
        displayList.style.opacity="0";
        isActive = true;
    }
    
})


console.log("Hola");