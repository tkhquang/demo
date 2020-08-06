<template>
  <LMap ref="map" class="map mt-10" :zoom="zoom" :center="center">
    <LTileLayer :url="url" :attribution="attribution"></LTileLayer>
    <LMarker :lat-lng="marker"></LMarker>
  </LMap>
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  components: { LMap, LTileLayer, LMarker },
  data() {
    return {
      zoom: 16,
      center: latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(47.41322, -1.219482)
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.$refs.map.mapObject.scrollWheelZoom.disable();
    });
  }
};
</script>

<style lang="scss" scoped>
.map {
  height: 360px;
  overflow: hidden;
}
</style>
