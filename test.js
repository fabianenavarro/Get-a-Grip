function switchChannel(el){
// find all the elements in your channel list and loop over them
Array.prototype.slice.call(document.querySelectorAll('ul[data-tag="channelList"] li')).forEach(function(element){
  // remove the selected class
  element.classList.remove('selected');
});
// add the selected class to the element that was clicked
el.classList.add('selected');
}

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
