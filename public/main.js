// Write JavaScript here.
function openAd(event) {
  event.target.parentElement.querySelector(".modal").classList.add("active");
}
for (let button of document.querySelectorAll(".ad .trigger")) {
  button.addEventListener("click", openAd);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains("ad")) {
    event.target
    .querySelector(".modal")
    .classList.remove("active");
  }
}
querySelector.(".sample-work").onclick = function(event){
  event.target.querySelector(".page2").scrollIntoView();
}