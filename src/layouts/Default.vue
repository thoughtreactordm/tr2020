<template>
  <div class="layout">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url("https://fonts.googleapis.com/css?family=Changa+One&display=swap");

body,
html {
  height: 100%;
}

body {
  font-family: "Changa One", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #222;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
}

.layout {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
