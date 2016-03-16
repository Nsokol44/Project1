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

map.data.loadGeoJson('https://opendata.arcgis.com/datasets/17b9eb53cf4a4792b9889b8a87efef43_3.geojson');

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

