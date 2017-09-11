<template>
  <div>

    <div class="columns">
      <div class="column is-half">
        <ul>
          <li v-for="cat in cats" v-on:click="selectCat(cat)">
            {{cat.name}}
          </li>
        </ul>
      </div>
      <div class="column">
        <cat v-if="selectedCat" v-bind:cat="selectedCat"></cat>
        <h1 v-else>No hay un gato seleccionado</h1>
      </div>
    </div>
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
      { name: 'Foo', img: 'https://static.pexels.com/photos/20787/pexels-photo.jpg', count:0 },
      { name: 'Fuur', img: 'http://www.petmd.com/sites/default/files/hypoallergenic-cat-breeds.jpg',count:0 },
        { name: 'Fiir', img: 'https://www.anipedia.net/imagenes/videos-gatos.jpg' },
        { name: 'Foor', img: 'http://sumedico.com/wp-content/uploads/2016/06/C%C3%B3mo_saber_si_tu_gato_te_quiere.jpg',count:0 },
        { name: 'Farr', img: 'https://img.notigatos.es/wp-content/uploads/2015/08/gato_naranja.jpg',count:0 }
      ],
      selectedCat: null
    }
  },
  methods: {
    selectCat: function (cat) {
      this.selectedCat = cat;
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



a {
  color: #42b983;
}
</style>
