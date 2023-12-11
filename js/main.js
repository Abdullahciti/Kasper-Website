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
let portfolioLi = document.querySelectorAll(".portfolio .shuffle li");
let videoBtn = document.querySelector(".video button");
let stats = document.querySelector(".stats");
let statsNum = document.querySelector(".stats .box .number");
let statsNums = document.querySelectorAll(".stats .box .number");
let ourSkills = document.querySelector(".our-skills");
let skillsContent = document.querySelectorAll(".our-skills .testimonials .content")
let skillsBullets = document.querySelectorAll(".our-skills .testimonials .bullets li")
let skillBar = document.querySelector(".skills .prog-holder .prog span");
let skillBars = document.querySelectorAll(".skills .prog-holder .prog span");

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
started = false;
startedNo = false;


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
            goUpBtn.style.opacity = "0";
        }
    } else {
        goUpBtn.style.display = "none";
    }

    // stats 
    if (window.scrollY >= stats.offsetTop ){
        if (!started){
            statsNums.forEach((ele) => startFind(ele));
        };
        started = true;
    }
    // Skills
    if (window.scrollY >= ourSkills.offsetTop){
        if (!startedNo){
            skillBars.forEach((el) => startFindEl(el));
        };
        startedNo = true;
    }
}
// End Loader and Go up Button

//Start Toggle Menu

// toggleMenu.addEventListener("click", ()=> {
//     listMenu.style = `display: flex;
//     flex-direction: column;
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background-color: rgb(0 0 0 / 50%);`
// })

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
//  Start Portofolio
portfolioLi.forEach((el)=> {
    el.addEventListener("click", () => {
        portfolioLi.forEach((el)=> {
            el.classList.remove("active");
        })
        el.classList.add("active");
    })
})
//  End Portofolio


// Start Video 

// videoBtn.addEventListener("click", () => {
//     download(videoBtn)
// })
// function download(element) {

// }
// End Video

//  Start Stats
function startFind (el){
    let goalNumber = el.dataset.number;
    let counter = setInterval(() => {
        el.textContent++
        if(el.textContent == goalNumber){
            clearInterval(counter);
        }
    }, 1500 / goalNumber);
}
//  End Stats
// Start Testi And Skills
skillsBullets.forEach((el) => {
    el.addEventListener("click", () => {
        skillsBullets.forEach((bullet) => {
            bullet.classList.remove("active");
        })
        el.classList.add("active");
    })
});

//  Skills
skillBars.forEach((el) => {
    el.addEventListener("click", (el) => startFindEl(el));
})

function startFindEl (el) {
    let skillGoal = el.dataset.progress;
    currentNumber = 0;
    let counter = setInterval(() => {
        el.style = `width:${currentNumber++}%;`
        if(`${currentNumber}%` >= skillGoal){
            console.log(skillGoal);
            clearInterval(counter);
        }
    }, 3000 / parseInt(skillGoal));
}
// End Testi And Skills 

