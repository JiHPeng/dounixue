<template>
    <div class="search-bar">
        <select name="" id="">
            <option value="">请选择</option>
            <option value="">初中部</option>
            <option value="">高中部</option>
        </select>
        <input type="text">
    </div>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style lang="scss">
    .search-bar {
        position: fixed;
        left: 0;
        right: 0;
        top: 40px;
        display: flex;
        padding: 10px;
        > select {
            margin-right: 10px;
        }
        > input {
            flex: 1;
        }
    }
</style>
