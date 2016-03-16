 // Establish a map.
     var map;  
      require([  
        "esri/map", "esri/dijit/Scalebar", "esri/layers/ArcGISDynamicMapServiceLayer",  
        "esri/dijit/BasemapToggle", "dojo/domReady!",   
      ], function(  
        Map, Scalebar, ArcGISDynamicMapServiceLayer, BasemapToggle 
      ) {  
      
        map = new Map("map", {  
          basemap: "topo",  
          center: [-90, 30],  
          zoom: 4  
        });  
//Create a toggle to switch between the two basemap layers.
       var toggle = new BasemapToggle({
        map: map,
        basemap: "satellite"
        }, "BasemapToggle");
        toggle.startup();
//Add a drought layer to the map.
        var droughtMapServiceLayer = new ArcGISDynamicMapServiceLayer("http://services.gis.ca.gov/arcgis/rest/services/AtmosphereClimate/DroughtMonitor/MapServer");

        map.addLayer(droughtMapServiceLayer);
  //Add a scalebar to the map.
        var scalebar = new Scalebar({  
          map: map,  
          scalebarUnit: "dual"  
        });  
          
      }); 
