import "@/styles/main.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, layer } from "@fortawesome/fontawesome-svg-core";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faItchIo, faTwitch, faTwitter, faYoutube, faInstagram, faHeart);

import DefaultLayout from "~/layouts/Default.vue";

import UI from "./components/elements";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);

  UI.forEach(c => {
    Vue.component(c.name, c);
  });

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
