<template>
  <div id="app">
    <header>
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/works">Works</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E8F0F4;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  background: #565656;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #B9F5F9;

    &.router-link-exact-active {
      color: #FFE79E;
    }
  }
}
</style>
