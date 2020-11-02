<template>
  <div class="index">
    <p>{{ msg }}</p>
    <img src="../assets/image/fashion.jpg" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Webpack & Vue'
    }
  }
}
</script>

<style>
img {
  height: 200px;
}
</style>