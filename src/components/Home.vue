<template>
  <div>
    <cat v-for="cat in cats" v-bind:cat="cat"></cat>
  </div>
</template>

<script>

import Cat from "../components/Cat.vue";

export default {
  name: 'home',
  components: {
    'cat': Cat
  },
  data () {
    return {
      cats: [
      { name: 'Foo', img: 'https://static.pexels.com/photos/20787/pexels-photo.jpg' },
      { name: 'Fuur', img: 'http://www.petmd.com/sites/default/files/hypoallergenic-cat-breeds.jpg' }
    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
