<template>
  <section class="showcase py-16 lg:py-32 my-16 w-full border-t-4">
    <div class="container mx-auto md:px-16 flex flex-col items-center lg:text-center text-xl">
      <g-link href="https://igeogame.com" title="IGEO DX Logo">
        <g-image src="~/assets/img/igeo_logo.png" class="logo mb-4" alt="Thought Reactor Logo"></g-image>
      </g-link>

      <div class="info flex flex-col lg:flex-row lg:items-center">
        <div class="video lg:w-1/2 xs:my-8 lg:my-0">
          <vimeo id="441158036"></vimeo>
        </div>
        <div class="info-body lg:p-8 lg:w-1/2">
          <h2 class="xs:text-3xl sm:text-4xl text-shadow leading-tight">Play the Open Alpha Now!</h2>
          <p class="lg:text-xl my-6">
            Casual in it's approach but punishing in it's execution, IGEO is a
            Sokoban-style puzzler. Mechanically simple but
            challenging, players will push and combine like-shapes to solve
            increasingly complex spatial and logic puzzles.
          </p>

          <tr-button-link
            to="https://thoughtreactor.itch.io/igeo-dx"
            :icon="['fab', 'itch-io']"
            utils="text-white"
          >Download Now on Itch.io</tr-button-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vimeo from "@/components/widgets/Vimeo.vue";

export default {
  name: "igeo-showcase",
  components: { Vimeo }
};
</script>

<style lang="scss" scoped>
section.showcase {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0e3c43+0,061e24+100 */
  background: rgb(14, 60, 67); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(14, 60, 67, 1) 0%,
    rgba(6, 30, 36, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(14, 60, 67, 1) 0%,
    rgba(6, 30, 36, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    rgba(14, 60, 67, 1) 0%,
    rgba(6, 30, 36, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0e3c43', endColorstr='#061e24',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  background-position-x: center;
  background-repeat: no-repeat;
  box-shadow: 0 10px 20px rgba(6, 31, 36, 1);

  border-color: rgb(35, 64, 66);

  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);

  div.video-container {
    box-shadow: 0 15px 20px rgba(6, 31, 36, 1);
  }

  div.info {
    color: #85bbc2;
  }
}
</style>
