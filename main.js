// 1
document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
  }
// 2
document.getElementById('lee').onclick = function() {
    document.getElementById('lee').hidden = true;
  }
// 3
let button = document.querySelector("button");
  button.addEventListener("click", function() {
    console.log("Кнопка нажата.");
  });
//4
const inputs = document.querySelectorAll("input")
const buttonSend = document.querySelector("button")
const userData = {
    name: "ayana",
    email: "marlanova.ay",
    ps: "zhumadilova"
}
buttonSend.onclick = () => {
    if(inputs[1].value === userData.email && inputs[2].value === userData.ps) {
        alert("hello" + userData.name)
        inputs[1].style.border= ''
        inputs[2].style.border= ''
    }else {
        inputs[1].style.border= '3px solid red'
        inputs[2].style.border= '2px solid red'
    }
}