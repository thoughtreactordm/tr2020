<template>
  <div class="layout">
    <site-header />

    <main>
      <slot />
    </main>

    <site-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteHeader from "@/components/partials/SiteHeader.vue";
import SiteFooter from "@/components/partials/SiteFooter.vue";

export default {
  components: { SiteHeader, SiteFooter }
};
</script>
