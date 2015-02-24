var siteHandler = {
  /**
   * Establece los eventos de la app
   */
  setEvents: {
    /**
     * Al hacer click sobre una caja se muestra un modal con su contenido (items).
     * Si la caja ha sido comprobada se ocultará al cerrar el modal.
     */
  },
  init: function() {
    console.log('init!');
    //af9d9d26 municipios
    L.mapbox.accessToken = 'pk.eyJ1Ijoiam9zZW5tYXIiLCJhIjoiRTBnY2plZyJ9.16b9pM_DfVdunAs6jZmE-A';

    /*var southWest = L.latLng(-59.6, -180),
        northEast = L.latLng(59.6, 180),
        bounds = L.latLngBounds(southWest, northEast);*/

    var map = L.mapbox.map('map', 'josenmar.52fb0b8a', {
      // set that bounding box as maxBounds to restrict moving the map
      // see full maxBounds documentation:
      // http://leafletjs.com/reference.html#map-maxbounds
      tileLayer: {
          // This map option disables world wrapping. by default, it is false.
          continuousWorld: false,
          // This option disables loading tiles outside of the world bounds.
          noWrap: true
      }
    });
    L.control.scale().addTo(map);

    function addLayer(layer, name, zIndex) {
        layer
            .setZIndex(zIndex)
            .addTo(map);

        // Create a simple layer switcher that
        // toggles layers on and off.
        var link = document.createElement('a');
            link.href = '#';
            link.className = 'active';
            link.innerHTML = name;

        link.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (map.hasLayer(layer)) {
                map.removeLayer(layer);
                this.className = '';
            } else {
                map.addLayer(layer);
                this.className = 'active';
            }
        };

        layers.appendChild(link);
    }
  }
};

siteHandler.init();
