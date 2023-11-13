function init(){
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(33.454072, 126.793135);
  var mapOptions = {
  center: myLocation,
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
  mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    title: "Jeju Island",
  });
  
  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jeju Island</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Jeju Island</b>, also referred to as <b>Jeju-do</b>, is a  the South Korean island " +
    "of Jeju in the Korea Strait. " +
    "It's known for its beach resorts and volcanic landscape of craters and cavelike lava tubes. " + 
    "Halla Mountain, a dormant volcano, features hiking trails, a crater lake at the 1,950m summit and nearby Gwaneumsa Temple. " +
    "The Geomunoreum Lava Tube System includes 7km-long Manjanggul Cave, created centuries ago when Halla Mountain was still active.</p>" +
    "</div>" + "</div>";
    
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
      });

}    
google.maps.event.addDomListener(window, 'load', init);