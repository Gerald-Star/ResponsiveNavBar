/* to get access to the hamburger */
const hamburger = document.querySelector(".hamburger");
/* to get access to the nav-menu*/
const hamburger = document.querySelector(".nav-menu");

/* Adding Event Listener to the hamburger and nav-menu */

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

/* to make sure the button link closes back
by removing the active class using classList */

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    }));
    
