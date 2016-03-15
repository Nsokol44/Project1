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

       var toggle = new BasemapToggle({
        map: map,
        basemap: "satellite"
        }, "BasemapToggle");
        toggle.startup();

        var droughtMapServiceLayer = new ArcGISDynamicMapServiceLayer("http://services.gis.ca.gov/arcgis/rest/services/AtmosphereClimate/DroughtMonitor/MapServer");

        map.addLayer(droughtMapServiceLayer);
  
        var scalebar = new Scalebar({  
          map: map,  
          scalebarUnit: "dual"  
        });  
          
      }); 