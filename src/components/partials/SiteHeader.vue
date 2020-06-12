<template>
  <header
    class="w-full border-t-8 bg-gradient-b-banner border-gradient-r-brand p-4"
  >
    <div
      class="container mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-center min-h-24"
    >
      <g-link to="/" title="Home Page">
        <g-image
          src="~/assets/img/logo.svg"
          class="logo"
          alt="Thought Reactor Logo"
          :immediate="true"
        ></g-image>
      </g-link>

      <div class="flex flex-col lg:flex-row">
        <ul class="list-none flex flex-row items-center justify-center">
          <li
            v-for="item in navItems"
            :key="item.label"
            class="px-4 lg:px-6 mr-2"
          >
            <g-link
              :to="item.to"
              class="nav-item text-white font-bold block py-4 hover:text-orange-400"
              >{{ item.label }}</g-link
            >
          </li>
        </ul>

        <socials class="text-white" />
      </div>
    </div>
  </header>
</template>

<script>
import Socials from "@/components/partials/Socials.vue";

export default {
  name: "site-header",
  components: { Socials },

  data() {
    return {
      navItems: [
        { label: "Blog", to: "/blog" },
        { label: "About", to: "/about" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23da4917' fill-opacity='0.12'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  box-shadow: inset 0 -20px 30px #222;
}

.logo {
  width: 95%;
  max-width: 250px;
  transition: all 150ms ease-in-out;

  &:hover {
    transform: scale(1.025);
    filter: drop-shadow(0 3px 20px rgba(218, 73, 23, 0.5));
  }
}

.nav-item {
  &.active,
  &.active--exact {
    color: #da4918;
  }
}
</style>
