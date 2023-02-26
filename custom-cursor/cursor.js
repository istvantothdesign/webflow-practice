const cursor = document.querySelector("#cursor");
const cursorCircle = cursor.querySelector(".cursor__circle");

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

window.addEventListener("mousemove", updateCoordinates);

function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);

  pos.x += diffX * speed;
  pos.y += diffY * speed;

  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);

  const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
  const rotate = "rotate(" + angle + "deg)";
  const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

// Addition start
const links = document.querySelectorAll("a");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  if (input.classList.contains("w-button")) {
    input.setAttribute("cursor-class", "text-link");
  }
});

links.forEach((link) => {
  // link.setAttribute("cursor-class", "arrow");
  // link.classList.add("link-hover");
  if (link.classList.contains("w-lightbox")) {
    link.setAttribute("cursor-class", "lightbox");
    link.classList.add("cursor-none");
  } else if (link.classList.contains("navbar-brand")) {
    link.setAttribute("cursor-class", "text-link");
  } else if (link.parentNode.classList.contains("is--single")) {
    link.setAttribute("cursor-class", "cover-image");
  } else if (link.querySelectorAll("img").length > 0) {
    link.setAttribute("cursor-class", "arrow");
    link.classList.add("cursor-none");
  } else {
    link.setAttribute("cursor-class", "text-link");
  }
});

// Addition End

const cursorModifiers = document.querySelectorAll("[cursor-class]");

cursorModifiers.forEach((curosrModifier) => {
  curosrModifier.addEventListener("mouseenter", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.add(className);
  });

  curosrModifier.addEventListener("mouseleave", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.remove(className);
  });
});
