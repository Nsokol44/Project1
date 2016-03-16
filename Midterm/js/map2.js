//JS for weather google map.
var map;
var layers = [];

//Create a function for toggles at the top of the map.
function toggleLayer(i) {
  if(layers[i].getMap() === null) {
    layers[i].setMap(map);
  }
  else {
    layers[i].setMap(null);
  }
}
//create a function to initialize the map.
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 30, lng: -90}
  });
// Add a GeoJSON file to the map.
map.data.loadGeoJson('https://opendata.arcgis.com/datasets/5281b958e0824f9eab9f34a995431adc_1.geojson');

//Call an info window to hold data.
var infowindow = new google.maps.InfoWindow();

// Create a function that will allow the points to be clicked on
map.data.addListener('click', function(event) {
  // in the geojson feature that was clicked, get the "place" and "mag" attributes
  var place = event.feature.getProperty("STATE");
  var data = event.feature.getProperty("DATA_BEGIN_DATE");
  var html = data + place; // combine place and data, inserting additional text between them
  infowindow.setContent(html); // show the html variable in the infowindow
  infowindow.setPosition(event.feature.getGeometry().get()); // anchor the infowindow at the marker
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)}); // move the infowindow up slightly to the top of the marker icon
  infowindow.open(map);
});
//create layers that will go in the toggle.
layers[0] = new google.maps.KmlLayer({
    url: 'http://www.srh.noaa.gov/gis/kml/raws/rawslink.kml',
    map: map,
 preserveViewport: true});
layers[1] = new google.maps.KmlLayer({
    url: 'http://www.srh.noaa.gov/gis/kml/cod/susLink.kml',
    map: map,
preserveViewport: true});
}

