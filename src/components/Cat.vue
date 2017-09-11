<template>
  <div class="cat">
    <img width="300px" v-on:click="cat.count += 1"  v-bind:src="cat.img">
    <h1>Name: {{cat.name}}</h1>
    <h1>Count: {{cat.count}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'cat',
    props: ['cat'],
    data () {
      return {
      }
    }
  }
</script>
