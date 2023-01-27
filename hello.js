// get the element you want to animate
var box = document.getElementById("animated-box");

// set initial position
box.style.left = "0px";

// animation function
function animateBox() {
  // get current position
  var pos = parseInt(box.style.left);

  // update position
  pos += 10;

  // set new position
  box.style.left = pos + "px";

  // if box reaches the end of the screen, reset position
  if (pos > window.innerWidth) {
    box.style.left = "0px";
  }

  // call the animation function again after 10 milliseconds
  setTimeout(animateBox, 10);
}

// start animation
// animateBox();