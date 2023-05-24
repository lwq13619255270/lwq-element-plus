<template>
    <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
            <el-menu-item index="1">
                <lwq-icon-menu class="mr-4"></lwq-icon-menu>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <lwq-icon-menu class="mr-4"></lwq-icon-menu>
                <span>图标</span>
            </el-menu-item>
            <el-menu-item index="3">
                <lwq-icon-menu class="mr-4"></lwq-icon-menu>
                <span>Navigator Four</span>
            </el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>
    import { ref } from "vue"
    let isCollapse = ref(false);
</script> 
<style lang="scss" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
</style>