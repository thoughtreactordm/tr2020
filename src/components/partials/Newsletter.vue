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
      <input type="email" v-model="email" placeholder="Email address" />
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
      email: ""
    };
  },

  methods: {
    submit(e) {
      let data = {
        "form-name": e.target.getAttribute("name"),
        email_address: this.email,
        status: "pending"
      };

      axios
        .post("/", data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(result => {
          console.log(result);
        })
        .catch(result => {
          console.log(result);
        });
    }
  }
};
</script>
