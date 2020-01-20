<template>
  <Layout>
    <g-image src="~/assets/img/logo.svg" class="logo"></g-image>

    <h1>NEW SITE COMING SOON...</h1>

    <h3>
      Play Our Games on
      <a href="https://thoughtreactor.itch.io">Itch.io</a>!
    </h3>

    <div class="socials">
      <a href="https://twitter.com/thought_reactor">TWITTER</a>
      <a href="https://instagram.com/thoughtreactor">INSTAGRAM</a>
      <a href="https://twitch.tv/thoughtreactordev">TWITCH</a>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Coming Soon..."
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
}

h3 {
  font-size: 1.3rem;

  a {
    color: #da4917;
  }
}

.logo {
  width: 100%;
  max-width: 900px;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  padding: 2em;
}

.socials > a {
  color: #da4917;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5em;
}

.socials > a:hover {
  color: white;
}
</style>
