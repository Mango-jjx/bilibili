<template>
    <div>
        <headerLayer></headerLayer>
        <nuxt/>
        <footerLayer></footerLayer>
    </div>
</template>

<script>
import headerLayer from "../components/commit/header";
import footerLayer from "../components/commit/footer";
// import demo from "../components/commit/demo";
export default {
    data(){
      return {
          
      }
    },
     components:{
         headerLayer,
         footerLayer
     }
}
</script>

<style>

</style>
