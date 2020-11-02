<template>
  <div class="index">
    <img src="../assets/image/fashion.jpg" alt="" srcset="" />
    {{ msg }}
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