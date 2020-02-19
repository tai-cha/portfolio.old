<template>
  <div id="app">
    <header>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/works">Works</router-link>
      </nav>
    </header>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E8F0F4;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: #565656;
  z-index: 99;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #B9F5F9;
    display: inline-block;

    &.router-link-exact-active {
      color: #FFE79E;
    }

    &:not(:last-child)::after {
      display: inline-block;
      margin: 0 0.4em;
      content: '|';
      color: #E8F0F4;
    }
  }
}

.v-enter {
  transform: translateY(3em);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  transform: translateY(-5em);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
