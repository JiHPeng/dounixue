<template>
    <div class="search-bar">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-select>
                    <el-option>初中部</el-option>
                    <el-option>高中部</el-option>
                </el-select>
            </el-col>
            <el-col :span="20">
                <el-input></el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "searchBar"
    }
</script>

<style lang="scss">
    .search-bar {
        margin-top: 40px;
        padding: 10px;
    }


</style>
