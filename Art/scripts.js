const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const galleryItems = [...document.querySelectorAll(".gallery-item img")];
const nextArrow = document.querySelector(".next");
const previousArrow = document.querySelector(".prev");

console.log(galleryItems)

let currentIndex = 0;

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

    // Load lightbox dynamically
    fetch("lightbox.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("lightbox").innerHTML = data;
    })
    .then(() => {
      initializeLightboxScripts(); // Initialize lightbox scripts after load
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
  
    arrowButtons.forEach(arrowButton => arrowButton.addEventListener('click', handleArrowClick));

    if (menuToggle) {
      menuToggle.addEventListener('click', handleMenuClick);
    }
  }

  function initializeLightboxScripts() {
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const nextArrow = document.querySelector(".next");
    const previousArrow = document.querySelector(".prev");

    let currentIndex = 0;

    function openLightbox(event) {
        let fullSrc = event.target.src;
        currentIndex = [...galleryItems].indexOf(event.target);
        if (currentIndex !== -1) {
            lightboxImg.src = fullSrc;
            lightbox.classList.add("toggle-open2");
        }
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        }
        lightboxImg.src = galleryItems[currentIndex].src;
    }

    function closeLightbox(event) {
        if (event.target !== lightboxImg & event.target !== nextArrow & event.target !== previousArrow) {
            lightbox.classList.remove("toggle-open2");
        }
    }

    galleryItems.forEach(img => img.addEventListener("click", openLightbox));
    lightbox.addEventListener("click", closeLightbox);
    nextArrow.addEventListener("click", () => changeImage(1));
    previousArrow.addEventListener("click", () => changeImage(-1));

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            lightbox.classList.remove("toggle-open2");
        } else if (event.key === "ArrowRight") {
            changeImage(1);
        } else if (event.key === "ArrowLeft") {
            changeImage(-1);
        }
    });
}