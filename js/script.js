var link = document.querySelector(".open");
var popup = document.querySelector(".wrap-call-back");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[name=name]");
var close = document.querySelector(".call-back-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("call-back-show");
  overlay.classList.add("overlay-show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("call-back-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("call-back-show")) {
      popup.classList.remove("call-back-show");
      overlay.classList.remove("overlay-show");
    }
  }
});


var latlng = new google.maps.LatLng(59.938498, 30.329544);

var settings = {
  zoom: 16,
  center: latlng,
  mapTypeId: 'roadmap'
}

var map = new google.maps.Map(document.getElementById("map"),
  settings);

var companyLogoIcon = {
  url: './img/map-pin.png',
  size: new google.maps.Size(287, 142),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(40, 142)
};

var companyPos = new google.maps.LatLng(59.938555, 30.322843);

var companyMarker = new google.maps.Marker({
    position: companyPos,
    map: map,
    icon: companyLogoIcon
});