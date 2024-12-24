let MenuBtn = document.querySelector("#header__menu button");
let MenuX = document.querySelector(".header__MenuX")

MenuBtn.addEventListener("click", function(){
    document.body.classList.add("ShowMenu")  
})
MenuX.addEventListener("click", function(){
    document.body.classList.remove("ShowMenu")
})

const toggle = document.getElementById("toggle");

toggle.addEventListener("change", function () {
  if (this.checked) {
    console.log("Switch is ON");
  } else {
    console.log("Switch is OFF");
  }
});

