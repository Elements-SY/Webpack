<template>
  <main>
    <header>
      <h1>关于我们</h1>
    </header>
    <h4>虽然使用jQuery库注册了点击事件，但是about.html没有通过cdn引入jQuery库，about.js也没有引入jQuery库，点击我没反应，打开控制台报Uncaught ReferenceError: $ is not defined</h4>
    <button class="btn">我使用jQuery库注册了点击事件</button>
  </main>
</template>
<style lang="css" scoped>
h1 {
  color: red;
}
</style>