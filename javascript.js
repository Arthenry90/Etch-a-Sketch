function removeAll(){
    const squares = document.querySelectorAll(".square")
    squares.forEach(squares => squares.remove());
}

function createSquare(size){
    for(let i = 0; i < size;i++){
    const square = document.createElement("div");
    square.classList.add("square")
    square.addEventListener("mouseout", function(){
        square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        console.log("clicou");
    })
    document.getElementById("mesh").appendChild(square);
    }
}
window.onload = createSquare(4096);

document.getElementById("btn").addEventListener("click", function(){
    const tamanho = prompt("Selecione o tamanho");
    removeAll();
    console.log(tamanho);
    createSquare(tamanho * tamanho);
});






