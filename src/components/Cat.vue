<template>
  <div class="cat">
    <img v-on:click="counter += 1" src="http://static.vix.com/es/sites/default/files/styles/large/public/imj/3/30-cosas-de-los-gatos-que-no-sabias-3.jpg?itok=kG-1h5_b">
    <h1>Count: {{counter}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'cat',
    data () {
      return {
        counter: 0
      }
    }
  }
</script>
