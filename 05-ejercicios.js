const $body = document.querySelector("body");
const $selectColor = document.querySelector("#colors");


$selectColor.addEventListener("change", (e) => {
  if(e.target.value === "red"){
    $body.className = "";
    $body.classList.add("red");
  }else if(e. target.value === "blue"){
    $body.classList = "";
    $body.classList.add("blue");
  }else if(e.target.value === "green"){
    $body.classList = "";
    $body.classList.add("green");
  }
})

/* let colorChoosed = $selectColor.value; 

switch(colorChoosed){
  case "red":
    $body.className = "";
    $body.classList.add ="red";
    break;
  case "blue":
    $body.className = "";
    $body.classList.add = "blue";
    break;
  case "green":
    $body.className = "";
    $body.classList.add = "green";
} */