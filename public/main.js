// Write JavaScript here.
console.log('main.js loaded successfully!')
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Define "showModal" function
function showModal () {
  modal.style.display = "block";
}

// When the user clicks the button, open the modal 
document
  .querySelector("#myBtn") // grab the element selected by #myBtn
  .addEventListener("click", showModal); // make clicking run showModal

document.querySelector("h1").onclick = showModal;
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}