const subMenus = [...document.querySelectorAll(".sub-menu")];
const arrowButtons = [...document.querySelectorAll(".dropdown-toggle")];
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


function handleArrowClick(e){
    
    console.log(e.target.classList[1]);

    subMenus.forEach(subMenu => {
        //console.log(subMenu);
        let secondTargetClass = e.target.classList[1];
        let secondSubMenuClass = subMenu.classList[1];
        
        if(subMenu.classList[2] === "toggle-open" && secondTargetClass === secondSubMenuClass){
            subMenu.classList.remove("toggle-open");
        } else if(secondTargetClass === secondSubMenuClass){
            subMenu.classList.add("toggle-open");
            console.log(e)
        }
        
    });
};

function handleMenuClick(e){
    console.log(e);
    if (navMenu.classList[1] === "toggle-open"){
        navMenu.classList.remove("toggle-open")
    }else{
        navMenu.classList.add("toggle-open")
    }
    
}

arrowButtons.forEach(arrowButton => arrowButton.addEventListener('click', handleArrowClick));
menuToggle.addEventListener('click', handleMenuClick);