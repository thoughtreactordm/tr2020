<template>
  <div class="p-8 flex justify-center">
    <form
      @submit.prevent="submit"
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
        v-model="formData.email"
        placeholder="Email address"
      />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "newsletter",

  data() {
    return {
      formData: {
        email: ""
      }
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
          console.log(result);
        })
        .catch(error => alert(error));
    }
  }
};
</script>
