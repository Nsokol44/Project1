//JS for Google Weather Map
var map;
var layers = [];

// Add toggles to the top of the google map.
function toggleLayer(i) {
  if(layers[i].getMap() === null) {
    layers[i].setMap(map);
  }
  else {
    layers[i].setMap(null);
  }
}
//Create map
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 30, lng: -90}
  });

//Create layers for each of the KML files and geoJSON files.
layers[0] = new google.maps.KmlLayer({
    url: 'http://www.srh.noaa.gov/gis/kml/cod/susLink.kml',
    map: map,
preserveViewport: true});

}

