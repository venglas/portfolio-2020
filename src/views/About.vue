<template>
  <article class="about">
    <header class="header">
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
    </header>
  </article>
</template>

<style lang="scss">
  .about {
    width: 50%;
    margin: 5rem auto;
    .header {
      display: flex;
      justify-content: space-around;
    }
  }
  .skill {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    background-color: red;
    width: 100px;
    height: 100px;
  }
</style>
