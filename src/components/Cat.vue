<template>
  <div class="cat">
    <img width="300px" v-on:click="counter += 1"  v-bind:src="cat.img">
    <h1>Name: {{cat.name}}</h1>
    <h1>Count: {{counter}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'cat',
    props: ['cat'],
    data () {
      return {
        counter: 0
      }
    }
  }
</script>
