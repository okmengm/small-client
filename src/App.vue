<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Header }
}
</script>
