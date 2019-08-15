<template>
  <div>
    <div class="header">
      <div class="header-box">
        <img src="../assets/img/icon/close.png">
        <div>{{ title }}</div>
        <img src="../assets/img/icon/more.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {
    msg: String
  },
  data(){
    return{
      title: 'title'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 10px;
    > .header-box {
      display: flex;
      justify-content: space-between;
      > img {
        height: 30px;
      }
      > div {
        font-size: 25px;
      }
    }
  }
</style>
