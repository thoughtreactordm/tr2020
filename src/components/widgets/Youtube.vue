<template>
  <div class="video-container">
    <iframe
      width="560"
      height="349"
      :src="src"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "youtube",

  props: {
    id: { type: String, default: "93tWiavHzWs" },
  },

  computed: {
    src() {
      let root = "https://www.youtube.com/embed/";
      let settings = "?modestbranding=1";

      return root + this.id + settings;
    },
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
