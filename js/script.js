function clsHowtouse() {
    var divHowtouse = document.getElementById("howtouseContainer");
    divHowtouse.style.display = "none";
}
function openHowtouse() {
    var divHowtouse = document.getElementById("howtouseContainer");
    if (divHowtouse.style.display != "flex")
        divHowtouse.style.display = "flex";
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomStyles() {
  var r = getRandomInt(1, 255);
  var g = getRandomInt(1, 255);
  var b = getRandomInt(1, 255);
  var mt = getRandomInt(1, 200);
  var ml = getRandomInt(1, 50);
  var dur = getRandomInt(1, 5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite;
  z-index: 1;
  `;
}
const balloonContainer = document.getElementById("balloon-container");
function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}
function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

const starsContainer = document.getElementById("starsContainer");
function createStars(num) {
  for (let i = 0; i < num; i++) {
      const star = document.createElement("div");
      star.className = `star fa fa-star ${i}`;
      starsContainer.appendChild(star);
  }
}
const allStars = document.getElementsByClassName('star');
function appendStars() {
  const userName = document.getElementById('inpName').value;
  const userAge = parseInt(document.getElementById('inpYears').value);
  if (userName.length > 30 || userName.length < 1) {
    alert("Please enter your name (1-30 characters)");
    return;
  }
  if (isNaN(userAge) || !Number.isInteger(userAge) || userAge <= 0 || userAge >= 100) {
    alert("Please enter your age (1-99)");
    return;
  } 
  localStorage.setItem('bdonlineName', userName);
  localStorage.setItem('bdonlineAge', userAge);
  for (let star of allStars) {
    star.style.opacity = 1;
    star.style.transform = 'translate(0, 0) scale(1)';    
  }
  var xSeed = getRandomInt(350, 380);
	var ySeed = getRandomInt(120, 170);
  for (let star of allStars) {
		var speed = getRandomInt(1, 5);
		var rotation = getRandomInt(5, 100);
		var scale = getRandomInt(0.8, 1.5);
		var x = getRandomInt(-xSeed, xSeed);
		var y = getRandomInt(-ySeed, ySeed);
    star.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(' + scale + ')';
    star.style.transition = speed + 's ease-out';
  }
  setTimeout(() => {
    for (var i = 0, maxi = allStars.length; i < maxi; i++) {
		  allStars[i].style.opacity = 0;
    }
    window.location.href = "play.html";
  }, 1400);
  
}

function openWishGallery() {
  window.location.href = "allWishes.html";
}
window.addEventListener("load", () => {
  createBalloons(10);
  createStars(20);
});
