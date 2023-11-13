function initMap(){
  const el = document.getElementById('canvas');
  const myLatLng = {lat: 33.454072, lng: 126.793135};
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  });
  
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jeju Island</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Jeju Island</b>, also referred to as <b>Jeju-do</b>, is a  the South Korean island " +
    "of Jeju in the Korea Strait. " +
    "It's known for its beach resorts and volcanic landscape of craters and cavelike lava tubes. " + 
    "Hallasan Mountain, a dormant volcano, features hiking trails, a crater lake at the 1,950m summit and nearby Gwaneumsa Temple. " +
    "The Geomunoreum Lava Tube System includes 7km-long Manjanggul Cave, created centuries ago when Hallasan was still active.</p>" +
    "</div>" +
    "</div>";
    
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Jeju Island",
  });
  
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Jeju Island",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });



}    
window.initMap = initMap;    