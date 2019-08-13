<template>
  <div class="home">
    <globalHeader></globalHeader>
    <searchBar></searchBar>
    <lessonsList></lessonsList>
  </div>
</template>

<script>
// @ is an alias to /src
import globalHeader from '@/components/globalHeader.vue'
import searchBar from '@/components/searchBar'
import lessonsList from '@/components/lessonsList'

export default {
  name: 'home',
  components: {
    globalHeader,
    searchBar,
    lessonsList
  }
}
</script>
