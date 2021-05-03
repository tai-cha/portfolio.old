<template>
  <div class="home">
    <h1>Hello, I am taichan!</h1>
    <router-link
      to="/about"
      class="learn"
    >
      Learn about me.
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
};
</script>
<style lang="scss" scoped>
  .learn {
    position: relative;
    color: #E8F0F4;
    padding-bottom: 3px;
    text-decoration: none;
    transition: 400ms ease;
    &:visited {
      color: inherit;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 0;
      border-bottom: 1px solid #E8F0F4;
      transition: 400ms ease;
    }
    &:hover::after {
      transform: scaleX(1.2);
    }
  }
</style>
