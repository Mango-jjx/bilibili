<template>
    <div>
        <headerLayer></headerLayer>
        <nuxt/>
        <footerLayer></footerLayer>
    </div>
</template>

<script>
import headerLayer from "../components/commit/header";
import footerLayer from "../components/commit/footer"
export default {
     components:{
         headerLayer,
         footerLayer
     }
}
</script>

<style>

</style>
