<template>
  <div class="p-8 flex justify-center">
    <form @submit.prevent="submit">
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
      email: "",
      endpoint:
        "https://thought-reactor.us3.list-manage.com/subscribe/post-json?u=73b7823108f06df6de2bbb95f&amp;id=22aff0536e",
      id: "348509"
    };
  },

  methods: {
    submit() {
      let data = {
        email_address: this.email,
        status: "pending"
      };

      axios
        .post(this.endpoint, data, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(result => {
          console.log(result);
        })
        .error(result => {
          console.log(result);
        });
    }
  }
};
</script>
