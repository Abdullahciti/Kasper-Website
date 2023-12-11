// My Elements
let loader = document.querySelector(".loader");
let goUpBtn = document.querySelector(".go-up");
let nav = document.querySelectorAll("header ul li a");
let searchBtn = document.querySelector("header nav .form i");
let toggleMenu = document.querySelector(".toggle-menu");
let listMenu = document.querySelector("ul");
let bullets = document.querySelectorAll(".landing .bullets li");
let changeBackground = document.querySelectorAll(".landing button")
let landingContent = document.querySelectorAll(".landing .content");

nav.forEach((e)=> {
    e.addEventListener("click", ()=> {
        nav.forEach((li) => {
            li.classList.remove("active")
        })
        e.classList.add("active")
    })
})

searchBtn.onclick = function(){
    searchBtn.classList.toggle("active-me");
};

// Settings
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
currentIndex = 1;


// Start Loader and Go up Button
window.onscroll = () => { 
    let scrollTop = document.documentElement.scrollTop;
    loader.style.width = `${(scrollTop / height) * 100}%`;
    if (scrollTop >= 550) {
        goUpBtn.style.display = "block"
        if (scrollTop >= 580) {
            goUpBtn.style.opacity = "1";
            goUpBtn.onclick = () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
        }else {
            goUpBtn.style.opacity = "0"
        }
    } else {
        goUpBtn.style.display = "none";
    }
}
// End Loader and Go up Button

//Start Toggle Menu

/* toggleMenu.addEventListener("click", ()=> {
    listMenu.style = `    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgb(0 0 0 / 50%);`
}) 
 Add two numbers and
   Store the output in a variable called result.
   Also, print the output to the browser’s console
*/
//End Toggle Menu




//  Start Bullets
bullets[currentIndex].classList.add("active");
bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
        bullets.forEach((el) => {
            el.classList.remove("active")
        })
        landingContent.forEach((el) => {
            el.classList.remove("active-text")
        })
        landingContent[index].classList.add("active-text");
        bullets[index].classList.add("active");
    });
});
// function handleBullets (index) {
    //     if (index === 0) {
        //         changeBackground[0].style.pointerEvents = "none";
        //         changeBackground[0].style.color = "#aaa";
        //     }
        //     else {
            //         changeBackground[0].style.pointerEvents = "fill";
            //         changeBackground[0].style.color = "#ddd";
            //     }
            //     if (index === 2) {
                //         changeBackground[1].style.pointerEvents = "none";
//         changeBackground[1].style.color = "#aaa";
//     }
//     else {
//         changeBackground[1].style.pointerEvents = "fill";
//         changeBackground[1].style.color = "#ddd";
//     }
// }
//  End Bullets






