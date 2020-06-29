<template>
  <Layout>
    <section class="container mx-auto py-16">
      <div class="text-center mb-4">
        <h1 class="text-5xl text-orange-500">About</h1>
        <p class="text-2xl max-w-2xl mx-auto py-4 font-light text-white">
          <em>
            We are a humble little game developer from Oldsmar, FL, USA that
            builds engaging puzzle-driven games with a focus on depth and
            challenge.
          </em>
        </p>

        <p
          class="text-xl max-w-2xl mx-auto py-4 mb-4"
        >Thought Reactor is held up by its roots in hobby experimental game design and development. Most of our games have been built in weekends or as prototypes for further exploration.</p>

        <p
          class="text-xl max-w-2xl mx-auto py-4"
        >As we move through 2020 and beyond, our focus is on growing those roots into a sturdy tree by branching out into new platforms and exploring new heights in engaging game design.</p>
      </div>
    </section>

    <section class="itch bg-orange-500 mb-16">
      <div class="container mx-auto py-8">
        <h2
          class="text-4xl text-white text-center mb-8 flex items-center justify-center leading-none"
        >
          <font-awesome-icon :icon="['fab', 'itch-io']" size="2x" class="pr-2"></font-awesome-icon>Check Us Out On Itch.io!
        </h2>
        <div class="flex flex-col lg:flex-row items-center">
          <g-image src="~/assets/img/itch_screen.png" class="flex-1"></g-image>

          <div class="text-white flex-1 p-0 md:p-8">
            <p class="mb-4">
              A majority of our games can be played free in the browser (or downloaded) on the
              <tr-link
                to="https://thoughtreactor.itch.io"
                utils="text-white underline"
                external
              >Thought Reactor Itch.io page</tr-link>.
            </p>

            <p class="mb-4">
              Most of these titles are very small and unfinished games made for game jams like Ludum Dare.
              <em>Every game we provide on Itch.io will be DRM-free forever</em>.
            </p>

            <p>
              The launch of
              <tr-link to="https://igeogame.com" utils="text-white underline">IGEO DX</tr-link>&nbsp;on Steam will mark our first release on that platform - so stay tuned for more info!
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container m-auto lg:px-16 lg:my-32">
      <newsletter />
    </div>
  </Layout>
</template>

<script>
import Newsletter from "@/components/partials/Newsletter.vue";

export default {
  components: { Newsletter },
  metaInfo: {
    title: "About"
  }
};
</script>

<style lang="scss">
section.itch {
  box-shadow: 0 15px 30px rgba(218, 73, 24, 0.2);
}
</style>
