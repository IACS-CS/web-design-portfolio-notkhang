// Write JavaScript here.
function openAd(event) {
  event.target.parentElement.querySelector(".modal").classList.add("active");
}
for (let button of document.querySelectorAll(".ad .trigger")) {
  button.addEventListener("click", openAd);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("ad")) {
    event.target.querySelector(".modal").classList.remove("active");
  }
};
for (let a of document.querySelectorAll(".sample-work a")) {
  a.addEventListener("click", (event) => {
    event.preventDefault();

    // Get selector from HREF which will be a hash URL
    const href = a.getAttribute("href");

    // Select the element
    const targetElement = document.querySelector(".page2");

    // Scroll smoothly into view
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
}

var images = ["impressionsunrise.jpg", "waterlillies.jpg", "nightcafe.jpg"];
var index = 0;
var scrollEl = document.querySelector("#scroll");

// On a timer...
setInterval(function () {
  // what we do on repeat...
  index += 1;
  if (index === images.length) index = 0; 
  scrollEl.style.backgroundImage = `url('${images[index]}')`;      
}, 
6000 // every x milliseconds
);
