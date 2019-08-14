<template>
  <div class="home">
    <global-header></global-header>
    <search-bar></search-bar>
    <lessons-list></lessons-list>
    <div class="home-lesson">
      <div class="lesson-box">
        <div class="lesson-box-name">高中语文</div>
        <div class="lesson-box-list">
          <img src="" alt="">
          <span class="lesson-box-list-name">第一课</span>
        </div>
      </div>
    </div>
    <global-footer></global-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import globalHeader from '@/components/GlobalHeader'
import searchBar from '@/components/SearchBar'
import lessonsList from '@/components/LessonsList'
import GlobalFooter from "@/components/GlobalFooter";

export default {
  name: 'home',
  components: {
    GlobalFooter,
    globalHeader,
    searchBar,
    lessonsList
  }
}
</script>

<style lang="scss">
  .home-lesson {
    padding-top: 50px;
    .lesson-box {

    }
  }
</style>