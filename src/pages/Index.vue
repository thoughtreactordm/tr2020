<template>
  <Layout>
    <div class="container m-auto px-4">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officia odio? Dignissimos blanditiis doloribus, odit maxime facere corrupti consectetur minima illum voluptates quibusdam perferendis quaerat eveniet voluptatum officiis placeat. Id?Eligendi, mollitia porro molestias officiis provident et maxime dignissimos dolores at? Sunt odit maiores laudantium. Repellendus enim dicta cupiditate. Voluptatibus placeat, eaque fugit delectus hic at magni nam. Praesentium, a.</p>
    </div>

    <showcase />

    <div class="container m-auto px-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam
        architecto maiores reiciendis eius qui! Rerum beatae molestias qui
        doloremque laboriosam hic saepe pariatur eius, voluptatem veritatis
        explicabo magnam magni! Architecto sapiente reprehenderit perspiciatis
        facilis adipisci? Delectus dicta id ratione libero officia quam ullam,
        illum error voluptatum corrupti sed perferendis odit harum iusto
        voluptates modi non laboriosam. Adipisci, quo omnis. Voluptates dolorem
        molestias incidunt, autem corrupti ab illum magnam perspiciatis inventore
        laborum aliquid nemo laboriosam vel, odit accusantium. Reiciendis
        accusamus, consequuntur eum magnam aut sed ipsa voluptatibus ut
        exercitationem ad? Id est, iusto alias amet nulla ab, quae dolore porro
        excepturi ratione exercitationem eum minus expedita mollitia sunt ea
        provident consequuntur cumque. Nostrum esse alias, ipsa totam accusamus
        illo! Cum! Autem saepe blanditiis dicta, reiciendis tempora labore dolores
        deleniti praesentium ipsum aperiam minus porro, debitis nisi quas qui
        animi maxime distinctio voluptates quisquam iusto perspiciatis voluptatem
        alias? Architecto, aut
        <tr-link to="https://google.com" target="_blank" external>tempora</tr-link>.
      </p>

      <newsletter />
    </div>
  </Layout>
</template>

<script>
import Showcase from "@/components/partials/Showcase.vue";
import Newsletter from "@/components/partials/Newsletter.vue";

export default {
  components: { Showcase, Newsletter },

  metaInfo: {
    title: "Games that soothe ya' noggin'"
  }
};
</script>
