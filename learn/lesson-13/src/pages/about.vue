<template>
<div class="about">
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'About',
        }
    },

    methods: {}
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 14px;
    color: aqua;
}
</style>
