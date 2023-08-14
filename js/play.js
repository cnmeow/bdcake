const cakeContainer = document.getElementById("cakeContainer");
function addCake(num) {
    for (let i = 1; i <= num; i++) {
      const cake = document.createElement("div");
      cake.classList.add("cakeImg");
      const cakeimg = document.createElement("img");
      cakeimg.src = `img/cake/${i}.png`;
        cakeimg.addEventListener("click", () => {
            selectCake(i);
        });
      cake.appendChild(cakeimg);
      cakeContainer.appendChild(cake);
    }
}
const partyContainer = document.getElementById("partyContainer");
function selectCake(idCake) {
    cakeContainer.style.display = "none";
    partyContainer.style.display = "block";
    const cake = document.createElement("img");
    cake.src = `img/cake/${idCake}.png`;
    cake.classList.add("cakeSelected");
    partyContainer.appendChild(cake);
    const userAge = localStorage.getItem('age');
    alert(userAge);
}
window.addEventListener("load", () => {
    addCake(10);
});
