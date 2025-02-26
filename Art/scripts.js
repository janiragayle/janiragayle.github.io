const subMenus = [...document.querySelectorAll(".sub-menu")];
const arrowButtons = [...document.querySelectorAll(".dropdown-toggle")];
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("sidebar").innerHTML = data;
      })
      .then(() => {
        // After sidebar loads, initialize sidebar scripts
        initializeSidebarScripts();
      });
  });
  
  function initializeSidebarScripts() {
    const subMenus = [...document.querySelectorAll(".sub-menu")];
    const arrowButtons = [...document.querySelectorAll(".dropdown-toggle")];
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    function handleArrowClick(e) {
        subMenus.forEach(subMenu => {
            let secondTargetClass = e.target.classList[1];
            let secondSubMenuClass = subMenu.classList[1];
            
            if (subMenu.classList.contains("toggle-open") && secondTargetClass === secondSubMenuClass) {
                subMenu.classList.remove("toggle-open");
            } else if (secondTargetClass === secondSubMenuClass) {
                subMenu.classList.add("toggle-open");
            }
        });
    }
  
    function handleMenuClick() {
        navMenu.classList.toggle("toggle-open");
    }
  
    // Add event listeners after sidebar is loaded
    arrowButtons.forEach(arrowButton => arrowButton.addEventListener('click', handleArrowClick));
    if (menuToggle) {
      menuToggle.addEventListener('click', handleMenuClick);
    }
  }
  