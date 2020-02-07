<template>
  <section
    class="p-8 mt-16 flex flex-col items-center border-dashed border-t-2 border-b-2 border-orange-500"
  >
    <h3 class="text-center text-white text-3xl">Become a Partisan!</h3>
    <p
      class="text-center w-full sm:w-1/2"
    >Sign up for our Partisan Newsletter to receive announcements, updates, and exclusive releases!</p>
    <newsletter-form />
  </section>
</template>

<script>
import NewsletterForm from "@/components/forms/NewsletterForm.vue";

export default {
  name: "newsletter",

  components: { NewsletterForm }
};
</script>