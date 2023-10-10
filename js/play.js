const cakeContainer = document.getElementById("cakeContainer");
const controlContainer = document.getElementById("controlContainer");
const partyContainer = document.getElementById("partyContainer");
const hpbdSong = new Audio("sound/hpbd.mp3");
const wishContainer = document.getElementById("wishContainer");

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
    const userAge = localStorage.getItem('bdonlineAge');

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
    document.body.style.backgroundColor = "#2d1506";
    hpbdSong.play();
    hpbdSong.addEventListener('ended', function() {
        const userName = localStorage.getItem('bdonlineName');
        document.getElementsByClassName("wishTittle")[0].innerHTML = "Happy Birthday, " + userName + "!";
        wishContainer.style.display = "block";
    });
    // Light candles
    const allCandles = document.getElementsByClassName("candle");
    for (let candle of allCandles) {
        candle.src = candle.src.replace("off", "light");
    }
}
function blowCandle() {
    const wishes = document.getElementById("wishContent").value;
    if (wishes.length > 1000) {
        alert("Please enter a wish under 1000 characters");
        return;
    }
    document.body.style.backgroundColor = "#fcd2b8";
    wishContainer.style.display = "none";

    // Blow candles
    const allCandles = document.getElementsByClassName("candle");
    for (let candle of allCandles) {
        candle.src = candle.src.replace("light", "off");
    }
    document.getElementById("wishGallery").style.display = "block";
}
function openWishGallery() {
    window.location.href = "allWishes.html";
}
window.addEventListener("load", () => {
    addCake(10);
  });