const subMenus = [...document.querySelectorAll(".sub-menu")];
const arrowButtons = [...document.querySelectorAll(".dropdown-toggle")];



function handleClick(e){
    
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

arrowButtons.forEach(arrowButton => arrowButton.addEventListener('click', handleClick));