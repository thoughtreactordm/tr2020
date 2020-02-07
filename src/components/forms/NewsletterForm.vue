<template>
  <div class="p-8 flex-col items-center justify-center">
    <form
      @submit.prevent="handleSubmit"
      name="newsletter"
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="flex flex-wrap justify-center"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>
      <input
        title="Email"
        type="email"
        name="email"
        id="email"
        v-model="formData.email"
        placeholder="Email address"
        class="w-full sm:w-84 py-2 px-3 outline-none bg-grey-600 text-grey-200 placeholder-grey-400 border-l-2 sm:border-b-2 sm:border-l-0 border-grey-400 focus:border-orange-500"
        :disabled="formSuccess"
      />
      <tr-button type="submit" utils="w-full sm:w-auto">Subscribe</tr-button>
    </form>

    <p
      v-if="formSuccess"
      class="text-center font-bold text-orange-500"
    >Submitted! Check your email to confirm subscription.</p>
    <p v-if="formError" class="text-center font-bold text-red-500">Something went wrong!</p>
  </div>
</template>

<script>
export default {
  name: "newsletter-form",

  data() {
    return {
      formData: {
        email: ""
      },
      formSuccess: false,
      formError: false
    };
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(result => {
          if (result.status === 200) {
            this.formData.email = "";
            this.formSuccess = true;
          }
        })
        .catch(() => {
          this.formError = true;
        });
    }
  }
};
</script>
