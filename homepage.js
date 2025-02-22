const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector("#sidebar");


function handleMenuClick(e){
    console.log(e);
    if (sideBar.classList[0] === "toggle-open"){
        sideBar.classList.remove("toggle-open")
    }else{
        sideBar.classList.add("toggle-open")
    }
    
}

menuToggle.addEventListener('click', handleMenuClick);
sideBar.addEventListener('click', handleMenuClick);