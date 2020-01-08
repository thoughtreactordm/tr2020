// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.meta.push({
    name: "description",
    content:
      "Indie game developer focusing on engaging and challenging puzzle-infused games for PC and Mac."
  });

  head.link.push({
    rel: "canonical",
    href: "https://thought-reactor.net"
  });
}
