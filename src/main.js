import "@/styles/main.css";

import VueFeather from "vue-feather";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueFeather);

  head.meta.push({
    name: "description",
    content:
      "Indie game developer focusing on engaging and challenging puzzle-infused games for PC."
  });

  head.meta.push({
    name: "theme-color",
    content: "#da4917"
  });

  head.script.push({
    type: "application/ld+json",
    json: {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Thought Reactor",
      url: "https://thought-reactor.net",
      sameAs: [
        "https://www.facebook.com/ThoughtReactor",
        "https://twitter.com/thought_reactor",
        "https://www.youtube.com/TheThoughtReactor"
      ]
    }
  });
}
