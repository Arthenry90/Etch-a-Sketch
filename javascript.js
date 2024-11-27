function createSquare(){
    for(let i = 0; i < 10000;i++){
    const square = document.createElement("div");
    square.classList.add("square")
    square.addEventListener("click", function(){
        square.style.backgroundColor = "black";
        console.log("clicou");
    })
    document.getElementById("mesh").appendChild(square);
    }
}




