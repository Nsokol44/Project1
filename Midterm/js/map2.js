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
map.data.loadGeoJson('https://opendata.arcgis.com/datasets/11a4c0d646544b3ba7290c100dacfa8a_0.geojson');

// Create an infowindow object to use later
var infowindow = new google.maps.InfoWindow();

/* Create a "listener" that will wait for the user to click an earthquake point,
 * and then display the infowindow with details about that earthquake.
 */
map.data.addListener('click', function(event) {
  // in the geojson feature that was clicked, get the "place" and "mag" attributes
  var place = event.feature.getProperty("STATION");
  var dew = event.feature.getProperty("YR5_DEW_JAN_ALL");
  var html = dew + ' Dew Point, ' + place; // inserting additional text between them
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
layers[2] = map.data.loadGeoJson('https://opendata.arcgis.com/datasets/11a4c0d646544b3ba7290c100dacfa8a_0.geojson');

// Create an infowindow object to use later
var infowindow = new google.maps.InfoWindow();

/* Create a "listener" that will wait for the user to click an earthquake point,
 * and then display the infowindow with details about that earthquake.
 */
map.data.addListener('click', function(event) {
  // in the geojson feature that was clicked, get the "place" and "mag" attributes
  var place = event.feature.getProperty("STATION");
  var dew = event.feature.getProperty("YR5_DEW_JAN_ALL");
  var html = dew + ' Dew Point, ' + place; // inserting additional text between them
  infowindow.setContent(html); // show the html variable in the infowindow
  infowindow.setPosition(event.feature.getGeometry().get()); // anchor the infowindow at the marker
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)}); // move the infowindow up slightly to the top of the marker icon
  infowindow.open(map);
});
})
}

