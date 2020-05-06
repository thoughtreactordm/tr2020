<template>
  <div class="video-container">
    <iframe
      :src="src"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "vimeo",

  props: {
    id: { type: String, default: "133298197" },
  },

  computed: {
    src() {
      let root = "https://player.vimeo.com/video/";

      return root + this.id;
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
