<template>
    <div class="lesson-list">
        <ul>
            <li>推荐</li>
            <li>高中数学</li>
            <li>高中语文</li>
            <li>高中英语</li>
            <li>高中化学</li>
            <li>高中物理</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LessonsList"
    }
</script>

<style lang="scss">
    .lesson-list {
        margin-top: 80px;
        ul {
            display: flex;
            margin: 0;
            padding: 0;
            overflow-x: scroll;
            &::-webkit-scrollbar {
                display: none;
                height: 20px;
            }
            li {
                padding: 10px 20px;
                word-break: keep-all;
                list-style: none;
            }
        }
    }

</style>
