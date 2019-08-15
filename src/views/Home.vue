<template>
  <div class="home">
    <global-header></global-header>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import globalHeader from '@/components/GlobalHeader'
import GlobalFooter from "@/components/GlobalFooter";

export default {
  name: 'home',
  components: {
    GlobalFooter,
    globalHeader,
  }
}
</script>

<style lang="scss">

</style>
