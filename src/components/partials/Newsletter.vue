<template>
  <div class="p-8 flex justify-center">
    <form
      @submit.prevent="handleSubmit"
      name="newsletter"
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field" /> </label>
      </p>
      <input
        type="email"
        name="email"
        v-model="formData.email"
        placeholder="Email address"
        class="outline-none p-2 bg-grey-200 text-grey-600 focus:bg-orange-100 w-64"
        :disabled="formSuccess"
      />
      <button
        type="submit"
        :disabled="formSuccess"
        class="bg-orange-500 hover:bg-orange-700 px-4 py-2 text-orange-800 hover:text-orange-200 font-bold transition duration-150 ease-in-out"
      >
        Subscribe
      </button>
      <p v-if="formSuccess" class="text-center font-bold">
        Submitted! Check your email your subscription.
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "newsletter",

  data() {
    return {
      formData: {
        email: ""
      },
      formSuccess: false
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
        .catch(error => alert(error));
    }
  }
};
</script>
