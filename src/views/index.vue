<template>
    <div>
        <search-bar></search-bar>
        <lessons-Name></lessons-Name>
        <div class="home-lesson">
            <div class="lesson-box">
                <div class="lesson-box-list" @click="chapter">
                    <img src="../assets/logo.png" alt="">
                    <div>
                        <span class="lesson-box-list-name">第一课</span>
                        <span>已购30人</span>
                        <span>￥99</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBar from '@/components/SearchBar'
    import LessonsName from '@/components/LessonsName'

    export default {
        name: "index",
        components: {
            SearchBar,
            LessonsName
        },
        methods:{
            chapter(){
                this.$router.push({
                    path:'/chapter',
                    query:{

                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .home-lesson {
        padding-top: 50px;
    .lesson-box {
        .lesson-box-list {
            display: flex;
            img {
                height: 110px;
            }
        }
    }
    }
</style>
