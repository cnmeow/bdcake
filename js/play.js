const cakeContainer = document.getElementById("cakeContainer");
const controlContainer = document.getElementById("controlContainer");
const partyContainer = document.getElementById("partyContainer");

// Add 'num' img of cake to cakeContainer
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

// Add selected cake and candles to partyContainer when click cake img
function selectCake(idCake) {
    cakeContainer.style.display = "none";
    partyContainer.style.display = "flex";
    controlContainer.style.display = "flex";

    // Add cake to partyContainer
    const cake = document.createElement("img");
    cake.src = `img/cake/${idCake}.png`;
    cake.classList.add("cakeSelected");
    partyContainer.appendChild(cake);
    const userAge = localStorage.getItem('age');

    // Add candles to partyContainer
    const candleContainer = document.createElement("div");
    candleContainer.id = "candleContainer";
    for (let i of userAge) {
        const candle = document.createElement("img");
        candle.src = `img/candle/${i}off.png`;
        candle.classList.add("candle");
        candleContainer.appendChild(candle);
    }
    partyContainer.appendChild(candleContainer);
}

// Unselect current cake and change cake
function changeCake() {
    controlContainer.style.display = "none";
    cakeContainer.style.display = "grid";
    partyContainer.style.display = "none";
    partyContainer.innerHTML = "";
}

// Start party when click "Start party" button
function startParty() {
    controlContainer.style.display = "none";
    
    // Light candles
    const allCandles = document.getElementsByClassName("candle");
    for (let candle of allCandles) {
        candle.src = candle.src.replace("off", "light");
    }
}

window.addEventListener("load", () => {
    addCake(10);
  });
