const canva = document.querySelector("main");

const backgroundFrames = [];

let frameIndex = 0;

let myInterval;

// TEST AVEC PAUSE
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || 1000));
}
// FIN TEST AVC PAUSE

function createBackgroundArray(amountOfFrame) {
  for (let i = 0; i < amountOfFrame; i++) {
    backgroundFrames[
      i
    ] = `url("explosiontransparent/explosiontransparent_0000${i}.png")`;
  }
}

async function animate(element, interval) {
  for (let i = 0; i < backgroundFrames.length; i++) {
    element.style.backgroundImage = backgroundFrames[i];
    await sleep(interval);
    if (i + 1 == backgroundFrames.length) {
      element.remove();
    }
  }
}

function displayDrop(parentElement, positionX, positionY) {
  const drop = document.createElement("div");
  positionX -= 65 / 2;
  positionY -= 65 / 2;
  drop.style.left = positionX + "px";
  drop.style.top = positionY + "px";
  drop.classList.add("drop-style");
  drop.style.backgroundImage = backgroundFrames[0];
  parentElement.appendChild(drop);
  animate(drop, 41);
}

function initCanva() {
  canva.addEventListener("click", (event) => {
    displayDrop(canva, event.clientX, event.clientY);
  });
}

function main() {
  createBackgroundArray(10);
  initCanva();
}

main();
