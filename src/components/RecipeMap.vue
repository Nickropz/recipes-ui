<template>
  <div>
    <div id="map" />
  </div>
</template>

<script>
  import response from '../assets/data.json'

  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import 'leaflet.markercluster'

  export default {
    
    name: 'RecipeMap',

    props: {
      msg: String
    },

    data () {
      return {
        map: null,
        markers: null,
      }
    },

    // Leaflet map
    mounted () {
      this.map = L.map('map').setView([0, 0], 3)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://carto.com/">carto.com</a> contributors'
      }).addTo(this.map)

      this.markers = L.markerClusterGroup()

      // let Position = L.Control.extend({ 
      //   _container: null,
      //   options: {
      //     position: 'bottomleft'
      //   },

      //   onAdd: function () {
      //     var latlng = L.DomUtil.create('div', 'mouseposition');
      //     this.latlng = latlng;
      //     return latlng;
      //   },

      //   updateHTML: function(lat, lng) {
      //     var latlng = lat + " " + lng;
      //     this.latlng.innerHTML = "LatLng: " + latlng;
      //   }
      // });
      // this.position = new Position();
      // this.map.addControl(this.position);

      // this.map.on('click', event => {
      //   let lat = Math.round(event.latlng.lat * 100000) / 100000;
      //   let lng = Math.round(event.latlng.lng * 100000) / 100000;
      //   console.log(lat)
      //   console.log(lng)
      //   this.position.updateHTML(lat, lng);
      // })

      // create marker for each result
      response.results.forEach(res => {
        const marker = new L.marker(new L.LatLng(res.lat, res.lng), {
          icon: L.divIcon({ 
            //marker appearance
            html: '<div class="mdi mdi-map-marker" style="font-size: 25px; color: red;" />',
            className: 'map-marker'
          })
        }).bindPopup(`Recipe Name: ${res.name}<br>Lat: ${res.lat}<br>Lng: ${res.lng}`)
        this.markers.addLayer(marker)
      })

      // add marker to marker cluster
      this.map.addLayer(this.markers)
    },

   // methods: {
      
    //}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #map {
    height: calc(100vh - 20px);
  }
</style>
