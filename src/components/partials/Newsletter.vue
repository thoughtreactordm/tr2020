<template>
  <section
    class="xs:px-4 xs:py-8 sm:p-8 mt-16 flex flex-col items-center border-dashed border-t-2 border-b-2 border-orange-500"
  >
    <h3 class="text-2xl sm:text-3xl text-center text-white">Become a Partisan!</h3>
    <p class="text-center w-full sm:w-1/2">Subscribe to receive freebies, early builds, and more!</p>
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