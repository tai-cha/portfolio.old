<template>
  <div class="work">
    <h2 v-text="work.title" />
    <div class="img-container">
      <img
        v-if="work.image"
        :src="require(`@/assets/images/${work.image}`)"
        :alt='`"${work.title}"の画像`'
      />
    </div>
    <div class="description" v-html="formedDescription" />
    <a
      v-if="work.url"
      :href="work.url"
      v-text="work.url"
    />
  </div>
</template>

<script>
  export default {
    name: 'Work',
    props: {
      work: {
        type: Object,
        required: true
      }
    },
    computed: {
      formedDescription() {
        if (!(this.work && this.work.description)) return ''
        return this.work.description.replace("\n", "\n<br />")
      }
    }
  };
</script>

<style scoped>
  * {
    color: #565656;
  }

  .work {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #E8F0F4;
    border-radius: 20px;
    padding: 2em;
    width: 100%;
  }

  .description {
    margin: 2em 0;
    text-align: left;
  }
  .img-container {
    max-width: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    box-sizing: border-box;
    width: 90%;
    object-fit: contain;
    border: 5px solid #565656;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
    background-color: #B9F5B9;
    color: #565656;
    padding: 1em;
    border-radius: 30px;
    display: inline-block;
  }
</style>
