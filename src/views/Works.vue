<template>
  <div class="works">
    <meta
      name="robots"
      content="noindex"
    >
    <h1>Works</h1>
    <work
      v-for="work in work_list"
      :key="work.id"
      :work="work"
    />
  </div>
</template>

<script>
  import Work from '../components/Work';
  export default {
    name: 'Works',
    components: {
      Work
    },
    data() {
      return {
        work_list: []
      }
    },
    beforeCreate() {
      this.$axios.get('/works')
        .then(response =>{
          this.work_list = response.data.contents
        })
    }
  };
</script>

<style scoped>
  .works {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
