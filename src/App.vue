<template>
    <div>
        <button @click="$router.push('/Home')">Home界面</button>
        <button @click="$router.push('/About')">Aome界面</button>
        <router-view/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>