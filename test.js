//ANIMATION SCRIPTS//
function switchChannel(el){
// find all the elements in your channel list and loop over them
Array.prototype.slice.call(document.querySelectorAll('ul[data-tag="channelList"] li')).forEach(function(element){
  // remove the selected class
  element.classList.remove('selected');
});
// add the selected class to the element that was clicked
el.classList.add('selected');
}

// Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");
// Close Popup Event
closePopup.onclick = function() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};
// Show Overlay and Popup
button.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
};
//ANIMATION SCRIPT END//
