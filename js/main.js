// My Elements
let nav = document.querySelectorAll("header ul li a");
let searchBtn = document.querySelector("header nav .form i");
let loader = document.querySelector(".loader");
let goUpBtn = document.querySelector(".go-up");


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
    console.log(searchBtn)
};

// Settings
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = () => { 
    let scrollTop = document.documentElement.scrollTop;
    loader.style.width = `${(scrollTop / height) * 100}%`;

    // console.log(scrollTop);
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